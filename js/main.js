// Main JavaScript for SchoolProject
// Handles language switching, RTL support, and interactive elements

(function() {
    'use strict';

    // Current language state
    let currentLang = 'en';
    
    // Quiz state
    let currentQuestion = 1;
    const totalQuestions = 3;

    // Initialize the application
    function init() {
        // Load saved language or default to English
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        setLanguage(savedLang);
        
        // Setup event listeners
        setupLanguageButtons();
        setupSmoothScrolling();
        setupQuiz();
        
        // Mark language button as active
        updateLanguageButtons();
    }

    // Setup language switching buttons
    function setupLanguageButtons() {
        const languageButtons = document.querySelectorAll('.language-button');
        languageButtons.forEach(button => {
            button.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                setLanguage(lang);
                updateLanguageButtons();
            });
        });
    }

    // Update active state of language buttons
    function updateLanguageButtons() {
        const languageButtons = document.querySelectorAll('.language-button');
        languageButtons.forEach(button => {
            if (button.getAttribute('data-lang') === currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Set the language and update the page
    function setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, falling back to English`);
            lang = 'en';
        }

        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Set RTL for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.removeAttribute('lang');
        }

        // Update all translatable elements
        updateTranslations();
    }

    // Update all elements with translations
    function updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key);
            
            if (translation) {
                // Check if the element is an input or textarea
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translation);
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    // Get translation for a key
    function getTranslation(key) {
        const keys = key.split('.');
        let value = translations[currentLang];
        
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        
        return value || key;
    }

    // Setup smooth scrolling for navigation links
    function setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offset = 80; // Account for fixed nav
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Setup quiz functionality
    function setupQuiz() {
        const quizOptions = document.querySelectorAll('.quiz-option');
        const restartButton = document.querySelector('.quiz-restart');
        
        // Setup option click handlers
        quizOptions.forEach(option => {
            option.addEventListener('click', handleQuizAnswer);
        });
        
        // Setup restart button
        if (restartButton) {
            restartButton.addEventListener('click', restartQuiz);
        }
    }

    // Handle quiz answer selection
    function handleQuizAnswer(e) {
        const button = e.currentTarget;
        const isCorrect = button.getAttribute('data-correct') === 'true';
        const questionElement = button.closest('.quiz-question');
        const feedbackElement = questionElement.querySelector('.quiz-feedback');
        const allOptions = questionElement.querySelectorAll('.quiz-option');
        
        // Disable all options
        allOptions.forEach(opt => {
            opt.disabled = true;
        });
        
        // Show correct/incorrect styling
        if (isCorrect) {
            button.classList.add('correct');
            feedbackElement.textContent = getTranslation('quiz.feedback.correct') || '✓ Great job! That\'s correct!';
            feedbackElement.className = 'quiz-feedback correct';
            
            // Move to next question after delay
            setTimeout(() => {
                nextQuestion();
            }, 2000);
        } else {
            button.classList.add('incorrect');
            feedbackElement.textContent = getTranslation('quiz.feedback.incorrect') || '✗ Not quite. Try thinking about what the teacher would want you to do.';
            feedbackElement.className = 'quiz-feedback incorrect';
            
            // Allow retry after a moment
            setTimeout(() => {
                button.classList.remove('incorrect');
                button.disabled = false;
                feedbackElement.textContent = '';
            }, 2000);
        }
    }

    // Move to next quiz question
    function nextQuestion() {
        const currentQuestionElement = document.querySelector(`.quiz-question[data-quiz="${currentQuestion}"]`);
        currentQuestion++;
        
        if (currentQuestionElement) {
            currentQuestionElement.style.display = 'none';
        }
        
        if (currentQuestion <= totalQuestions) {
            const nextQuestionElement = document.querySelector(`.quiz-question[data-quiz="${currentQuestion}"]`);
            if (nextQuestionElement) {
                nextQuestionElement.style.display = 'block';
                
                // Re-enable options for new question
                const options = nextQuestionElement.querySelectorAll('.quiz-option');
                options.forEach(opt => {
                    opt.disabled = false;
                    opt.classList.remove('correct', 'incorrect');
                });
            }
        } else {
            showQuizComplete();
        }
    }

    // Show quiz completion message
    function showQuizComplete() {
        const quizComplete = document.querySelector('.quiz-complete');
        if (quizComplete) {
            quizComplete.style.display = 'block';
        }
    }

    // Restart the quiz
    function restartQuiz() {
        currentQuestion = 1;
        
        // Hide completion message
        const quizComplete = document.querySelector('.quiz-complete');
        if (quizComplete) {
            quizComplete.style.display = 'none';
        }
        
        // Reset all questions
        for (let i = 1; i <= totalQuestions; i++) {
            const questionElement = document.querySelector(`.quiz-question[data-quiz="${i}"]`);
            if (questionElement) {
                questionElement.style.display = i === 1 ? 'block' : 'none';
                
                const options = questionElement.querySelectorAll('.quiz-option');
                options.forEach(opt => {
                    opt.disabled = false;
                    opt.classList.remove('correct', 'incorrect');
                });
                
                const feedback = questionElement.querySelector('.quiz-feedback');
                if (feedback) {
                    feedback.textContent = '';
                    feedback.className = 'quiz-feedback';
                }
            }
        }
    }

    // Add some visual feedback for interactive elements
    function addInteractivity() {
        // Add hover effect to info items
        const infoItems = document.querySelectorAll('.info-item, .rule-item, .situation-item, .tip-item, .help-item');
        infoItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also add interactivity
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addInteractivity);
    } else {
        addInteractivity();
    }

})();
