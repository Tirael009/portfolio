document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    const payload = { name, email, phone, message };

    try {
      const res = await fetch("https://directus.botika.cloud/items/form_submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA",
        },
        body: JSON.stringify({ data: payload }),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        const err = await res.json();
        alert("Failed to send message: " + JSON.stringify(err));
      }
    } catch (err) {
      alert("Error occurred: " + err.message);
    }
  });
});
