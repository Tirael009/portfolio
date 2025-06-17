let typingInProgress = false;
let currentTypingSession = 0;

async function startConversation() {
	if (typingInProgress) return;
	typingInProgress = true;
	const sessionId = ++currentTypingSession;

	const chatMessageBlocks = document.querySelectorAll("#chat-trigger .chat-message");
	const typingSpeed = 25;
	const pauseBetweenMessages = 400;

	// Сбросить все сообщения перед началом
	chatMessageBlocks.forEach((container) => {
		container.style.opacity = "0";
		container.style.transform = "translateY(10px)";
		const msg = container.querySelector("p");
		msg.textContent = "";
	});

	for (const container of chatMessageBlocks) {
		if (sessionId !== currentTypingSession) return;

		const msg = container.querySelector("p");
		const key = msg.getAttribute("data-translate");
		const fullText = translations[currentLang]?.[key] || "";

		container.style.opacity = "1";
		container.style.transform = "translateY(0)";
		msg.textContent = "";

		for (let i = 0; i <= fullText.length; i++) {
			if (sessionId !== currentTypingSession) return;
			msg.textContent = fullText.slice(0, i);
			await new Promise((r) => setTimeout(r, typingSpeed));
		}

		await new Promise((r) => setTimeout(r, pauseBetweenMessages));
	}

	typingInProgress = false;
}

let chatStarted = false;

const chatTrigger = document.getElementById("chat-trigger");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && !chatStarted) {
			chatStarted = true;
			startConversation();
			observer.disconnect();
		}
	});
}, { threshold: 0.3 });

if (chatTrigger) {
	observer.observe(chatTrigger);
}

document.addEventListener("languageChanged", () => {
	currentTypingSession++;       // Сброс текущей сессии
	typingInProgress = false;     // Прекратить текущую анимацию

	const isVisible = chatTrigger.getBoundingClientRect().top < window.innerHeight;

	if (isVisible) {
		chatStarted = true;
		startConversation(); // если чат в зоне видимости — сразу запуск
	} else {
		chatStarted = false; // ждём снова доскролла
		observer.observe(chatTrigger);
	}
});