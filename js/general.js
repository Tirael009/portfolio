// === Constants ===
const SCROLL_REVEAL_OFFSET = 100;
const SCROLL_THROTTLE_DELAY = 50;
const SMOOTH_SCROLL_OFFSET = 80;

// === Scroll Reveal with Throttling and Intersection Observer ===
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    
    reveals.forEach(el => {
      if (el.dataset.revealed) return;
      
      const rect = el.getBoundingClientRect();
      const isVisible = (
        rect.top <= windowHeight - SCROLL_REVEAL_OFFSET && 
        rect.bottom >= SCROLL_REVEAL_OFFSET
      );
      
      if (isVisible) {
        el.classList.add('visible');
        el.dataset.revealed = 'true';
      }
    });
  };

  // Throttled scroll handler
  let isScrolling;
  const handleScroll = () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(checkVisibility, SCROLL_THROTTLE_DELAY);
  };

  // Initial check
  checkVisibility();
  
  // Set up listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', checkVisibility, { passive: true });
}

// === Enhanced ScrollSpy ===
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  const updateActiveLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - SCROLL_REVEAL_OFFSET;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.id;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active', 
            link.getAttribute('href') === `#${sectionId}`
          );
        });
      }
    });
  };

  // Throttle scroll events
  let scrollTimeout;
  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveLink, SCROLL_THROTTLE_DELAY);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  updateActiveLink(); // Initial check
}

// === Burger Menu Functionality ===
function initBurgerMenu() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
  const body = document.body;

  if (!burger || !mobileMenu) return;

  // Toggle mobile menu
  burger.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    // Update aria-expanded attribute
    const isExpanded = this.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
    
    // Toggle body scroll lock
    if (isExpanded) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  });

  // Close menu when clicking on navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Close menu
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';

      // Smooth scroll to section
      if (targetElement) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Language switcher in mobile menu
  const langButtons = document.querySelectorAll('.mobile-menu .lang');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
      
      // Close menu after language selection
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    }
  });

  // Close menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    }
  });
}

// === Smooth Scroll with Offset ===
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - SMOOTH_SCROLL_OFFSET;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// === Page Load Transition ===
function initPageLoad() {
  document.body.classList.add('loaded');
  
  // Preload images for better performance
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.loading = 'eager';
  });
}

// === Initialize All Functions ===
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initScrollSpy();
  initBurgerMenu();
  initSmoothScroll();
  initPageLoad();
});

// === Performance Optimization ===
// Debounce function for resize events
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    initScrollReveal();
    initScrollSpy();
  }, 200);
}, { passive: true });

// === Language Dropdown Toggle ===
function initLanguageDropdown() {
  const langToggle = document.querySelector('.lang-switcher-toggle');
  const langDropdown = document.querySelector('.lang-switcher');
  const langButtons = document.querySelectorAll('.lang');
  
  if (!langToggle || !langDropdown) return;
  
  // Toggle dropdown
  langToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    langDropdown.classList.toggle('active');
    this.setAttribute('aria-expanded', this.classList.contains('active'));
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    langToggle.classList.remove('active');
    langDropdown.classList.remove('active');
    langToggle.setAttribute('aria-expanded', 'false');
  });
  
  // Update current language display when a language is selected
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelector('.current-lang').textContent = 
        this.textContent.length > 3 ? this.dataset.lang.toUpperCase() : this.textContent;
    });
  });
  
  // Update current language display on initial load
  document.addEventListener('DOMContentLoaded', function() {
    const currentLangBtn = document.querySelector('.lang.active');
    if (currentLangBtn) {
      document.querySelector('.current-lang').textContent = 
        currentLangBtn.textContent.length > 3 ? currentLangBtn.dataset.lang.toUpperCase() : currentLangBtn.textContent;
    }
  });
}

// Добавить в DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initLanguageDropdown();
  // остальные инициализации...
});
