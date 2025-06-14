// === Перевод языка ===
const translations = {
	en: {
		home: "Home",
		projects: "Projects",
		skills: "Skills",
		contact: "Contact",
		"hero-heading": "AI-Powered Workflows. Real Business Impact",
		"hero-desc": "I build automated systems that handle your sales, emails, and CRM — so your business runs 24/7, without micromanagement.",
		"explore-more": "Let’s Automate",
		// Skill Cards
		"platform-capabilities": "Skills",
		"custom-automations-title": "Workflow Automation",
		"custom-automations-desc": "Process automation: leads, tasks, notifications, reports — no manual routine.",
		"ai-bots-title": "AI Systems & Bots",
		"ai-bots-desc": "AI for analytics, smart replies, content generation and chatbot flows.",
		"third-party-integrations-title": "Third-Party Integrations",
		"third-party-integrations-desc": "Connect Telegram, Stripe, OpenAI, ZeroBounce and many more.",
		"automation-analytics-title": "Real-Time Dashboards",
		"automation-analytics-desc": "Live analytics and charts to monitor sales and operations.",
		"ai-automation-title": "AI-Driven Automation",
		"ai-automation-desc": "Intelligent workflows that analyze, decide, create, and act for you.",
		"email-setup-title": "Email Infrastructure",
		"email-setup-desc": "Email marketing with Amazon SES: warm-up, validation, design, inbox boost.",
		"crm-workflows-title": "Custom CRM Logic",
		"crm-workflows-desc": "Smart CRM automation: follow-ups, reminders, status flows.",
		"landing-pages-title": "Landing Pages",
		"landing-pages-desc": "Landing pages and forms: responsive design, CRM-ready and analytics ready.",
		"code-skills-title": "JS / Python / SQL",
		"code-skills-desc": "Code-level logic: functions, transformations and API scripting.",
		"platforms-title": "n8n, Make, Directus",
		"platforms-desc": "Expert workflows using top open-source and low-code automation tools.",
		// About Me Section
		"about-title": "About Me",
		"about-intro": "I'm a business automation specialist helping companies simplify operations, boost efficiency and scale faster. I design intelligent workflows using tools like n8n, Make and Directus — integrating AI where it delivers the most value.",
		"about-benefits-title": "What You Get",
		"about-benefit-1": "Automated processes that save you time and money",
		"about-benefit-2": "Systems that run 24/7 without manual control",
		"about-benefit-3": "Analytics and dashboards for clear decision-making",
		"about-benefit-4": "CRM tools tailored to your exact flow",
		"about-benefit-5": "Email marketing with high deliverability and response",
		"about-benefit-6": "Integration with the platforms you already use",
		"about-closing": "Whether you're a startup or an established company — I’ll help you implement automation that works for you.",
		// AI Use Cases Section
		"ai-usecases-title": "AI Automations in Action",
		"sales-notification": "AI-Powered Sales Automation",
		"sales-ai-caption": "AI automatically scores leads, generates offers, updates CRM and sends follow-up emails — all in one workflow.",
		"ai-chatbot": "Conversational Assistant with OpenAI",
		"chatbot-caption": "AI chatbot that communicates with users, compiles reports, and executes requests — like sending data to a manager.",
		"chat-user-1": "Hey, can you summarize today's incoming leads?",
		"chat-bot-1": "Sure! You've received 38 new leads today. 24 were qualified, 14 unqualified.",
		"chat-user-2": "Can you send the qualified ones to the CRM?",
		"chat-bot-2": "Already done ✅ Leads pushed to CRM with tags and scores.",
		"chat-user-3": "Great. Draft a follow-up email for the top 5.",
		"chat-bot-3": "Email prepared. Would you like me to send it now or save as draft?",
		"chat-user-4": "Save it as draft. I’ll review it in a bit.",
		"chat-bot-4": "Done. Let me know if you'd like to schedule it later."
	},
	ua: {
		home: "Головна",
		projects: "Проєкти",
		skills: "Навички",
		contact: "Контакти",
		about: "Про мене",
		"hero-heading": "Автоматизація на основі ШІ.<br/>Бізнес-результат",
		"hero-desc": "Я створюю автоматизовані системи для лідів, продажів, email-кампаній і CRM — щоб ваш бізнес працював 24/7 без постійного контролю.",
		"explore-more": "Автоматизуймо",
		"agree-terms": "Я погоджуюсь з політикою конфіденційності та з тим, що мені можуть зв’язатися щодо мого запиту",
		// Skill Cards
		"platform-capabilities": "Навички",
		"custom-automations-title": "Автоматизація процесів",
		"custom-automations-desc": "Автоматизація: заявки, задачі, сповіщення, звіти — без ручної рутини.",
		"ai-bots-title": "Системи та боти з ШІ",
		"ai-bots-desc": "ШІ для аналітики, відповідей, генерації контенту та чат-ботів.",
		"third-party-integrations-title": "Інтеграції",
		"third-party-integrations-desc": "Підключення Telegram, Stripe, OpenAI, ZeroBounce та інших.",
		"automation-analytics-title": "Дашборди в реальному часі",
		"automation-analytics-desc": "Жива аналітика і графіки для контролю продажів і процесів.",
		"ai-automation-title": "Автоматизація з ШІ",
		"ai-automation-desc": "Інтелектуальні воркфлоу, які аналізують, вирішують і діють.",
		"email-setup-title": "Інфраструктура Email",
		"email-setup-desc": "Email-розсилки з Amazon SES: прогрів, валідація, дизайн, inbox.",
		"crm-workflows-title": "Логіка CRM",
		"crm-workflows-desc": "Автоматизація CRM: нагадування, статуси, повторні дії.",
		"landing-pages-title": "Лендінги",
		"landing-pages-desc": "Односторінкові сайти та форми: адаптивність, аналітика, CRM.",
		"code-skills-title": "JS / Python / SQL",
		"code-skills-desc": "Кодова логіка: функції, трансформації та API-запити.",
		"platforms-title": "n8n, Make, Directus",
		"platforms-desc": "Автоматизація з найкращими open-source/low-code платформами.",
		// AI Use Cases Section
		"ai-usecases-title": "Автоматизація з ІІ в дії",
		"sales-notification": "Автоматизація продажів на базі ШІ",
		"sales-ai-caption": "ШІ автоматично оцінює ліди, створює офери, оновлює CRM та надсилає follow-up листи — все в одному процесі.",
		"ai-chatbot": "Розмовний асистент з OpenAI",
		"chatbot-caption": "Чат-бот з ШІ, який спілкується з користувачами, створює звіти і виконує запити — наприклад, надсилання даних менеджеру.",
		"chat-user-1": "Привіт, можеш підсумувати сьогоднішні вхідні ліди?",
		"chat-bot-1": "Звісно! Сьогодні отримано 38 нових лідів. 24 кваліфіковані, 14 — ні.",
		"chat-user-2": "Можеш відправити кваліфіковані в CRM?",
		"chat-bot-2": "Готово ✅ Ліди перенесені до CRM з тегами та оцінками.",
		"chat-user-3": "Добре. Створи чернетку follow-up листа для топ-5.",
		"chat-bot-3": "Чернетка готова. Відправити зараз чи зберегти?",
		"chat-user-4": "Збережи як чернетку. Перевірю пізніше.",
		"chat-bot-4": "Готово. Повідом, якщо захочеш запланувати відправку.",
		name: "Ім’я",
		email: "Електронна пошта",
		phone: "Номер телефону",
		message: "Повідомлення",
		send: "Надіслати",
		// About Me
		"about-title": "Про мене",
		"about-text-line-1": "Мене звати Іван — я інженер з автоматизації, допомагаю бізнесам спрощувати процеси, прибирати рутину та масштабуватись ефективно.",
		"about-text-line-2": "Я створюю backend-системи на базі <strong>n8n</strong>, <strong>Directus</strong> і <strong>OpenAI</strong>, які автоматизують розсилки, звіти, завдання, сповіщення та бізнес-логіку — щоб ваші інструменти працювали разом, а не окремо.",
		"about-text-line-3": "Мої рішення працюють цілодобово: обробляють дані, формують точні звіти, зменшують помилки та забезпечують стабільність. Вони не забувають і не сповільнюються навіть у пік навантаження.",
		"about-benefits-heading": "Що ви отримаєте:",
		"about-benefit-1": "Суттєва економія часу завдяки автоматизації рутинних задач",
		"about-benefit-2": "Зниження витрат за рахунок оптимізації процесів",
		"about-benefit-3": "Достовірні дані та звіти в реальному часі для швидких рішень",
		"about-benefit-4": "Масштабованість — рішення не втрачають ефективності при зростанні",
		"about-benefit-5": "Кращий клієнтський досвід завдяки швидкості й точності",
		"about-text-line-4": "Якщо хочете бізнес, який працює розумніше — а не важче — реалізуємо це разом."
	},
	es: {
		home: "Inicio",
		projects: "Proyectos",
		skills: "Habilidades",
		contact: "Contacto",
		about: "Sobre mí",
		"hero-heading": "Flujos de trabajo con IA.<br/>Impacto real para tu negocio",
		"hero-desc": "Construyo sistemas automatizados que gestionan tus ventas, emails y CRM — para que tu negocio funcione 24/7 sin microgestión.",
		"explore-more": "Automatizar ahora",
		"agree-terms": "Acepto la política de privacidad y ser contactado respecto a mi solicitud",
		// Skill Cards
		"platform-capabilities": "Habilidades",
		"custom-automations-title": "Automatización de Flujos",
		"custom-automations-desc": "Automatización de procesos: tareas, notificaciones y reportes sin rutina manual.",
		"ai-bots-title": "Sistemas y Bots con IA",
		"ai-bots-desc": "IA para análisis, respuestas inteligentes, generación de contenido y bots.",
		"third-party-integrations-title": "Integraciones",
		"third-party-integrations-desc": "Conexión con Telegram, Stripe, OpenAI, ZeroBounce y más.",
		"automation-analytics-title": "Paneles en Tiempo Real",
		"automation-analytics-desc": "Gráficas y analíticas en vivo para ventas y operaciones.",
		"ai-automation-title": "Automatización con IA",
		"ai-automation-desc": "Flujos inteligentes que analizan, deciden, crean y actúan por ti.",
		"email-setup-title": "Infraestructura de Email",
		"email-setup-desc": "Email marketing con Amazon SES: calentamiento, validación y diseño.",
		"crm-workflows-title": "Lógica CRM Personalizada",
		"crm-workflows-desc": "Automatización de CRM: recordatorios, seguimientos, flujos de estados.",
		"landing-pages-title": "Landing Pages",
		"landing-pages-desc": "Sitios de una sola página y formularios: diseño adaptativo y conexión con CRM y análisis.",
		"code-skills-title": "JS / Python / SQL",
		"code-skills-desc": "Lógica avanzada: funciones, transformaciones y scripting API.",
		"platforms-title": "n8n, Make, Directus",
		"platforms-desc": "Automatizaciones con herramientas open-source y low-code.",
		"sales-notification": "Notificación de Ventas",
		"ai-chatbot": "Chatbot IA",
		"chat-user-1": "Hola, ¿puedes generar un informe mensual de ventas?",
		"chat-bot-1": "¡Por supuesto! Compilando datos y generando PDF... Hecho. ¿Quieres que lo envíe por email?",
		"chat-user-2": "Sí, también a mi gerente.",
		"chat-bot-2": "¡Enviado! ✅ ¿Hay algo más en lo que pueda ayudarte?",
		"contact-us": "Contáctame",
		name: "Nombre",
		email: "Correo electrónico",
		phone: "Número de teléfono",
		message: "Mensaje",
		send: "Enviar",
		"about-title": "Sobre mí",
		"about-text-line-1": "Soy Ivan — un ingeniero de automatización que ayuda a las empresas a simplificar procesos, eliminar trabajo manual y escalar de forma efectiva.",
		"about-text-line-2": "Diseño sistemas backend con <strong>n8n</strong>, <strong>Directus</strong> y <strong>OpenAI</strong> para automatizar emails, informes, flujos de tareas, notificaciones y lógica personalizada — para que tus herramientas trabajen juntas, no por separado.",
		"about-text-line-3": "Mis soluciones operan 24/7: procesan datos, generan análisis precisos, reducen errores humanos y garantizan consistencia. No duermen, no olvidan ni se ralentizan — ni siquiera en los momentos de más carga.",
		"about-benefits-heading": "Qué obtendrás:",
		"about-benefit-1": "Ahorro significativo de tiempo cada mes al automatizar tareas repetitivas",
		"about-benefit-2": "Menores costos operativos gracias a procesos más eficientes",
		"about-benefit-3": "Datos fiables e informes en tiempo real para decisiones más rápidas",
		"about-benefit-4": "Sistemas escalables que soportan un mayor volumen sin esfuerzo",
		"about-benefit-5": "Mejor experiencia del cliente gracias a la velocidad y precisión",
		"about-text-line-4": "Si quieres un negocio que funcione de forma más inteligente — y sin fricciones — construyámoslo juntos.",
		// AI Use Cases Section
		"ai-usecases-title": "Automatizaciones con IA en Acción",
		"sales-notification": "Automatización de Ventas con IA",
		"sales-ai-caption": "La IA califica leads, genera ofertas, actualiza el CRM y envía correos de seguimiento — todo en un solo flujo.",
		"ai-chatbot": "Asistente Conversacional con OpenAI",
		"chatbot-caption": "Chatbot de IA que se comunica con usuarios, compila informes y ejecuta solicitudes — como enviar datos al gerente.",
		"chat-user-1": "Hola, ¿puedes resumir los leads entrantes de hoy?",
		"chat-bot-1": "¡Claro! Hoy has recibido 38 nuevos leads. 24 calificados, 14 no calificados.",
		"chat-user-2": "¿Puedes enviar los calificados al CRM?",
		"chat-bot-2": "Listo ✅ Leads enviados al CRM con etiquetas y puntuaciones.",
		"chat-user-3": "Perfecto. Redacta un email de seguimiento para los 5 mejores.",
		"chat-bot-3": "Correo preparado. ¿Deseas enviarlo ahora o guardarlo como borrador?",
		"chat-user-4": "Guárdalo como borrador. Lo revisaré más tarde.",
		"chat-bot-4": "Hecho. Avísame si deseas programarlo más tarde."
	}
};

function changeLanguage(lang) {
	const elements = document.querySelectorAll("[data-translate]");
	elements.forEach((el) => {
		const key = el.getAttribute("data-translate");
		if (translations[lang][
				key
			]) {
			el.innerHTML = translations[lang][key];
		}
	});
}
// установка языка по умолчанию
changeLanguage("en");
// переключение языка
const langButtons = document.querySelectorAll(".lang");
langButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		langButtons.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");
		const lang = btn.getAttribute("data-lang");
		changeLanguage(lang);
	});
});
// === Scroll reveal ===
function revealOnScroll() {
	const reveals = document.querySelectorAll(".reveal");
	for (let el of reveals) {
		const windowHeight = window.innerHeight;
		const revealTop = el.getBoundingClientRect().top;
		const revealPoint = 100;
		if (revealTop < windowHeight - revealPoint) {
			el.classList.add("visible");
		}
	}
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
	document.body.classList.add("loaded");
	revealOnScroll();
});
// === ScrollSpy: Подсветка активной ссылки в навигации ===
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function updateActiveNavLink() {
	let scrollY = window.pageYOffset;
	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 100;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.getAttribute("id");
		if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
			navLinks.forEach((link) => {
				link.classList.remove("active");
				if (link.getAttribute("href") === `#${sectionId}`) {
					link.classList.add("active");
				}
			});
		}
	});
}
window.addEventListener("scroll", updateActiveNavLink);
// === Burger Menu Toggle ===
const burger = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav-links');
if (burger && navLinksContainer) {
	burger.addEventListener('click',
		() => {
			navLinksContainer.classList.toggle('show');
		});
	document.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			navLinksContainer.classList.remove('show');
		});
	});
}
// === Smooth scroll with offset for sticky header ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		const targetID = this.getAttribute("href").substring(1);
		const targetElement = document.getElementById(targetID);
		const offset = 80; // отступ от верха (высота твоего sticky header)
		const elementPosition = targetElement.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	});
});
// === Typing Animation for Chat Messages ===
function startTypingAnimation() {
	const chatMessages = document.querySelectorAll("#chat-trigger .chat-message p");
	let delay = 0;
	const typingSpeed = 25;
	chatMessages.forEach((msg) => {
		const fullText = msg.textContent;
		msg.textContent = "";
		const container = msg.parentElement;
		container.style.opacity = "0";
		container.style.transform = "translateY(10px)";
		setTimeout(() => {
			container.style.opacity = "1";
			container.style.transform = "translateY(0)";
			let i = 0;
			const type = () => {
				if (i <= fullText.length) {
					msg.textContent = fullText.slice(0, i++);
					setTimeout(type, typingSpeed);
				}
			};
			type();
		}, delay);
		delay += fullText.length * typingSpeed + 300;
	});
}
// Запуск по скроллу
const chatBox = document.getElementById("chat-trigger");
let hasStarted = false;
const observer = new IntersectionObserver((entries) => {
	if (entries[0].isIntersecting && !hasStarted) {
		startTypingAnimation();
		hasStarted = true;
		observer.disconnect();
	}
}, {
	threshold: 0.5
});
observer.observe(chatBox);
