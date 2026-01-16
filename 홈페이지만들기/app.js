/**
 * Jason Interior - Main Application JavaScript
 * Handles all interactive functionality
 */

// Language Data


const translations = {
    en: {
        nav_concepts: "Concepts",
        nav_projects: "Projects",
        nav_contact: "Contact",

        concept_modern: "Modern",
        concept_natural: "Natural Wood",
        concept_shape: "Shape",
        concept_retro: "Retro",
        concept_midcentury: "Mid-Century Modern",
        concept_classic: "Classic",
        concept_contemporary: "Contemporary",
        concept_vintage: "Vintage",
        concept_oriental: "Oriental",

        intro_title: "Total Solution Service<br>Beyond Design",
        intro_desc: "jason interior provides a total solution service beyond space design, communicating with professionalism and sincerity from the first meeting with the customer to the final completion and future management through a systematic process.",

        quote_title: "Request a Quote",
        quote_subtitle: "Tell us about your project and we'll get back to you shortly.",

        form_name: "Name",
        form_name_placeholder: "Your name",
        form_phone: "Contact Number",
        form_phone_placeholder: "010-0000-0000",
        form_email: "Email",
        form_email_placeholder: "your@email.com",
        form_address: "Site Address / Area",
        form_address_placeholder: "Apartment, 30py...",
        form_file: "Attachment",
        form_message: "Project Details",
        form_message_placeholder: "Tell us about your project...",
        form_submit: "Submit",

        success_title: "Thank You!",
        success_message: "We've received your request and will contact you soon."
    },
    kr: {
        nav_concepts: "컨셉",
        nav_projects: "프로젝트",
        nav_contact: "문의하기",

        concept_modern: "모던",
        concept_natural: "내추럴 우드",
        concept_shape: "쉐이프",
        concept_retro: "레트로",
        concept_midcentury: "미드 센추리 모던",
        concept_classic: "클래식",
        concept_contemporary: "컨템포러리",
        concept_vintage: "빈티지",
        concept_oriental: "오리엔탈",

        intro_title: "디자인 그 이상의<br>토탈 솔루션 서비스",
        intro_desc: "jason interior는 체계적인 프로세스로 고객과의 처음 만남에서부터 최종 완성과 향후의 관리까지 전문성과 성실함으로 소통하며, 공간 디자인을 넘어 토탈 솔루션 서비스를 제공합니다.",

        quote_title: "견적 문의",
        quote_subtitle: "프로젝트에 대해 알려주시면 곧 연락드리겠습니다.",

        form_name: "이름",
        form_name_placeholder: "이름을 입력하세요",
        form_phone: "연락처",
        form_phone_placeholder: "010-0000-0000",
        form_email: "이메일",
        form_email_placeholder: "이메일 주소를 입력하세요",
        form_address: "현장 주소 / 평수",
        form_address_placeholder: "아파트, 30평...",
        form_file: "첨부 파일",
        form_message: "프로젝트 상세",
        form_message_placeholder: "프로젝트에 대해 자세히 적어주세요...",
        form_submit: "문의하기",

        success_title: "감사합니다!",
        success_message: "문의가 접수되었습니다. 곧 연락드리겠습니다."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initImageLoading();
    initHeader();
    initMobileMenu();
    initConceptTabs();
    initHeroSlider();
    initQuoteForm();
    initLanguageSelector();
    initScrollGallery();
    initLightbox();
});

/**
 * Image Loading with Fade-in Effect
 */
function initImageLoading() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                img.classList.add('loaded');
                // Fallback to placeholder if needed, but keeping original src is safer unless broken
            });
        }
    });
}

/**
 * Header Scroll Effect
 */
function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', closeMobileMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking language buttons inside mobile menu
    const menuButtons = mobileMenu.querySelectorAll('button');
    menuButtons.forEach(btn => {
        if (btn.id !== 'close-menu-btn') {
            btn.addEventListener('click', closeMobileMenu);
        }
    });

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/**
 * Concept Tabs Gallery
 */
function initConceptTabs() {
    const tabs = document.querySelectorAll('.concept-tab');
    const conceptImage = document.getElementById('concept-image');
    const conceptLabel = document.getElementById('concept-label');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Update image with fade effect
            const newImageSrc = tab.dataset.img;
            const i18nKey = tab.dataset.i18n;

            conceptImage.classList.add('fade-out');

            setTimeout(() => {
                conceptImage.src = newImageSrc;

                // Update label text based on current language
                const currentLang = document.documentElement.lang || 'en';
                // If we have translations, use them, otherwise fallback to dataset concept
                if (translations[currentLang] && translations[currentLang][i18nKey]) {
                    conceptLabel.textContent = translations[currentLang][i18nKey];
                } else {
                    conceptLabel.textContent = tab.dataset.concept.replace('-', ' ');
                }

                conceptImage.classList.remove('fade-out');
            }, 300);
        });

        // Hover effect
        tab.addEventListener('mouseenter', () => {
            if (!tab.classList.contains('active')) {
                tab.style.color = '#525252';
            }
        });

        tab.addEventListener('mouseleave', () => {
            if (!tab.classList.contains('active')) {
                tab.style.color = '';
            }
        });
    });
}

/**
 * Scroll Gallery with Drag to Scroll and Auto Marquee
 */
function initScrollGallery() {
    console.log('Initializing Scroll Gallery...');
    const gallery = document.getElementById('scroll-gallery');
    const track = document.getElementById('gallery-track');

    if (!gallery || !track) {
        console.error('Scroll Gallery elements not found!');
        return;
    }

    // Clone content for seamless infinite scroll
    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    // Auto Scroll Settings
    const speed = 1; // Pixels per frame
    let isPaused = false;
    let animationId;

    // Function to handle auto scrolling
    function animate() {
        if (!isPaused && !isDown) {
            const prevScrollLeft = gallery.scrollLeft;
            gallery.scrollLeft += speed;

            // If it didn't move (e.g. reached end without enough content), reset or log
            if (gallery.scrollLeft === prevScrollLeft && gallery.scrollLeft > 0) {
                // This shouldn't happen with cloning, but good for safety
                gallery.scrollLeft = 0;
            }

            // Infinite scroll logic
            // We use a small buffer to ensure smooth transition
            const halfWidth = track.scrollWidth / 2;
            if (gallery.scrollLeft >= halfWidth) {
                gallery.scrollLeft -= halfWidth;
            }
        }
        animationId = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Pause on hover
    gallery.addEventListener('mouseenter', () => {
        isPaused = true;
    });

    gallery.addEventListener('mouseleave', () => {
        isPaused = false;
        isDown = false;
        gallery.classList.remove('active');
    });

    // Mouse drag events
    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        isPaused = true; // Pause auto scroll
        gallery.classList.add('active');
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseup', (e) => {
        isDown = false;
        isPaused = false; // Resume auto scroll
        gallery.classList.remove('active');

        // Prevent click if dragged significantly
        if (isDragging) {
            const preventClick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                gallery.removeEventListener('click', preventClick, true);
            };
            gallery.addEventListener('click', preventClick, true);
        }
        isDragging = false;
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier

        if (Math.abs(walk) > 5) {
            isDragging = true;
        }

        gallery.scrollLeft = scrollLeft - walk;
    });

    // Touch events
    gallery.addEventListener('touchstart', (e) => {
        isDown = true;
        isDragging = false;
        isPaused = true;
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    }, { passive: true });

    gallery.addEventListener('touchend', () => {
        isDown = false;
        isPaused = false;
    }, { passive: true });

    gallery.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;

        if (Math.abs(walk) > 5) {
            isDragging = true;
        }

        gallery.scrollLeft = scrollLeft - walk;
    }, { passive: true });
}

/**
 * Image Lightbox
 */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption').querySelector('p');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    let images = [];

    // Collect all gallery images
    galleryItems.forEach((item, index) => {
        const src = item.dataset.src;
        const title = item.dataset.title;

        // Only add unique images
        if (!images.find(img => img.src === src)) {
            images.push({ src, title });
        }

        // Click handler
        item.addEventListener('click', (e) => {
            // Check if it was a drag
            if (e.target.closest('#scroll-gallery') && window.galleryDragged) {
                window.galleryDragged = false;
                return;
            }

            currentIndex = images.findIndex(img => img.src === src);
            openLightbox(src, title);
        });
    });

    function openLightbox(src, title) {
        lightboxImage.src = src;
        lightboxCaption.textContent = title;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Add animation
        lightboxImage.style.transform = 'scale(0.9)';
        lightboxImage.style.opacity = '0';

        setTimeout(() => {
            lightboxImage.style.transform = 'scale(1)';
            lightboxImage.style.opacity = '1';
        }, 50);
    }

    function closeLightbox() {
        lightboxImage.style.transform = 'scale(0.9)';
        lightboxImage.style.opacity = '0';

        setTimeout(() => {
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
        }, 200);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        const img = images[currentIndex];

        lightboxImage.style.opacity = '0';
        setTimeout(() => {
            lightboxImage.src = img.src;
            lightboxCaption.textContent = img.title;
            lightboxImage.style.opacity = '1';
        }, 200);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        const img = images[currentIndex];

        lightboxImage.style.opacity = '0';
        setTimeout(() => {
            lightboxImage.src = img.src;
            lightboxCaption.textContent = img.title;
            lightboxImage.style.opacity = '1';
        }, 200);
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Close on backdrop click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('absolute')) {
            if (!e.target.closest('button') && !e.target.closest('img')) {
                closeLightbox();
            }
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                showNext();
                break;
            case 'ArrowLeft':
                showPrev();
                break;
        }
    });

    // Add transition styles
    lightboxImage.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
}

/**
 * Hero Image Slider
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const nextBtn = document.getElementById('slider-next');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        // Normalize index
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            if (i === index) {
                slide.classList.add('active');
                slide.style.opacity = '1';
            }
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });

        currentSlide = index;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    const slider = document.querySelector('.slider-container');

    if (slider) {
        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        // Pause on hover (desktop)
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                showSlide(currentSlide - 1);
            }
            resetAutoSlide();
        }
    }

    // Start auto-slide
    startAutoSlide();
}

/**
 * Quote Form Handling
 */
function initQuoteForm() {
    console.log('Initializing Quote Form...');
    const form = document.getElementById('quote-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');

    if (!form || !submitBtn) {
        console.error('Quote Form elements not found!');
        return;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable button during submission
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';

        // Save scroll position before any changes
        const scrollPosition = window.pageYOffset;

        try {
            console.log('Attempting to send email via EmailJS...');

            // Check if EmailJS is loaded
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS SDK가 로드되지 않았습니다. 페이지를 새로고침 해주세요.');
            }

            // Get form values
            const formData = {
                to_name: 'Jason Interior',
                from_name: form.querySelector('[name="from_name"]').value,
                phone: form.querySelector('[name="phone"]').value,
                email: form.querySelector('[name="email"]').value,
                address: form.querySelector('[name="address"]')?.value || '',
                message: form.querySelector('[name="message"]').value,
                reply_to: form.querySelector('[name="email"]').value
            };

            console.log('Form data being sent:', formData);

            // Send email using EmailJS
            const response = await emailjs.send(
                'service_vr0tdrh',    // Service ID
                'template_6panh38',   // Template ID
                formData              // Template parameters
            );

            console.log('EmailJS Response:', response);

            if (response.status === 200) {
                // Show success message via Toast
                const currentLang = document.documentElement.lang || 'kr';
                const successMsg = translations[currentLang]?.success_message || "Message sent successfully!";
                showToast(successMsg);

                // Reset form
                form.reset();
            } else {
                throw new Error('메일 전송에 실패했습니다.');
            }

            // Restore scroll position
            window.scrollTo(0, scrollPosition);

        } catch (error) {
            console.error('EmailJS Submission Error:', error);
            let errorMsg = '메일 전송 실패: ';
            if (error && typeof error === 'object') {
                errorMsg += error.text || error.message || JSON.stringify(error);
            } else {
                errorMsg += error;
            }
            alert(errorMsg);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Input validation feedback
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '' && input.required) {
                input.classList.add('border-red-300');
            } else {
                input.classList.remove('border-red-300');
            }
        });

        input.addEventListener('input', () => {
            input.classList.remove('border-red-300');
        });
    });
}

/**
 * Toast Notification (Center Screen with Scale Animation)
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    // Show toast with scale animation
    toast.classList.remove('scale-0', 'opacity-0');
    toast.classList.add('scale-100', 'opacity-100');

    // Hide after 3 seconds with fade out
    setTimeout(() => {
        toast.classList.remove('scale-100', 'opacity-100');
        toast.classList.add('scale-0', 'opacity-0');
    }, 3000);
}

/**
 * Language Selector
 */
function initLanguageSelector() {
    const langBtns = document.querySelectorAll('.lang-btn');

    // Set default language (KR)
    updateLanguage('kr');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            updateLanguage(lang);
        });
    });
}

function updateLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update buttons state
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active', 'font-medium', 'text-neutral-900');
            btn.classList.remove('text-neutral-500');
        } else {
            btn.classList.remove('active', 'font-medium', 'text-neutral-900');
            btn.classList.add('text-neutral-500');
        }
    });

    // Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            // Handle HTML content for specific keys (like intro_title with <br>)
            if (key === 'intro_title') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }

        // Update placeholders for inputs
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const placeholderKey = key + '_placeholder';
            if (translations[lang] && translations[lang][placeholderKey]) {
                el.placeholder = translations[lang][placeholderKey];
            }
        }
    });

    // Update concept tab label if active
    const activeTab = document.querySelector('.concept-tab.active');
    if (activeTab) {
        const conceptLabel = document.getElementById('concept-label');
        const i18nKey = activeTab.dataset.i18n;
        if (translations[lang] && translations[lang][i18nKey]) {
            conceptLabel.textContent = translations[lang][i18nKey];
        }
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Intersection Observer for Fade-in Animations
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Make first section visible immediately
document.querySelector('section').style.opacity = '1';
