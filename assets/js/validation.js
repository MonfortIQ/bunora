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

      // 2. Validate Required Inputs
      var requiredInputs = form.querySelectorAll('[required]');
      requiredInputs.forEach(function (input) {
        var errorFeedback = input.parentElement.querySelector('.invalid-feedback');
        
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
          if (errorFeedback) errorFeedback.textContent = 'This field is required.';
        } else {
          // Email validation
          if (input.type === 'email') {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
              isValid = false;
              input.classList.add('is-invalid');
              input.classList.remove('is-valid');
              if (errorFeedback) errorFeedback.textContent = 'Please enter a valid email address.';
              return;
            }
          }

          // Phone validation
          if (input.type === 'tel' && input.value.trim().length < 7) {
            isValid = false;
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            if (errorFeedback) errorFeedback.textContent = 'Please enter a valid phone number.';
            return;
          }

          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }
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

    // Clear validation error on user input
    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) {
          field.classList.remove('is-invalid');
        }
      });
    });
  });
});
