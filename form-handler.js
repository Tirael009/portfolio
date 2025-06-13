// Обработчик отправки формы
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Отменяем стандартное поведение формы (перезагрузку страницы)

  // Получаем значения из формы
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Создаем объект данных для отправки
  const payload = { name, email, message };

  try {
    // Отправляем запрос на серверless-функцию на Vercel
    const res = await fetch('/api/submit-form', { // Путь к серверless-функции
      method: 'POST', // Используем метод POST
      headers: {
        'Content-Type': 'application/json', // Отправляем данные в формате JSON
      },
      body: JSON.stringify(payload), // Преобразуем данные в JSON и отправляем
    });

    // Если запрос успешен
    if (res.ok) {
      alert('Form successfully submitted!'); // Показываем сообщение об успешной отправке
      e.target.reset(); // Очищаем форму
    } else {
      // Если произошла ошибка на сервере, показываем её пользователю
      const error = await res.json();
      alert('Error: ' + (error?.error || 'Something went wrong'));
    }
  } catch (err) {
    // Если произошла ошибка при отправке запроса (например, проблема с интернетом)
    alert('Error submitting the form. Please check your connection.');
    console.error(err); // Логируем ошибку в консоль для отладки
  }
});
