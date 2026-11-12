/**
 * BUNORA – FormSubmit & Form Validation Handler
 * Validates inputs, blocks empty/spam submissions, handles FormSubmit integration
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation, #contactForm, #cateringForm, #newsletterForm');

  forms.forEach(function (form) {
    var alertEl = form.querySelector('.form-alert-message');
    var submitButton = form.querySelector('button[type="submit"]');

    function getFeedback(field) {
      var wrapper = field.parentElement;
      var feedback = wrapper && wrapper.querySelector('.invalid-feedback');
      if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'invalid-feedback';
        field.insertAdjacentElement('afterend', feedback);
      }
      return feedback;
    }

    function setFieldState(field, valid, message) {
      var feedback = getFeedback(field);
      field.classList.toggle('is-invalid', !valid);
      field.classList.toggle('is-valid', valid);
      if (!valid) feedback.textContent = message;
      return valid;
    }

    function validateField(field) {
      if (!field || field.disabled || field.type === 'hidden' || field.name === '_honey') return true;

      var value = (field.value || '').trim();
      var fieldName = (field.name || '').toLowerCase();
      var label = (field.closest('.col-12, .col-md-6, .col-6, .mb-3') || field.parentElement || form)
        .querySelector('label');
      var labelText = label ? label.textContent.replace('*', '').trim() : 'This field';

      if (field.required && !value) {
        return setFieldState(field, false, labelText + ' is required.');
      }

      // Optional fields remain neutral when empty.
      if (!value) {
        field.classList.remove('is-invalid', 'is-valid');
        return true;
      }

      if (field.type === 'email') {
        var emailRegex = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;
        if (!emailRegex.test(value)) {
          return setFieldState(field, false, 'Please enter a valid email address.');
        }
      }

      if (field.type === 'tel' || fieldName === 'phone') {
        var digits = value.replace(/\D/g, '');
        if (!/^\+?[0-9\s().-]+$/.test(value) || digits.length < 7 || digits.length > 15) {
          return setFieldState(field, false, 'Use a valid phone number with 7–15 digits.');
        }
      }

      if (fieldName === 'name' || /(^|_)(full_name|contact_name|author_name|customer_name)(_|$)/.test(fieldName)) {
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ .,'&-]{1,}$/.test(value)) {
          return setFieldState(field, false, 'Use at least 2 letters; numbers are not allowed in this name field.');
        }
      }

      if (field.tagName === 'TEXTAREA' || /(^|_)(message|comment)(_|$)/.test(fieldName)) {
        if (value.length < 10 || !/[A-Za-z]/.test(value)) {
          return setFieldState(field, false, 'Please enter at least 10 meaningful characters.');
        }
      }

      if (field.type === 'number') {
        var numberValue = Number(value);
        var min = field.getAttribute('min');
        var max = field.getAttribute('max');
        if (!Number.isInteger(numberValue) || (min !== null && numberValue < Number(min)) || (max !== null && numberValue > Number(max))) {
          return setFieldState(field, false, 'Enter a valid guest count' + (min ? ' of at least ' + min + '.' : '.'));
        }
      }

      if (field.type === 'date') {
        var today = new Date();
        var todayValue = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
        if (value < todayValue) {
          return setFieldState(field, false, 'Please choose today or a future date.');
        }
      }

      return setFieldState(field, true, '');
    }

    function showMessage(type, message) {
      if (!alertEl) return;
      alertEl.className = 'alert alert-' + type + ' form-alert-message mt-3';
      alertEl.textContent = message;
      alertEl.style.display = 'block';
    }

    function resetFormAfterSuccess() {
      form.reset();
      form.querySelectorAll('.is-valid, .is-invalid').forEach(function (field) {
        field.classList.remove('is-valid', 'is-invalid');
      });
    }

    form.addEventListener('submit', function (event) {
      var isValid = true;

      // 1. Check Spam Honeypot Field
      var honeypot = form.querySelector('input[name="_honey"]');
      if (honeypot && honeypot.value.trim() !== '') {
        event.preventDefault();
        event.stopPropagation();
        console.warn('Spam submission detected and blocked.');
        return false;
      }

      // 2. Validate every user-editable field, not only empty required fields.
      form.querySelectorAll('input, textarea, select').forEach(function (input) {
        if (!validateField(input)) isValid = false;
      });

      if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
        if (alertEl) {
          alertEl.className = 'alert alert-danger form-alert-message mt-3';
          alertEl.textContent = 'Please fill out all required fields properly.';
          alertEl.style.display = 'block';
        }
        return false;
      }

      // Handle both forms with an inline confirmation and clear them after a
      // successful request. The placeholder FormSubmit URL is treated as a
      // local template confirmation until a real recipient is configured.
      event.preventDefault();
      event.stopPropagation();

      var successMessage = form.id === 'cateringForm'
        ? 'Your catering quote request was sent successfully. We will contact you soon.'
        : form.id === 'commentSubmitForm'
          ? 'Your comment was posted successfully. Thank you for sharing your thoughts.'
        : form.id === 'newsletterForm'
          ? 'You subscribed successfully. Welcome to the BUNORA newsletter.'
        : 'Your message was sent successfully. Thank you for contacting BUNORA.';
      var endpoint = form.getAttribute('action') || '';
      var isTemplateEndpoint = endpoint.includes('your-email@example.com');

      if (!endpoint || endpoint === '#' || isTemplateEndpoint) {
        resetFormAfterSuccess();
        showMessage('success', successMessage);
        return false;
      }

      if (submitButton) submitButton.disabled = true;
      fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (response) {
        if (!response.ok) throw new Error('Submission failed');
        resetFormAfterSuccess();
        showMessage('success', successMessage);
      }).catch(function () {
        showMessage('danger', 'We could not send your request. Please try again.');
      }).finally(function () {
        if (submitButton) submitButton.disabled = false;
      });

      return false;
    });

    // Validate each field as the user leaves it, then re-check invalid fields
    // while they edit them.
    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });
      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) {
          validateField(field);
        }
      });
      field.addEventListener('change', function () {
        if (field.classList.contains('is-invalid')) validateField(field);
      });
    });
  });
});
