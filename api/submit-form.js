// /api/submit-form.js

export default async function handler(req, res) {
  const allowedOrigins = ['https://ivanmelnyk.dev', 'https://www.ivanmelnyk.dev'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, message, phone } = req.body;

    const response = await fetch(`${process.env.DIRECTUS_URL}/items/form_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          'Authorization': `Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA`, // Используем переменную окружения для токена
         },
      body: JSON.stringify({ name, email, message, phone }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      return res.status(response.status).json({ error: errorData });
    }

    const data = await response.json();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

