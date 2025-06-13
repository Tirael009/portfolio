form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Sending data:', data); // Добавлено логирование данных

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('Form submission successful:', await response.json());
        } else {
            console.error('Form submission failed with status:', response.status);
        }
    } catch (error) {
        console.error('Form submission error:', error);
    }
});
