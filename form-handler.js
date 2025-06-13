document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Отменяем стандартное поведение формы (перезагрузку страницы)

  // Получаем значения из полей формы
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const phone = document.getElementById('phone').value.trim(); // Получаем номер телефона
  const terms = document.getElementById('terms').checked; // Проверяем чекбокс

  // Если чекбокс не отмечен, показываем предупреждение
  if (!terms) {
    alert('Вы должны согласиться с условиями.');
    return;
  }

  // Создаем объект данных для отправки
  const payload = { name, email, message, phone, terms };

  try {
    // Отправляем запрос на серверless-функцию
    const res = await fetch('/api/submit-form', {
      method: 'POST', // Используем метод POST
      headers: {
        'Content-Type': 'application/json', // Отправляем данные в формате JSON
      },
      body: JSON.stringify(payload), // Преобразуем данные в JSON и отправляем
    });

    // Если запрос успешен
    if (res.ok) {
      alert('Форма успешно отправлена!'); // Показываем сообщение об успешной отправке
      e.target.reset(); // Очищаем форму
    } else {
      // Если произошла ошибка на сервере, показываем её пользователю
      const error = await res.json();
      alert('Ошибка: ' + (error?.error || 'Что-то пошло не так'));
    }
  } catch (err) {
    // Если произошла ошибка при отправке запроса (например, проблема с интернетом)
    alert('Ошибка при отправке формы. Проверьте подключение.');
    console.error(err); // Логируем ошибку в консоль для отладки
  }
});
