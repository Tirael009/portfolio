// === Перевод языка ===
const translations = {
	en: {
    // ========== Global & Navigation ==========
    "about": "About",
    "contact": "Contact",
    "home": "Home",
    "projects": "Projects",
    "skills": "Skills",
    "menu-title": "Menu",
    "close-menu": "Close menu",

    // ========== Hero Section ==========
    "explore-more": "Let’s Automate",
    "hero-desc": "I build automated systems that handle your sales, emails, and CRM — so your business runs 24/7, without micromanagement.",
    "hero-heading-line1": "AI-Powered Workflows.",
    "hero-heading-line2": "Real Business Impact.",

    // ========== About Section ==========
    "about-title": "About Me",
    "about-benefit-1": "Automated processes that save you time and money",
    "about-benefit-2": "Systems that run 24/7 without manual control",
    "about-benefit-3": "Analytics and dashboards for clear decision-making",
    "about-benefit-4": "CRM tools tailored to your exact flow",
    "about-benefit-5": "Email marketing with high deliverability and response",
    "about-benefit-6": "Integration with the platforms you already use",
    "about-benefits-title": "What You Get",
    "about-closing": "Whether you're a startup or an established company — I'll help you implement automation that works for you.",
    "about-text-line-1": "I'm Ivan — an automation engineer who helps businesses simplify workflows, eliminate manual work, and scale effectively.",
    "about-text-line-2": "I design backend systems built with <strong>n8n</strong>, <strong>Directus</strong>, and <strong>OpenAI</strong> to automate emails, reporting, task flows, notifications, and custom logic — so your tools work together, not in silos.",
    "about-text-line-3": "My solutions operate 24/7 — processing data, generating accurate insights, reducing human errors, and ensuring consistency. They don't sleep, forget, or slow down — even at peak times.",
    "about-text-line-4": "If you want a business that runs smarter — not harder — with smooth workflows and data-driven clarity, let's build it together.",

    // ========== Skills Section ==========
    "platform-capabilities": "Skills",
    
    // Skill Cards
    "ai-automation-desc": "Intelligent workflows that analyze, decide, create, and act for you.",
    "ai-automation-title": "AI-Driven Automation",
    "ai-bots-desc": "AI for analytics, smart replies, content generation and chatbot flows.",
    "ai-bots-title": "AI Systems & Bots",
    "automation-analytics-desc": "Live analytics and charts to monitor sales and operations.",
    "automation-analytics-title": "Real-Time Dashboards",
    "code-skills-desc": "Code-level logic: functions, transformations and API scripting.",
    "code-skills-title": "JS / Python / SQL",
    "crm-workflows-desc": "Smart CRM automation: follow-ups, reminders, status flows.",
    "crm-workflows-title": "Custom CRM Logic",
    "custom-automations-desc": "Process automation: leads, tasks, notifications, reports — no manual routine.",
    "custom-automations-title": "Workflow Automation",
    "email-setup-desc": "Email marketing with Amazon SES: warm-up, validation, design, inbox boost.",
    "email-setup-title": "Email Infrastructure",
    "landing-pages-desc": "Landing pages and forms: responsive design, CRM-ready and analytics ready.",
    "landing-pages-title": "Landing Pages",
    "platforms-desc": "Expert workflows using top open-source and low-code automation tools.",
    "platforms-title": "n8n, Make, Directus",
    "third-party-integrations-desc": "Connect Telegram, Stripe, OpenAI, ZeroBounce and many more.",
    "third-party-integrations-title": "Third-Party Integrations",

    // ========== Projects/Use Cases ==========
    "ai-usecases-title": "AI Automations in Action",
    
    // Chatbot Example
    "ai-chatbot": "Conversational Assistant with OpenAI",
    "chat-bot-1": "Sure! You've received 38 new leads today. 24 were qualified, 14 unqualified.",
    "chat-bot-2": "Already done ✅ Leads pushed to CRM with tags and scores.",
    "chat-bot-3": "Email prepared. Would you like me to send it now or save as draft?",
    "chat-bot-4": "Done. Let me know if you'd like to schedule it later.",
    "chat-user-1": "Hey, can you summarize today's incoming leads?",
    "chat-user-2": "Can you send the qualified ones to the CRM?",
    "chat-user-3": "Great. Draft a follow-up email for the top 5.",
    "chat-user-4": "Save it as draft. I'll review it in a bit.",
    "chatbot-caption": "AI chatbot that communicates with users, compiles reports, and executes requests — like sending data to a manager.",
    
    // Sales Automation
    "sales-ai-caption": "AI automatically scores leads, generates offers, updates CRM and sends follow-up emails — all in one workflow.",
    "sales-notification": "AI-Powered Sales Automation",

    // ========== Contact Form ==========
    "agree-terms": "I agree to the privacy policy and to be contacted regarding my request",
    "contact-us": "Contact Us",
    "email": "Email",
    "message": "Message",
    "name": "Name",
    "phone": "Phone Number",
    "send": "Send",
    // ========== Footer ==========
    "footer-specialist": "Automation specialist creating AI-powered workflows that drive real business impact.",
    "footer-rights": "All rights reserved",
    "footer-navigation": "NAVIGATION",
    "footer-connect": "Connect",
    "footer-ready": "Ready to automate?",
    "footer-hire": "Hire Me"
  },
	ua: {
    // ========== Глобальні елементи та навігація ==========
    "about": "Про мене",
    "contact": "Контакти",
    "home": "Головна",
    "projects": "Проєкти",
    "skills": "Навички",

    // ========== Герой-секція ==========
    "explore-more": "Автоматизуймо",
    "hero-desc": "Я створюю автоматизовані системи для лідів, продажів, email-кампаній і CRM — щоб ваш бізнес працював 24/7 без постійного контролю.",
    "hero-heading-line1": "Робочі процеси на ШІ.",
    "hero-heading-line2": "Реальний бізнес-ефект.",

    // ========== Секція "Про мене" ==========
    "about-title": "Про мене",
    "about-benefit-1": "Суттєва економія часу завдяки автоматизації рутинних задач",
    "about-benefit-2": "Зниження витрат за рахунок оптимізації процесів",
    "about-benefit-3": "Достовірні дані та звіти в реальному часі для швидких рішень",
    "about-benefit-4": "Масштабованість — рішення не втрачають ефективності при зростанні",
    "about-benefit-5": "Кращий клієнтський досвід завдяки швидкості й точності",
    "about-benefit-6": "Інтеграція з платформами, які ви вже використовуєте",
    "about-benefits-title": "Що ви отримаєте:",
    "about-closing": "Якщо хочете бізнес, який працює розумніше — а не важче — реалізуємо це разом.",
    "about-text-line-1": "Мене звати Іван — я інженер з автоматизації, допомагаю бізнесам спрощувати процеси, прибирати рутину та масштабуватись ефективно.",
    "about-text-line-2": "Я створюю backend-системи на базі <strong>n8n</strong>, <strong>Directus</strong> і <strong>OpenAI</strong>, які автоматизують розсилки, звіти, завдання, сповіщення та бізнес-логіку — щоб ваші інструменти працювали разом, а не окремо.",
    "about-text-line-3": "Мої рішення працюють цілодобово: обробляють дані, формують точні звіти, зменшують помилки та забезпечують стабільність. Вони не забувають і не сповільнюються навіть у пік навантаження.",
    "about-text-line-4": "Якщо хочете бізнес, який працює розумніше — а не важче — реалізуємо це разом.",

    // ========== Секція навичок ==========
    "platform-capabilities": "Навички",
    
    // Картки навичок
    "ai-automation-desc": "Інтелектуальні воркфлоу, які аналізують, вирішують і діють.",
    "ai-automation-title": "Автоматизація з ШІ",
    "ai-bots-desc": "ШІ для аналітики, відповідей, генерації контенту та чат-ботів.",
    "ai-bots-title": "Системи та боти з ШІ",
    "automation-analytics-desc": "Жива аналітика і графіки для контролю продажів і процесів.",
    "automation-analytics-title": "Дашборди в реальному часі",
    "code-skills-desc": "Кодова логіка: функції, трансформації та API-запити.",
    "code-skills-title": "JS / Python / SQL",
    "crm-workflows-desc": "Автоматизація CRM: нагадування, статуси, повторні дії.",
    "crm-workflows-title": "Логіка CRM",
    "custom-automations-desc": "Автоматизація: заявки, задачі, сповіщення, звіти — без ручної рутини.",
    "custom-automations-title": "Автоматизація процесів",
    "email-setup-desc": "Email-розсилки з Amazon SES: прогрів, валідація, дизайн, inbox.",
    "email-setup-title": "Інфраструктура Email",
    "landing-pages-desc": "Односторінкові сайти та форми: адаптивність, аналітика, CRM.",
    "landing-pages-title": "Лендінги",
    "platforms-desc": "Автоматизація з найкращими open-source/low-code платформами.",
    "platforms-title": "n8n, Make, Directus",
    "third-party-integrations-desc": "Підключення Telegram, Stripe, OpenAI, ZeroBounce та інших.",
    "third-party-integrations-title": "Інтеграції",

    // ========== Проєкти/Приклади ==========
    "ai-usecases-title": "Автоматизація з ІІ в дії",
    
    // Приклад чат-бота
    "ai-chatbot": "Розмовний асистент з OpenAI",
    "chat-bot-1": "Звісно! Сьогодні отримано 38 нових лідів. 24 кваліфіковані, 14 — ні.",
    "chat-bot-2": "Готово ✅ Ліди перенесені до CRM з тегами та оцінками.",
    "chat-bot-3": "Чернетка готова. Відправити зараз чи зберегти?",
    "chat-bot-4": "Готово. Повідом, якщо захочеш запланувати відправку.",
    "chat-user-1": "Привіт, можеш підсумувати сьогоднішні вхідні ліди?",
    "chat-user-2": "Можеш відправити кваліфіковані в CRM?",
    "chat-user-3": "Добре. Створи чернетку follow-up листа для топ-5.",
    "chat-user-4": "Збережи як чернетку. Перевірю пізніше.",
    "chatbot-caption": "Чат-бот з ШІ, який спілкується з користувачами, створює звіти і виконує запити — наприклад, надсилання даних менеджеру.",
    
    // Приклад автоматизації продажів
    "sales-ai-caption": "ШІ автоматично оцінює ліди, створює офери, оновлює CRM та надсилає follow-up листи — все в одному процесі.",
    "sales-notification": "Автоматизація продажів на базі ШІ",

    // ========== Контактна форма ==========
    "agree-terms": "Я погоджуюсь з політикою конфіденційності та з тим, що мені можуть зв'язатися щодо мого запиту",
    "contact-us": "Зв'язатися",
    "email": "Електронна пошта",
    "message": "Повідомлення",
    "name": "Ім'я",
    "phone": "Номер телефону",
    "send": "Надіслати",
    // ========== Footer ==========
    "footer-specialist": "Спеціаліст з автоматизації, який створює робочі процеси на ШІ для реального бізнес-ефекту.",
    "footer-rights": "Всі права захищені",
    "footer-navigation": "НАВІГАЦІЯ",
    "footer-connect": "Зв'язок",
    "footer-ready": "Готові до автоматизації?",
    "footer-hire": "Найняти мене"
  },
	es: {
    // ========== Elementos globales y navegación ==========
    "about": "Sobre mí",
    "contact": "Contacto",
    "home": "Inicio",
    "projects": "Proyectos",
    "skills": "Habilidades",

    // ========== Sección Hero ==========
    "explore-more": "Automatizar ahora",
    "hero-desc": "Construyo sistemas automatizados que gestionan tus ventas, emails y CRM — para que tu negocio funcione 24/7 sin microgestión.",
    "hero-heading-line1": "Flujos con IA",
    "hero-heading-line2": "Impacto real",

    // ========== Sección "Sobre mí" ==========
    "about-title": "Sobre mí",
    "about-benefit-1": "Ahorro significativo de tiempo cada mes al automatizar tareas repetitivas",
    "about-benefit-2": "Menores costos operativos gracias a procesos más eficientes",
    "about-benefit-3": "Datos fiables e informes en tiempo real para decisiones más rápidas",
    "about-benefit-4": "Sistemas escalables que soportan un mayor volumen sin esfuerzo",
    "about-benefit-5": "Mejor experiencia del cliente gracias a la velocidad y precisión",
    "about-benefit-6": "Integración con las plataformas que ya utilizas",
    "about-benefits-heading": "Qué obtendrás:",
    "about-closing": "Si quieres un negocio que funcione de forma más inteligente — y sin fricciones — construyámoslo juntos.",
    "about-text-line-1": "Soy Ivan — un ingeniero de automatización que ayuda a las empresas a simplificar procesos, eliminar trabajo manual y escalar de forma efectiva.",
    "about-text-line-2": "Diseño sistemas backend con <strong>n8n</strong>, <strong>Directus</strong> y <strong>OpenAI</strong> para automatizar emails, informes, flujos de tareas, notificaciones y lógica personalizada — para que tus herramientas trabajen juntas, no por separado.",
    "about-text-line-3": "Mis soluciones operan 24/7: procesan datos, generan análisis precisos, reducen errores humanos y garantizan consistencia. No duermen, no olvidan ni se ralentizan — ni siquiera en los momentos de más carga.",
    "about-text-line-4": "Si quieres un negocio que funcione de manera más inteligente, no más difícil, con flujos de trabajo fluidos y claridad basada en datos, construyámoslo juntos.",

    // ========== Sección de habilidades ==========
    "platform-capabilities": "Habilidades",
    
    // Tarjetas de habilidades
    "ai-automation-desc": "Flujos inteligentes que analizan, deciden, crean y actúan por ti.",
    "ai-automation-title": "Automatización con IA",
    "ai-bots-desc": "IA para análisis, respuestas inteligentes, generación de contenido y bots.",
    "ai-bots-title": "Sistemas y Bots con IA",
    "automation-analytics-desc": "Gráficas y analíticas en vivo para ventas y operaciones.",
    "automation-analytics-title": "Paneles en Tiempo Real",
    "code-skills-desc": "Lógica avanzada: funciones, transformaciones y scripting API.",
    "code-skills-title": "JS / Python / SQL",
    "crm-workflows-desc": "Automatización de CRM: recordatorios, seguimientos, flujos de estados.",
    "crm-workflows-title": "Lógica CRM Personalizada",
    "custom-automations-desc": "Automatización de procesos: tareas, notificaciones y reportes sin rutina manual.",
    "custom-automations-title": "Automatización de Flujos",
    "email-setup-desc": "Email marketing con Amazon SES: calentamiento, validación y diseño.",
    "email-setup-title": "Infraestructura de Email",
    "landing-pages-desc": "Sitios de una sola página y formularios: diseño adaptativo y conexión con CRM y análisis.",
    "landing-pages-title": "Landing Pages",
    "platforms-desc": "Automatizaciones con herramientas open-source y low-code.",
    "platforms-title": "n8n, Make, Directus",
    "third-party-integrations-desc": "Conexión con Telegram, Stripe, OpenAI, ZeroBounce y más.",
    "third-party-integrations-title": "Integraciones",

    // ========== Proyectos/Ejemplos ==========
    "ai-usecases-title": "Automatizaciones con IA en Acción",
    
    // Ejemplo de chatbot
    "ai-chatbot": "Asistente Conversacional con OpenAI",
    "chat-bot-1": "¡Claro! Hoy has recibido 38 nuevos leads. 24 calificados, 14 no calificados.",
    "chat-bot-2": "Listo ✅ Leads enviados al CRM con etiquetas y puntuaciones.",
    "chat-bot-3": "Correo preparado. ¿Deseas enviarlo ahora o guardarlo como borrador?",
    "chat-bot-4": "Hecho. Avísame si deseas programarlo más tarde.",
    "chat-user-1": "Hola, ¿puedes resumir los leads entrantes de hoy?",
    "chat-user-2": "¿Puedes enviar los calificados al CRM?",
    "chat-user-3": "Perfecto. Redacta un email de seguimiento para los 5 mejores.",
    "chat-user-4": "Guárdalo como borrador. Lo revisaré más tarde.",
    "chatbot-caption": "Chatbot de IA que se comunica con usuarios, compila informes y ejecuta solicitudes — como enviar datos al gerente.",
    
    // Ejemplo de automatización de ventas
    "sales-ai-caption": "La IA califica leads, genera ofertas, actualiza el CRM y envía correos de seguimiento — todo en un solo flujo.",
    "sales-notification": "Automatización de Ventas con IA",

    // ========== Formulario de contacto ==========
    "agree-terms": "Acepto la política de privacidad y ser contactado respecto a mi solicitud",
    "contact-us": "Contáctame",
    "email": "Correo electrónico",
    "message": "Mensaje",
    "name": "Nombre",
    "phone": "Número de teléfono",
    "send": "Enviar",
    // ========== Footer ==========
    "footer-specialist": "Especialista en automatización que crea flujos de trabajo con IA para un impacto empresarial real.",
    "footer-rights": "Todos los derechos reservados",
    "footer-navigation": "NAVEGACIÓN",
    "footer-connect": "Conectar",
    "footer-ready": "¿Listo para automatizar?",
    "footer-hire": "Contrátame"
  },
  de: {
    // ========== Globale Elemente & Navigation ==========
    "about": "Über mich",
    "contact": "Kontakt",
    "home": "Startseite",
    "projects": "Projekte",
    "skills": "Fähigkeiten",
    "menu-title": "Menü",
    "close-menu": "Menü schließen",

    // ========== Hero Section ==========
    "explore-more": "Jetzt starten",
    "hero-desc": "Ich entwickle automatisierte Systeme für Vertrieb, E-Mails und CRM — damit Ihr Unternehmen rund um die Uhr läuft, ohne Mikromanagement.",
    "hero-heading-line1": "KI-Workflows",
    "hero-heading-line2": "Echter Erfolg",

    // ========== About Section ==========
    "about-title": "Über mich",
    "about-benefit-1": "Automatisierte Prozesse, die Zeit und Geld sparen",
    "about-benefit-2": "Systeme, die 24/7 ohne manuelle Steuerung laufen",
    "about-benefit-3": "Analysen und Dashboards für klare Entscheidungen",
    "about-benefit-4": "CRM-Tools, die genau auf Ihren Workflow zugeschnitten sind",
    "about-benefit-5": "E-Mail-Marketing mit hoher Zustellbarkeit und Antwortrate",
    "about-benefit-6": "Integration mit den Plattformen, die Sie bereits nutzen",
    "about-benefits-title": "Was Sie erhalten",
    "about-closing": "Ob Startup oder etabliertes Unternehmen — ich helfe Ihnen, funktionierende Automatisierung umzusetzen.",
    "about-text-line-1": "Ich bin Ivan — ein Automatisierungsexperte, der Unternehmen hilft, Workflows zu vereinfachen, manuelle Arbeit zu eliminieren und effektiv zu skalieren.",
    "about-text-line-2": "Ich entwerfe Backend-Systeme mit <strong>n8n</strong>, <strong>Directus</strong> und <strong>OpenAI</strong>, die E-Mails, Berichte, Aufgaben, Benachrichtigungen und individuelle Logik automatisieren — damit Ihre Tools zusammenarbeiten, nicht isoliert.",
    "about-text-line-3": "Meine Lösungen arbeiten 24/7 — sie verarbeiten Daten, generieren präzise Erkenntnisse, reduzieren menschliche Fehler und gewährleisten Konsistenz. Sie schlafen nicht, vergessen nichts und werden auch bei Spitzenlast nicht langsamer.",
    "about-text-line-4": "Wenn Sie ein Unternehmen wollen, das intelligenter — nicht härter — mit reibungslosen Workflows und datengesteuerter Klarheit arbeitet, lassen Sie es uns gemeinsam aufbauen.",

    // ========== Skills Section ==========
    "platform-capabilities": "Fähigkeiten",
    
    // Skill Cards
    "ai-automation-desc": "Intelligente Workflows, die analysieren, entscheiden, erstellen und handeln.",
    "ai-automation-title": "KI-gestützte Automatisierung",
    "ai-bots-desc": "KI für Analysen, intelligente Antworten, Inhaltsgenerierung und Chatbot-Flows.",
    "ai-bots-title": "KI-Systeme & Bots",
    "automation-analytics-desc": "Echtzeit-Analysen und Diagramme zur Überwachung von Vertrieb und Betrieb.",
    "automation-analytics-title": "Echtzeit-Dashboards",
    "code-skills-desc": "Code-Level-Logik: Funktionen, Transformationen und API-Scripting.",
    "code-skills-title": "JS / Python / SQL",
    "crm-workflows-desc": "Intelligente CRM-Automatisierung: Follow-ups, Erinnerungen, Statusflüsse.",
    "crm-workflows-title": "Individuelle CRM-Logik",
    "custom-automations-desc": "Prozessautomatisierung: Leads, Aufgaben, Benachrichtigungen, Berichte — keine manuelle Routine.",
    "custom-automations-title": "Workflow-Automatisierung",
    "email-setup-desc": "E-Mail-Marketing mit Amazon SES: Warm-up, Validierung, Design, Inbox-Optimierung.",
    "email-setup-title": "E-Mail-Infrastruktur",
    "landing-pages-desc": "Landingpages und Formulare: responsives Design, CRM- und Analyse-ready.",
    "landing-pages-title": "Landingpages",
    "platforms-desc": "Experten-Workflows mit führenden Open-Source- und Low-Code-Automatisierungstools.",
    "platforms-title": "n8n, Make, Directus",
    "third-party-integrations-desc": "Integration mit Telegram, Stripe, OpenAI, ZeroBounce und vielen mehr.",
    "third-party-integrations-title": "Drittanbieter-Integrationen",

    // ========== Projects/Use Cases ==========
    "ai-usecases-title": "KI-Automatisierung in Aktion",
    
    // Chatbot Example
    "ai-chatbot": "Konversationsassistent mit OpenAI",
    "chat-bot-1": "Sicher! Sie haben heute 38 neue Leads erhalten. 24 waren qualifiziert, 14 nicht.",
    "chat-bot-2": "Erledigt ✅ Leads wurden mit Tags und Bewertungen an das CRM übermittelt.",
    "chat-bot-3": "E-Mail vorbereitet. Soll ich sie jetzt senden oder als Entwurf speichern?",
    "chat-bot-4": "Erledigt. Lassen Sie mich wissen, wenn Sie sie später senden möchten.",
    "chat-user-1": "Hey, kannst du die heutigen eingehenden Leads zusammenfassen?",
    "chat-user-2": "Kannst du die qualifizierten an das CRM senden?",
    "chat-user-3": "Super. Erstelle einen Follow-up-Entwurf für die Top 5.",
    "chat-user-4": "Speichere es als Entwurf. Ich schaue es mir später an.",
    "chatbot-caption": "KI-Chatbot, der mit Nutzern kommuniziert, Berichte erstellt und Anfragen ausführt — wie das Senden von Daten an einen Manager.",
    
    // Sales Automation
    "sales-ai-caption": "KI bewertet Leads automatisch, erstellt Angebote, aktualisiert das CRM und sendet Follow-up-E-Mails — alles in einem Workflow.",
    "sales-notification": "KI-gestützte Vertriebsautomatisierung",

    // ========== Contact Form ==========
    "agree-terms": "Ich stimme der Datenschutzrichtlinie zu und bin damit einverstanden, bezüglich meiner Anfrage kontaktiert zu werden",
    "contact-us": "Kontakt",
    "email": "E-Mail",
    "message": "Nachricht",
    "name": "Name",
    "phone": "Telefonnummer",
    "send": "Senden",
    // ========== Footer ==========
    "footer-specialist": "Automatisierungsexperte, der KI-gestützte Workflows für echte Geschäftswirkung entwickelt.",
    "footer-rights": "Alle Rechte vorbehalten",
    "footer-navigation": "NAVIGATION",
    "footer-connect": "Kontakt",
    "footer-ready": "Bereit zur Automatisierung?",
    "footer-hire": "Mich beauftragen"
  },
  ar: {
    // ========== العناصر العامة والتنقل ==========
    "about": "معلومات عني",
    "contact": "اتصل",
    "home": "الرئيسية",
    "projects": "المشاريع",
    "skills": "المهارات",
    "menu-title": "القائمة",
    "close-menu": "إغلاق القائمة",

    // ========== قسم البطل ==========
    "explore-more": "لنقم بالأتمتة",
    "hero-desc": "أبني أنظمة آلية تعتني بالمبيعات والبريد الإلكتروني ونظام إدارة العملاء — بحيث يعمل عملك على مدار الساعة، دون الحاجة إلى إدارة دقيقة.",
    "hero-heading-line1": "سير العمل المدعوم بالذكاء الاصطناعي.",
    "hero-heading-line2": "تأثير تجاري حقيقي.",

    // ========== قسم "معلومات عني" ==========
    "about-title": "معلومات عني",
    "about-benefit-1": "عمليات آلية توفر لك الوقت والمال",
    "about-benefit-2": "أنظمة تعمل على مدار الساعة دون تحكم يدوي",
    "about-benefit-3": "تحليلات ولوحات معلومات لاتخاذ قرارات واضحة",
    "about-benefit-4": "أدوات إدارة العملاء مصممة خصيصًا لسير عملك",
    "about-benefit-5": "تسويق عبر البريد الإلكتروني بمعدل تسليم ورد عالي",
    "about-benefit-6": "التكامل مع المنصات التي تستخدمها بالفعل",
    "about-benefits-title": "ما الذي ستحصل عليه",
    "about-closing": "سواء كنت شركة ناشئة أو شركة قائمة — سأساعدك في تنفيذ أتمتة تعمل من أجلك.",
    "about-text-line-1": "أنا إيفان — مهندس أتمتة يساعد الشركات في تبسيط سير العمل، والقضاء على العمل اليدوي، والتوسع بشكل فعال.",
    "about-text-line-2": "أصمم أنظمة خلفية مبنية على <strong>n8n</strong>، و<strong>Directus</strong>، و<strong>OpenAI</strong> لأتمتة البريد الإلكتروني، والتقارير، وسير المهام، والإشعارات، والمنطق المخصص — بحيث تعمل أدواتك معًا، وليس بمعزل عن بعضها.",
    "about-text-line-3": "حلولي تعمل على مدار الساعة — معالجة البيانات، وتوليد رؤى دقيقة، وتقليل الأخطاء البشرية، وضمان الاتساق. لا تنام، ولا تنسى، ولا تتباطأ — حتى في أوقات الذروة.",
    "about-text-line-4": "إذا كنت تريد عملاً تجاريًا يعمل بذكاء — وليس بجهد أكبر — مع سير عمل سهل ووضوح قائم على البيانات، فلنبنيها معًا.",

    // ========== قسم المهارات ==========
    "platform-capabilities": "المهارات",
    
    // بطاقات المهارات
    "ai-automation-desc": "سير عمل ذكية تحلل، وتقرر، وتنشئ، وتتصرف نيابة عنك.",
    "ai-automation-title": "الأتمتة المدعومة بالذكاء الاصطناعي",
    "ai-bots-desc": "الذكاء الاصطناعي للتحليلات، والردود الذكية، وإنشاء المحتوى وتدفقات روبوتات الدردشة.",
    "ai-bots-title": "أنظمة وروبوتات الذكاء الاصطناعي",
    "automation-analytics-desc": "تحليلات ورسوم بيانية حية لمراقبة المبيعات والعمليات.",
    "automation-analytics-title": "لوحات المعلومات في الوقت الفعلي",
    "code-skills-desc": "منطق مستوى الكود: وظائف، تحويلات وبرمجة واجهات برمجة التطبيقات.",
    "code-skills-title": "JS / Python / SQL",
    "crm-workflows-desc": "أتمتة نظام إدارة العملاء: متابعات، تذكيرات، تدفقات الحالة.",
    "crm-workflows-title": "منطق نظام إدارة العملاء المخصص",
    "custom-automations-desc": "أتمتة العمليات: العملاء المحتملين، المهام، الإشعارات، التقارير — لا روتين يدوي.",
    "custom-automations-title": "أتمتة سير العمل",
    "email-setup-desc": "التسويق عبر البريد الإلكتروني مع Amazon SES: الإحماء، التحقق، التصميم، تعزيز صندوق الوارد.",
    "email-setup-title": "بنية البريد الإلكتروني التحتية",
    "landing-pages-desc": "صفحات الهبوط والنماذج: تصميم متجاوب، جاهز لنظام إدارة العملاء والتحليلات.",
    "landing-pages-title": "صفحات الهبوط",
    "platforms-desc": "سير عمل الخبراء باستخدام أفضل أدوات الأتمتة مفتوحة المصدر ومنخفضة الكود.",
    "platforms-title": "n8n, Make, Directus",
    "third-party-integrations-desc": "التكامل مع Telegram، Stripe، OpenAI، ZeroBounce وغيرها الكثير.",
    "third-party-integrations-title": "تكاملات الطرف الثالث",

    // ========== المشاريع/أمثلة ==========
    "ai-usecases-title": "أتمتة الذكاء الاصطناعي في العمل",
    
    // مثال روبوت الدردشة
    "ai-chatbot": "مساعد محادثة مع OpenAI",
    "chat-bot-1": "بالتأكيد! لقد تلقيت 38 عميلًا محتملاً جديدًا اليوم. 24 مؤهلين، 14 غير مؤهلين.",
    "chat-bot-2": "تم بالفعل ✅ تم دفع العملاء المحتملين إلى نظام إدارة العملاء مع العلامات والدرجات.",
    "chat-bot-3": "تم إعداد البريد الإلكتروني. هل تريد أن أرسله الآن أو أحفظه كمسودة؟",
    "chat-bot-4": "تم. دعني أعرف إذا كنت ترغب في جدولته لاحقًا.",
    "chat-user-1": "مرحبًا، هل يمكنك تلخيص العملاء المحتملين الواردين اليوم؟",
    "chat-user-2": "هل يمكنك إرسال المؤهلين منهم إلى نظام إدارة العملاء؟",
    "chat-user-3": "عظيم. أعد مسودة بريد متابعة لأفضل 5.",
    "chat-user-4": "احفظه كمسودة. سأراجعه لاحقًا.",
    "chatbot-caption": "روبوت دردشة بالذكاء الاصطناعي يتواصل مع المستخدمين، ويجمع التقارير، وينفذ الطلبات — مثل إرسال البيانات إلى المدير.",
    
    // مثال أتمتة المبيعات
    "sales-ai-caption": "يقوم الذكاء الاصطناعي تلقائيًا بتقييم العملاء المحتملين، وإنشاء العروض، وتحديث نظام إدارة العملاء وإرسال رسائل المتابعة — كل ذلك في سير عمل واحد.",
    "sales-notification": "أتمتة المبيعات المدعومة بالذكاء الاصطناعي",

    // ========== نموذج الاتصال ==========
    "agree-terms": "أوافق على سياسة الخصوصية وعلى الاتصال بي فيما يتعلق بطلبي",
    "contact-us": "اتصل بنا",
    "email": "البريد الإلكتروني",
    "message": "الرسالة",
    "name": "الاسم",
    "phone": "رقم الهاتف",
    "send": "إرسال",
    // ========== التذييل ==========
    "footer-specialist": "متخصص في الأتمتة يصنع سير عمل مدعومة بالذكاء الاصطناعي لتحقيق تأثير تجاري حقيقي.",
    "footer-rights": "جميع الحقوق محفوظة",
    "footer-navigation": "التنقل",
    "footer-connect": "تواصل",
    "footer-ready": "مستعد للأتمتة؟",
    "footer-hire": "وظفني"
  }
};

let currentLang = "en";

function changeLanguage(lang) {
	currentLang = lang;

	const elements = document.querySelectorAll("[data-translate]");
	elements.forEach((el) => {
		const key = el.getAttribute("data-translate");
		if (translations[lang][key]) {
			if (el.closest("#chat-trigger")) {
				const parent = el.closest(".chat-message");
				if (parent?.style.opacity === "1") {
					el.textContent = translations[lang][key];
				} else {
					el.textContent = "";
				}
			} else {
				el.innerHTML = translations[lang][key];
			}
		}
	});

	// Оповестим чат, что язык сменился
	document.dispatchEvent(new Event("languageChanged"));
}

// установка языка по умолчанию и переключение
document.addEventListener("DOMContentLoaded", () => {
	changeLanguage("en");

	const langButtons = document.querySelectorAll(".lang");
	langButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			langButtons.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");
			const lang = btn.getAttribute("data-lang");
			changeLanguage(lang);
		});
	});
});
