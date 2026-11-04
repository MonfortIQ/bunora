/**
 * BUNORA – FormSubmit & Form Validation Handler
 * Validates inputs, blocks empty/spam submissions, handles FormSubmit integration
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation, #contactForm, #cateringForm, #newsletterForm');

  forms.forEach(function (form) {
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
        var alertEl = form.querySelector('.form-alert-message');
        if (alertEl) {
          alertEl.className = 'alert alert-danger form-alert-message mt-3';
          alertEl.textContent = 'Please fill out all required fields properly.';
          alertEl.style.display = 'block';
        }
        return false;
      }

      // Check if recipient email is placeholder
      var actionUrl = form.getAttribute('action') || '';
      if (actionUrl.includes('your-email@example.com')) {
        event.preventDefault();
        event.stopPropagation();
        var alertEl = form.querySelector('.form-alert-message');
        if (alertEl) {
          alertEl.className = 'alert alert-info form-alert-message mt-3';
          alertEl.innerHTML = '<strong>Template Notice:</strong> Form validated successfully! To receive live messages, replace <code>your-email@example.com</code> in the form <code>action</code> attribute with your verified FormSubmit recipient email address.';
          alertEl.style.display = 'block';
        }
        return false;
      }
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
