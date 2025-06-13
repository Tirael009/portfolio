export default async function handler(req, res) {
  // Устанавливаем заголовки для CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Или замените '*' на ваш домен
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'POST') {
    const { name, email, message } = req.body; // Извлекаем данные из формы

    try {
      // Отправляем данные в Directus API
      const response = await fetch('http://91.99.15.82:8055/items/form_submissions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer NN1KVI8S9UI88OfBLAj99lzaZkzGvfRA', // Ваш API-ключ
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        res.status(200).json({ success: true, message: 'Form successfully submitted!' });
      } else {
        const error = await response.json();
        res.status(400).json({ error: error?.errors?.[0]?.message || 'Something went wrong' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Error submitting the form. Please check your connection.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
