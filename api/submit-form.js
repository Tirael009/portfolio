const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message, phone } = req.body;

  try {
    const response = await fetch(`https://directus.botika.cloud/items/form_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA`,
      },
      body: JSON.stringify({ name, email, message, phone }),
    });

    const result = await response.json();
    res.status(200).json({ success: true, result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
