// Quiz questions data for all languages
// This file contains 100 quiz questions about Danish school life

const quizData = {
    en: [
        {
            question: "What time does school start in Denmark?",
            options: ["7:30 AM", "8:00 AM", "8:30 AM"],
            correctAnswer: 1
        },
        {
            question: "What should you do when you want to speak in class?",
            options: ["Shout out loud", "Raise your hand and wait", "Interrupt the teacher"],
            correctAnswer: 1
        },
        {
            question: "What is the rule about phones during lessons?",
            options: ["Use them freely", "Keep them away during lessons", "Only for emergencies"],
            correctAnswer: 1
        },
        {
            question: "Why do teachers give homework?",
            options: ["To punish students", "To help you learn", "To keep you busy"],
            correctAnswer: 1
        },
        {
            question: "How should you treat your classmates?",
            options: ["With respect and kindness", "Ignore them", "Only be nice to your friends"],
            correctAnswer: 0
        },
        {
            question: "What should you do when the teacher is talking?",
            options: ["Talk to friends", "Listen carefully", "Look at your phone"],
            correctAnswer: 1
        },
        {
            question: "What happens if you're late to school?",
            options: ["Nothing happens", "Try to be on time - it shows respect", "You get expelled"],
            correctAnswer: 1
        },
        {
            question: "What should you bring to class?",
            options: ["Just your phone", "Your school supplies and homework", "Nothing"],
            correctAnswer: 1
        },
        {
            question: "Can you eat during class?",
            options: ["Yes, anytime", "Only during designated break times", "Never"],
            correctAnswer: 1
        },
        {
            question: "How do Danish schools view punctuality?",
            options: ["Not important", "Very important - being on time shows respect", "Optional"],
            correctAnswer: 1
        },
        {
            question: "What should you do if you need to leave class early?",
            options: ["Just leave", "Ask the teacher for permission", "Wait until break"],
            correctAnswer: 1
        },
        {
            question: "How should you address your teacher?",
            options: ["With respect and politeness", "By their first name only", "Don't talk to them"],
            correctAnswer: 0
        },
        {
            question: "What is expected about homework completion?",
            options: ["Do your best to complete it", "Copy from others", "It's optional"],
            correctAnswer: 0
        },
        {
            question: "Can you use social media during class?",
            options: ["Yes, freely", "No, focus on learning", "Only if you're done"],
            correctAnswer: 1
        },
        {
            question: "When is the morning break?",
            options: ["9:00-9:15", "10:00-10:15", "11:00-11:15"],
            correctAnswer: 1
        },
        {
            question: "What time is lunch at school?",
            options: ["11:00-11:30", "12:00-12:30", "13:00-13:30"],
            correctAnswer: 1
        },
        {
            question: "What time does school end?",
            options: ["13:00", "14:00", "15:00"],
            correctAnswer: 1
        },
        {
            question: "What subjects are typically in the morning?",
            options: ["Sports and art", "Math, Danish, or English", "Only lunch"],
            correctAnswer: 1
        },
        {
            question: "What do you do during break time?",
            options: ["Stay in classroom", "Eat a snack and play with friends", "Do homework"],
            correctAnswer: 1
        },
        {
            question: "What happens from 12:30-13:30?",
            options: ["Go home", "Sports, music, or group activities", "More academic lessons"],
            correctAnswer: 1
        },
        {
            question: "How long is the school day typically?",
            options: ["4 hours", "6 hours", "8 hours"],
            correctAnswer: 1
        },
        {
            question: "What should you say when arriving at school?",
            options: ["Nothing", "Good morning", "Goodbye"],
            correctAnswer: 1
        },
        {
            question: "When do science and art classes usually happen?",
            options: ["Before school", "10:15-12:00", "After school"],
            correctAnswer: 1
        },
        {
            question: "What is the first thing you do at school?",
            options: ["Eat lunch", "Come to your classroom and say good morning", "Go to break"],
            correctAnswer: 1
        },
        {
            question: "How long is the morning break?",
            options: ["5 minutes", "15 minutes", "30 minutes"],
            correctAnswer: 1
        },
        {
            question: "What time do morning lessons start?",
            options: ["7:00", "8:00", "9:00"],
            correctAnswer: 1
        },
        {
            question: "What's a good way to start making friends?",
            options: ["Ignore everyone", "Smile and say hi", "Wait silently"],
            correctAnswer: 1
        },
        {
            question: "If a classmate is sitting alone at lunch, what should you do?",
            options: ["Ignore them", "Ask if they want to sit with you", "Laugh at them"],
            correctAnswer: 1
        },
        {
            question: "What's a good way to connect with classmates?",
            options: ["Join activities and play games at break time", "Stay alone", "Only use your phone"],
            correctAnswer: 0
        },
        {
            question: "How can you be a good friend?",
            options: ["Only talk about yourself", "Be a good listener and show interest", "Ignore others"],
            correctAnswer: 1
        },
        {
            question: "Should you be shy about speaking Danish?",
            options: ["Yes, never try", "No, don't be shy - your friends will help!", "Only speak your language"],
            correctAnswer: 1
        },
        {
            question: "What can you share with your new friends?",
            options: ["Nothing", "Your culture and country", "Only negative things"],
            correctAnswer: 1
        },
        {
            question: "How can you help your classmates?",
            options: ["Never help anyone", "Help them when they need it", "Do their homework for them"],
            correctAnswer: 1
        },
        {
            question: "What does a smile mean?",
            options: ["Nothing", "It's the same in every language!", "Only for photos"],
            correctAnswer: 1
        },
        {
            question: "Should you join sports or clubs?",
            options: ["No, stay alone", "Yes, it helps you make friends", "Only if forced"],
            correctAnswer: 1
        },
        {
            question: "When making friends, what should you show?",
            options: ["Disinterest", "Interest in what they say", "Boredom"],
            correctAnswer: 1
        },
        {
            question: "Why should you share your culture?",
            options: ["You shouldn't", "Your friends want to learn about it!", "To show off"],
            correctAnswer: 1
        },
        {
            question: "What's important when listening to friends?",
            options: ["Interrupt them", "Let them talk and pay attention", "Look at your phone"],
            correctAnswer: 1
        },
        {
            question: "You don't understand the homework. What should you do?",
            options: ["Don't do it", "Ask the teacher for help", "Copy from another student"],
            correctAnswer: 1
        },
        {
            question: "How are teachers in Denmark?",
            options: ["Mean and scary", "Friendly and helpful", "Unapproachable"],
            correctAnswer: 1
        },
        {
            question: "Can you ask teachers questions?",
            options: ["No, never", "Yes, anytime!", "Only once per day"],
            correctAnswer: 1
        },
        {
            question: "What should you say if you don't understand?",
            options: ["Nothing, stay confused", "Excuse me, I don't understand. Can you explain again?", "It's too hard"],
            correctAnswer: 1
        },
        {
            question: "Is it okay to ask 'why?'",
            options: ["No, it's rude", "Yes, it's okay to ask questions", "Never question anything"],
            correctAnswer: 1
        },
        {
            question: "Can you disagree with a teacher politely?",
            options: ["No, never", "Yes, you can share different ideas", "Only rudely"],
            correctAnswer: 1
        },
        {
            question: "What if the teacher's explanation is still unclear?",
            options: ["Give up", "Ask them to explain it differently", "Get angry"],
            correctAnswer: 1
        },
        {
            question: "How are teachers and students in Denmark?",
            options: ["Teachers are superior", "Equal partners in learning", "Students are above teachers"],
            correctAnswer: 1
        },
        {
            question: "When should you ask for help with homework?",
            options: ["Never", "When you need it", "Only at the last minute"],
            correctAnswer: 1
        },
        {
            question: "What do teachers want you to do?",
            options: ["Stay silent always", "Learn and ask questions", "Just memorize everything"],
            correctAnswer: 1
        },
        {
            question: "Can you tell a teacher you need extra help?",
            options: ["No, it's embarrassing", "Yes, they will help you", "Only if you're failing"],
            correctAnswer: 1
        },
        {
            question: "What should you do if you have a question in class?",
            options: ["Keep it to yourself", "Raise your hand and ask", "Ask after class only"],
            correctAnswer: 1
        },
        {
            question: "How will teachers respond if you need help?",
            options: ["They'll be annoyed", "They'll explain things in different ways", "They'll ignore you"],
            correctAnswer: 1
        },
        {
            question: "How are all students treated in Denmark?",
            options: ["Differently based on background", "Equally - everyone is the same", "Based on grades"],
            correctAnswer: 1
        },
        {
            question: "How does Denmark view different cultures?",
            options: ["Negatively", "Different is good - we celebrate diversity", "Ignore them"],
            correctAnswer: 1
        },
        {
            question: "How much personal space do Danish people prefer?",
            options: ["Very close", "About one arm's length away", "Very far away"],
            correctAnswer: 1
        },
        {
            question: "What does eye contact show in Denmark?",
            options: ["Rudeness", "You're listening", "Aggression"],
            correctAnswer: 1
        },
        {
            question: "How important is punctuality in Denmark?",
            options: ["Not important", "Very important - it shows respect", "Optional"],
            correctAnswer: 1
        },
        {
            question: "What should you try to do first before asking for help?",
            options: ["Give up immediately", "Try to do things yourself", "Always ask for help"],
            correctAnswer: 1
        },
        {
            question: "Can you share your ideas in class?",
            options: ["No, never", "Yes, teachers and students are equal", "Only if asked"],
            correctAnswer: 1
        },
        {
            question: "What does asking questions show?",
            options: ["Weakness", "Engagement and curiosity", "Rudeness"],
            correctAnswer: 1
        },
        {
            question: "How does Denmark view independence?",
            options: ["Not valued", "Valued - try things independently first", "Discouraged"],
            correctAnswer: 1
        },
        {
            question: "Can you say 'I don't understand'?",
            options: ["No, it's shameful", "Yes, it's okay and encouraged", "Only once"],
            correctAnswer: 1
        },
        {
            question: "What is valued in Danish classrooms?",
            options: ["Silence only", "Questions and independent thinking", "Memorization only"],
            correctAnswer: 1
        },
        {
            question: "How are new students welcomed?",
            options: ["Ignored", "Everyone is welcome!", "With suspicion"],
            correctAnswer: 1
        },
        {
            question: "What is Denmark's view on equality?",
            options: ["Some are better than others", "Everyone is equal", "Only Danish people matter"],
            correctAnswer: 1
        },
        {
            question: "Can you express your opinions?",
            options: ["No, keep quiet", "Yes, it's okay to say what you think", "Only outside school"],
            correctAnswer: 1
        },
        {
            question: "What does being on time demonstrate?",
            options: ["Fear", "Respect", "Weakness"],
            correctAnswer: 1
        },
        {
            question: "Who can help you at school?",
            options: ["No one", "Your classroom teacher, counselor, principal", "Only your parents"],
            correctAnswer: 1
        },
        {
            question: "If something feels wrong, what should you do?",
            options: ["Keep it secret", "Tell a teacher or counselor", "Ignore it"],
            correctAnswer: 1
        },
        {
            question: "Is it okay to ask for help?",
            options: ["No, never", "Yes, everyone needs help sometimes", "Only if you're weak"],
            correctAnswer: 1
        },
        {
            question: "Who else can help besides your teacher?",
            options: ["No one", "School counselor and principal", "Only strangers"],
            correctAnswer: 1
        },
        {
            question: "What if you feel sad or lonely?",
            options: ["Hide your feelings", "Talk to your teacher or school counselor", "Give up"],
            correctAnswer: 1
        },
        {
            question: "Can you talk to the school counselor?",
            options: ["No, they're too busy", "Yes, they're there to help you", "Only in emergencies"],
            correctAnswer: 1
        },
        {
            question: "Who should you tell if someone is mean to you?",
            options: ["No one", "Tell a teacher right away", "Handle it yourself"],
            correctAnswer: 1
        },
        {
            question: "Can your parents or guardians help?",
            options: ["No", "Yes, they're a great resource", "Only for big problems"],
            correctAnswer: 1
        },
        {
            question: "What if you miss home?",
            options: ["Suffer silently", "Talk about your feelings with someone you trust", "Leave school"],
            correctAnswer: 1
        },
        {
            question: "Are school counselors only for serious problems?",
            options: ["Yes, only emergencies", "No, they help with any concerns", "They don't actually help"],
            correctAnswer: 1
        },
        {
            question: "What does asking for help show?",
            options: ["Weakness", "Strength and self-awareness", "Failure"],
            correctAnswer: 1
        },
        {
            question: "Is bullying allowed in Danish schools?",
            options: ["Yes, it's normal", "No, there's zero tolerance", "Sometimes"],
            correctAnswer: 1
        },
        {
            question: "What should you do if someone bullies you?",
            options: ["Fight back", "Tell an adult immediately", "Ignore it forever"],
            correctAnswer: 1
        },
        {
            question: "Is bullying ever the victim's fault?",
            options: ["Yes, always", "No, never", "Sometimes"],
            correctAnswer: 1
        },
        {
            question: "What counts as bullying?",
            options: ["Only physical hitting", "Verbal, physical, social, and online mean behavior", "Nothing serious"],
            correctAnswer: 1
        },
        {
            question: "Should you respond to cyberbullying?",
            options: ["Yes, respond angrily", "No, block and report them", "Cyberbully them back"],
            correctAnswer: 1
        },
        {
            question: "What if you see someone being bullied?",
            options: ["Join in", "Tell a teacher and support the victim", "Ignore it"],
            correctAnswer: 1
        },
        {
            question: "Excluding someone on purpose is...",
            options: ["Fine", "A form of bullying", "Necessary"],
            correctAnswer: 1
        },
        {
            question: "Do you have the right to feel safe at school?",
            options: ["No", "Yes, absolutely", "Only some students"],
            correctAnswer: 1
        },
        {
            question: "Is homesickness normal?",
            options: ["No, it means you're weak", "Yes, it's completely normal and valid", "Only for some people"],
            correctAnswer: 1
        },
        {
            question: "What can help with homesickness?",
            options: ["Ignore your feelings", "Stay connected with family via video calls", "Never think about home"],
            correctAnswer: 1
        },
        {
            question: "Should you cook food from your home country?",
            options: ["No, forget your culture", "Yes, it can help you feel connected", "Only on holidays"],
            correctAnswer: 1
        },
        {
            question: "How long does adjustment typically take?",
            options: ["1 week", "1-2+ years - it's a process", "1 month"],
            correctAnswer: 1
        },
        {
            question: "Can you celebrate your home country's holidays?",
            options: ["No, only Danish holidays", "Yes, celebrate your culture", "It's forbidden"],
            correctAnswer: 1
        },
        {
            question: "Should you share your culture with Danish friends?",
            options: ["No, hide it", "Yes, share your culture with them", "Only if forced"],
            correctAnswer: 1
        },
        {
            question: "Is it okay to miss your home?",
            options: ["No, move on", "Yes, it's normal to miss home", "Only at first"],
            correctAnswer: 1
        },
        {
            question: "What should you do with homesickness feelings?",
            options: ["Hide them", "Talk about them with someone you trust", "Feel ashamed"],
            correctAnswer: 1
        },
        {
            question: "When should you ask for help with schoolwork?",
            options: ["Never", "Early, before it becomes overwhelming", "Only when failing"],
            correctAnswer: 1
        },
        {
            question: "How should you approach large assignments?",
            options: ["Do it all at once the night before", "Break tasks into small steps", "Give up"],
            correctAnswer: 1
        },
        {
            question: "What helps reduce stress?",
            options: ["Staying up all night", "Balance: sleep, exercise, and socializing", "Only studying"],
            correctAnswer: 1
        },
        {
            question: "Can you study with classmates?",
            options: ["No, only alone", "Yes, study groups can help", "It's cheating"],
            correctAnswer: 1
        },
        {
            question: "What should you focus on when stressed?",
            options: ["Everything at once", "What you can control", "Only problems"],
            correctAnswer: 1
        },
        {
            question: "Is learning in a new language stressful?",
            options: ["No, it's easy", "Yes, it's double work - be patient with yourself", "You should already know it"],
            correctAnswer: 1
        }
    ]
};

// Add placeholder for other languages that will use same questions with translations
quizData.ar = quizData.en; // Will be translated
quizData.uk = quizData.en; // Will be translated
quizData.da = quizData.en; // Will be translated
quizData.ru = quizData.en; // Will be translated
quizData.pt = quizData.en; // Will be translated
