// api/submit-form.js

export default async function handler(req, res) {
  // Устанавливаем заголовки для CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешаем все домены. Вы можете заменить * на домен, например 'https://portfolio-one-wine-30.vercel.app'
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Разрешаем только методы GET, POST и OPTIONS
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешаем только указанные заголовки

  // Обработка POST-запросов
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await fetch('https://directus.botika.cloud/items/form_submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA',
        },
        body: JSON.stringify({ data: { name, email, message } }),
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
