export default async function handler(req, res) {
  // Устанавливаем заголовки для CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Или замените '*' на ваш домен, если хотите ограничить доступ
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'POST') {
    // Извлекаем данные из тела запроса
    const { name, email, message } = req.body;

    try {
      // Отправляем запрос на API Directus
      const response = await fetch('https://directus.botika.cloud/items/form_submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer NNlKVI8S9UI88OfBLAj99lzaZkzGvfRA', // Ваш API токен
        },
        body: JSON.stringify({
            name: name, 
            email: email, 
            phone: phone,
            message: message
        }),
      });

      // Если запрос успешен
      if (response.ok) {
        res.status(200).json({ success: true, message: 'Form successfully submitted!' });
      } else {
        const error = await response.json();
        res.status(400).json({ error: error?.errors?.[0]?.message || 'Something went wrong' });
      }
    } catch (err) {
      // Обработка ошибки
      res.status(500).json({ error: 'Error submitting the form. Please check your connection.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // Для других методов (например, GET)
  }
}
