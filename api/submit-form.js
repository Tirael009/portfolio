export default async function handler(req, res) {
  // Устанавливаем заголовки для CORS
  const allowedOrigins = ['https://ivanmelnyk.dev', 'https://www.ivanmelnyk.dev'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Обработка POST-запроса
  if (req.method === 'POST') {
    // Извлекаем данные из тела запроса
    const { name, email, message, phone } = req.body;

    // Валидация данных
    if (!name || !email || !message || !phone) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Отправляем запрос на API Directus
      const response = await fetch('https://directus.botika.cloud/items/form_submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA`, // Используем переменную окружения для токена
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message
        }),
      });

      // Проверка успешности запроса
      if (response.ok) {
        res.status(200).json({ success: true, message: 'Form successfully submitted!' });
      } else {
        const error = await response.json();
        res.status(400).json({ error: error?.errors?.[0]?.message || 'Something went wrong with Directus' });
      }
    } catch (err) {
      // Ошибка при отправке запроса
      res.status(500).json({ error: 'Error submitting the form. Please check your connection.' });
    }
  } else {
    // Ошибка, если метод не POST
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
