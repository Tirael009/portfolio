document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const payload = {
    data: { name, email, message }
  };

  try {
    const res = await fetch('http://91.99.15.82:8055/items/form_submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Form successfully submitted!');
      e.target.reset();
    } else {
      const error = await res.json();
      alert('Error: ' + (error?.errors?.[0]?.message || 'Something went wrong'));
    }
  } catch (err) {
    alert('Error submitting the form. Please check your connection.');
    console.error(err);
  }
});
