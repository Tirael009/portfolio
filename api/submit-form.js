export async function initFormSubmit(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status) {
        alert('Submitted successfully');
        form.reset();
      } else {
        alert('Validation errors: ' + JSON.stringify(result.errors));
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('Submission failed');
    }
  });
}
