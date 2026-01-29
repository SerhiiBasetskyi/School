// Main JavaScript for SchoolProject
// Handles language switching, RTL support, and interactive elements

(function() {
    'use strict';

    // Current language state
    let currentLang = 'en';
    
    // Quiz state
    let currentQuestion = 0;
    const totalQuestions = 100;
    let questionsAsked = 0;
    let correctAnswers = 0;
    let quizQuestions = [];

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
        const value = translations[currentLang]?.[key];
        // Fall back to English if translation not found in current language
        if (value) {
            return value;
        }
        // Try English as fallback
        const englishValue = translations['en']?.[key];
        return englishValue || key; // Return English translation or key if not found
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
        // Load quiz questions from quiz-data.js
        if (typeof quizData !== 'undefined' && quizData[currentLang]) {
            quizQuestions = quizData[currentLang];
        } else {
            quizQuestions = quizData.en; // Fallback to English
        }
        
        // Initialize quiz
        currentQuestion = 0;
        questionsAsked = 0;
        correctAnswers = 0;
        
        // Update progress display
        updateProgress();
        
        // Show first question
        showQuestion();
        
        // Setup restart button
        const restartButton = document.querySelector('.quiz-restart');
        if (restartButton) {
            restartButton.addEventListener('click', restartQuiz);
        }
    }
    
    // Show current question
    function showQuestion() {
        const container = document.getElementById('quiz-question-container');
        if (!container || currentQuestion >= quizQuestions.length) {
            showQuizComplete();
            return;
        }
        
        const q = quizQuestions[currentQuestion];
        
        // Shuffle the options to randomize answer positions
        const shuffledOptions = q.options.map((option, index) => ({
            text: option,
            originalIndex: index
        }));
        
        // Fisher-Yates shuffle algorithm
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }
        
        // Create question HTML without emoji icons
        const questionHTML = `
            <div class="quiz-question">
                <p class="question-text">Question ${currentQuestion + 1} of ${totalQuestions}: ${q.question}</p>
                <div class="quiz-options">
                    ${shuffledOptions.map((option) => `
                        <button class="quiz-option" data-answer="${option.originalIndex}">
                            <span>${option.text}</span>
                        </button>
                    `).join('')}
                </div>
                <div class="quiz-feedback"></div>
            </div>
        `;
        
        container.innerHTML = questionHTML;
        
        // Add click handlers to options
        const options = container.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.addEventListener('click', handleQuizAnswer);
        });
    }
    
    // Update progress display
    function updateProgress() {
        const answeredEl = document.getElementById('answered-count');
        const correctEl = document.getElementById('correct-count');
        const totalEl = document.getElementById('total-count');
        const progressFill = document.getElementById('progress-fill');
        const scorePercentage = document.getElementById('score-percentage');
        
        if (answeredEl) answeredEl.textContent = questionsAsked;
        if (correctEl) correctEl.textContent = correctAnswers;
        if (totalEl) totalEl.textContent = totalQuestions;
        
        // Update progress bar
        const progress = (questionsAsked / totalQuestions) * 100;
        if (progressFill) progressFill.style.width = `${progress}%`;
        
        // Update percentage
        const percentage = questionsAsked > 0 ? Math.round((correctAnswers / questionsAsked) * 100) : 0;
        if (scorePercentage) scorePercentage.textContent = `${percentage}%`;
    }

    // Handle quiz answer selection
    function handleQuizAnswer(e) {
        const button = e.currentTarget;
        
        // Prevent double-clicks
        if (button.disabled) return;
        
        const selectedAnswer = parseInt(button.getAttribute('data-answer'));
        const q = quizQuestions[currentQuestion];
        const isCorrect = selectedAnswer === q.correctAnswer;
        const questionElement = button.closest('.quiz-question');
        const feedbackElement = questionElement.querySelector('.quiz-feedback');
        const allOptions = questionElement.querySelectorAll('.quiz-option');
        
        // Increment questions asked counter
        questionsAsked++;
        
        // Disable all options
        allOptions.forEach(opt => {
            opt.disabled = true;
        });
        
        // Show correct/incorrect styling
        if (isCorrect) {
            correctAnswers++;
            button.classList.add('correct');
            feedbackElement.textContent = getTranslation('quiz.feedback.correct') || '✓ Great job! That\'s correct!';
            feedbackElement.className = 'quiz-feedback correct';
        } else {
            button.classList.add('incorrect');
            
            // Find and highlight the correct answer
            allOptions.forEach(opt => {
                if (parseInt(opt.getAttribute('data-answer')) === q.correctAnswer) {
                    opt.classList.add('correct');
                }
            });
            
            feedbackElement.textContent = getTranslation('quiz.feedback.incorrect') || '✗ Not quite. The correct answer is highlighted.';
            feedbackElement.className = 'quiz-feedback incorrect';
        }
        
        // Update progress
        updateProgress();
        
        // Move to next question after delay
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < totalQuestions && currentQuestion < quizQuestions.length) {
                showQuestion();
            } else {
                showQuizComplete();
            }
        }, isCorrect ? 2000 : 3000);
    }

    // Show quiz completion message
    function showQuizComplete() {
        const container = document.getElementById('quiz-question-container');
        if (container) {
            container.style.display = 'none';
        }
        
        const quizComplete = document.querySelector('.quiz-complete');
        if (quizComplete) {
            quizComplete.style.display = 'block';
            
            // Update statistics in dedicated element
            const statsElement = quizComplete.querySelector('.quiz-stats');
            if (statsElement) {
                const statsTemplate = getTranslation('quiz.complete.stats') || 
                    'You answered {correct} out of {total} questions correctly!';
                statsElement.textContent = statsTemplate
                    .replace('{correct}', correctAnswers)
                    .replace('{total}', questionsAsked);
            }
        }
    }

    // Restart the quiz
    function restartQuiz() {
        currentQuestion = 0;
        questionsAsked = 0;
        correctAnswers = 0;
        
        // Hide completion message
        const quizComplete = document.querySelector('.quiz-complete');
        if (quizComplete) {
            quizComplete.style.display = 'none';
        }
        
        // Show quiz container
        const container = document.getElementById('quiz-question-container');
        if (container) {
            container.style.display = 'block';
        }
        
        // Update progress and show first question
        updateProgress();
        showQuestion();
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
