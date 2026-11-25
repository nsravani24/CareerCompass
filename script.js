// ==========================================
// CAREER COMPASS - MAIN JAVASCRIPT
// ==========================================


// ---------- NAVIGATION ----------

const featurePages = [
    "dashboard",
    "skill-analyzer",
    "roadmap",
    "interview",
    "resume-studio"
];

function showMessage() {
    document.getElementById("message").textContent =
        "Welcome to Career Compass! Let's build your future.";

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function goHome() {
    featurePages.forEach(function (id) {
        document.getElementById(id).hidden = true;
    });

    document.getElementById("homePage").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openFeature(featureId) {
    document.getElementById("homePage").hidden = true;

    featurePages.forEach(function (id) {
        document.getElementById(id).hidden = true;
    });

    const page = document.getElementById(featureId);

    if (page) {
        page.hidden = false;
    }

    if (featureId === "dashboard") {
        updateDashboard();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}


// ==========================================
// JOB ROLE SKILLS
// ==========================================

const jobSkills = {
    web: {
        name: "Web Developer",
        skills: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
        description: "Build and maintain websites and web applications."
    },

    data: {
        name: "Data Analyst",
        skills: ["Excel", "SQL", "Python", "Data Visualization", "Statistics"],
        description: "Analyze data and prepare useful business insights."
    },

    design: {
        name: "UI/UX Designer",
        skills: ["UI Design", "UX Research", "Figma", "Wireframing", "Prototyping"],
        description: "Design user-friendly and attractive digital products."
    },

    python: {
        name: "Python Developer",
        skills: ["Python", "OOP", "SQL", "Django", "Git"],
        description: "Develop applications using the Python programming language."
    },

    java: {
        name: "Java Developer",
        skills: ["Java", "OOP", "Collections", "JDBC", "SQL"],
        description: "Develop software applications using Java."
    },

    frontend: {
        name: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
        description: "Develop the visual and interactive parts of websites."
    },

    backend: {
        name: "Backend Developer",
        skills: ["Java", "Python", "Node.js", "SQL", "REST APIs"],
        description: "Build server-side logic, databases and application APIs."
    },

    testing: {
        name: "Software Tester",
        skills: ["Manual Testing", "Test Cases", "SQL", "Selenium", "Bug Reporting"],
        description: "Test applications and identify software defects."
    },

    business: {
        name: "Business Analyst",
        skills: ["Excel", "SQL", "Business Analysis", "Communication", "Power BI"],
        description: "Understand business needs and support decision-making."
    },

    marketing: {
        name: "Digital Marketing Executive",
        skills: ["SEO", "Social Media Marketing", "Content Writing", "Google Analytics", "Email Marketing"],
        description: "Promote products and services through digital platforms."
    }
};


// ==========================================
// SKILL GAP ANALYZER
// ==========================================

// One common PDF for all 10 job roles.

const learningPDF = "https://nsravani24.github.io/CareerCompass/careercompass-learning-guide.pdf";


function analyzeSkills() {
    const role = document.getElementById("jobRole").value;
    const result = document.getElementById("skillResult");
    const selectedJob = jobSkills[role];

    if (!selectedJob) {
        result.textContent = "Please select a valid job role.";
        return;
    }

    const pdfPath = encodeURI(learningPDF);

    const pdfSection = `
        <div class="learning-pdf">

            <h3>📚 CareerCompass Learning Guide</h3>

            <p>
                Your selected role is
                <strong>${escapeHTML(selectedJob.name)}</strong>.
            </p>

            <p>
                This combined learning guide contains notes
                for all 10 job roles.
            </p>

            <a
                href="${pdfPath}"
                target="_blank"
                rel="noopener noreferrer"
                class="primary-button"
            >
                Open Learning PDF
            </a>

            <a
                href="${pdfPath}"
                download="CareerCompass Learning Guide.pdf"
                class="secondary-button"
            >
                Download PDF
            </a>

        </div>
    `;

    result.innerHTML = `
        <div class="skill-result-content">

            <h3>Selected Job Role</h3>

            <p>${escapeHTML(selectedJob.name)}</p>


            <h3>Job Description</h3>

            <p>${escapeHTML(selectedJob.description)}</p>


            <h3>Important Skills to Learn</h3>

            <ul>
                ${selectedJob.skills.map(skill =>
                    `<li>${escapeHTML(skill)}</li>`
                ).join("")}
            </ul>


            ${pdfSection}


            <p class="practice-instruction">
                <em>
                    Practice each and every skill step by step
                    by building small projects.
                </em>
            </p>

        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// ==========================================
// LEARNING ROADMAP
// ==========================================

const roadmaps = {
    web: [
        "Learn HTML basics and page structure.",
        "Learn CSS, colors, layouts and responsive design.",
        "Learn JavaScript fundamentals and DOM manipulation.",
        "Practice Git and GitHub.",
        "Build a personal portfolio website."
    ],

    data: [
        "Learn Excel and spreadsheet operations.",
        "Learn SQL and database concepts.",
        "Learn Python basics.",
        "Practice data analysis using Pandas.",
        "Create charts and dashboards using Power BI."
    ],

    design: [
        "Understand UI and UX fundamentals.",
        "Learn design principles, colors and typography.",
        "Practice wireframing.",
        "Learn Figma and prototyping.",
        "Create a design portfolio."
    ],

    python: [
        "Learn Python syntax and basic programming.",
        "Understand functions, loops and data structures.",
        "Learn Object-Oriented Programming.",
        "Practice SQL and database connectivity.",
        "Build Python projects using frameworks."
    ],

    java: [
        "Learn Java syntax and basic programming.",
        "Understand OOP concepts.",
        "Learn Collections and Exception Handling.",
        "Practice JDBC and SQL.",
        "Build Java applications."
    ],

    frontend: [
        "Learn HTML page structure.",
        "Learn CSS and responsive layouts.",
        "Master JavaScript and DOM.",
        "Learn React fundamentals.",
        "Build interactive frontend projects."
    ],

    backend: [
        "Learn programming fundamentals using Java or Python.",
        "Understand databases and SQL.",
        "Learn server-side development.",
        "Understand REST APIs.",
        "Build and test backend applications."
    ],

    testing: [
        "Understand software testing fundamentals.",
        "Learn SDLC and STLC.",
        "Practice writing test cases.",
        "Learn bug reporting and defect tracking.",
        "Explore Selenium automation testing."
    ],

    business: [
        "Learn business analysis fundamentals.",
        "Improve Excel and documentation skills.",
        "Learn SQL basics.",
        "Practice requirement gathering and communication.",
        "Learn Power BI and create reports."
    ],

    marketing: [
        "Understand digital marketing fundamentals.",
        "Learn SEO and keyword research.",
        "Practice social media marketing.",
        "Learn content writing and email marketing.",
        "Explore Google Analytics and campaign reporting."
    ]
};


function showRoadmap() {
    const role = document.getElementById("roadmapRole").value;
    const result = document.getElementById("roadmapResult");

    if (!roadmaps[role]) {
        result.textContent = "Please select a valid job role.";
        return;
    }

    result.innerHTML = `
        <h3>${escapeHTML(jobSkills[role].name)} Roadmap</h3>

        <ol>
            ${roadmaps[role].map(step =>
                `<li>${escapeHTML(step)}</li>`
            ).join("")}
        </ol>

        <p>
            <strong>Tip:</strong>
            Practice every step and build projects to improve your skills.
        </p>
    `;
}


// ==========================================
// INTERVIEW QUESTION BANK
// ==========================================

const interviewTopics = {
    web: [
        ["HTML", "What is HTML and why is it used?", "HTML provides the structure of a webpage using elements and tags."],
        ["CSS", "What is CSS?", "CSS is used to style webpages by controlling colors, layouts and fonts."],
        ["JavaScript", "What is JavaScript?", "JavaScript adds interactivity and dynamic behavior to webpages."],
        ["Responsive Design", "What is responsive web design?", "Responsive design makes a website adjust to different screen sizes."],
        ["Git", "What is Git?", "Git is a version control system used to track code changes."],
        ["Forms", "Why are HTML forms used?", "HTML forms collect user information through input fields."],
        ["DOM", "What is the DOM?", "The DOM represents an HTML document as a tree of objects."],
        ["Flexbox", "What is CSS Flexbox?", "Flexbox is a CSS layout system used to arrange elements in rows or columns."]
    ],

    data: [
        ["Excel", "What is Microsoft Excel used for?", "Excel is used to organize, calculate and analyze data."],
        ["SQL", "What is SQL?", "SQL is a language used to manage and retrieve data from relational databases."],
        ["Python", "Why is Python used in data analysis?", "Python provides libraries such as Pandas and NumPy for data analysis."],
        ["Data Cleaning", "What is data cleaning?", "Data cleaning means identifying and correcting inaccurate or missing data."],
        ["Visualization", "What is data visualization?", "Data visualization represents information using charts and graphs."],
        ["Statistics", "Why are statistics important in data analysis?", "Statistics help summarize data and identify patterns."],
        ["Power BI", "What is Power BI?", "Power BI is a tool used to create interactive reports and dashboards."],
        ["Database", "What is a database?", "A database is an organized collection of information."]
    ],

    design: [
        ["UI Design", "What is UI design?", "UI design focuses on the visual appearance and interactive elements of a product."],
        ["UX Design", "What is UX design?", "UX design focuses on the overall experience of users."],
        ["Figma", "What is Figma?", "Figma is a collaborative tool used for interface design and prototyping."],
        ["Wireframe", "What is a wireframe?", "A wireframe is a basic visual layout of a digital product."],
        ["Prototype", "What is prototyping?", "Prototyping creates an interactive model to test a design."],
        ["User Research", "What is user research?", "User research helps understand users' needs and problems."],
        ["Typography", "Why is typography important?", "Typography improves readability and visual communication."],
        ["Usability", "What is usability?", "Usability measures how easily users can interact with a product."]
    ],

    python: [
        ["Python", "What is Python?", "Python is a high-level, interpreted programming language."],
        ["Variables", "What are variables in Python?", "Variables are names used to store data values."],
        ["Data Types", "What are Python data types?", "Common data types include integers, floats, strings, lists and dictionaries."],
        ["Functions", "What is a function in Python?", "A function is a reusable block of code that performs a task."],
        ["OOP", "What is Object-Oriented Programming?", "OOP organizes programs using classes and objects."],
        ["List", "What is a list in Python?", "A list is an ordered and changeable collection of elements."],
        ["Dictionary", "What is a dictionary?", "A dictionary stores data in key-value pairs."],
        ["Exception", "What is exception handling?", "Exception handling manages runtime errors using try and except."]
    ],

    java: [
        ["Java", "What is Java?", "Java is an object-oriented, class-based programming language."],
        ["JVM", "What is JVM?", "JVM executes Java bytecode."],
        ["OOP", "What are the main OOP concepts?", "The main OOP concepts are encapsulation, inheritance, polymorphism and abstraction."],
        ["Class", "What is a class in Java?", "A class is a blueprint used to create objects."],
        ["Object", "What is an object?", "An object is an instance of a class."],
        ["Collections", "What is the Java Collections Framework?", "It provides classes and interfaces to store and manipulate groups of objects."],
        ["Exception", "What is exception handling in Java?", "It handles runtime errors using try, catch and finally blocks."],
        ["JDBC", "What is JDBC?", "JDBC connects Java applications with databases."]
    ],

    frontend: [
        ["HTML", "What is HTML?", "HTML defines the structure of web pages."],
        ["CSS", "What is CSS?", "CSS controls the appearance and layout of web pages."],
        ["JavaScript", "Why is JavaScript important in frontend development?", "It makes webpages interactive and dynamic."],
        ["React", "What is React?", "React is a JavaScript library used to build user interfaces."],
        ["DOM", "What is DOM manipulation?", "DOM manipulation changes webpage elements using JavaScript."],
        ["Responsive Design", "Why is responsive design important?", "It makes websites usable across mobile, tablet and desktop screens."],
        ["API", "What is an API?", "An API allows different software applications to communicate."],
        ["Accessibility", "What is web accessibility?", "It makes websites usable by people with different abilities."]
    ],

    backend: [
        ["Backend", "What is backend development?", "Backend development handles server logic, databases and application operations."],
        ["Server", "What is a server?", "A server receives requests and provides responses to clients."],
        ["Database", "What is a database?", "A database stores and organizes application data."],
        ["SQL", "What is SQL?", "SQL is used to manage relational databases."],
        ["API", "What is a REST API?", "A REST API allows applications to communicate using HTTP methods."],
        ["Authentication", "What is authentication?", "Authentication verifies the identity of a user."],
        ["Node.js", "What is Node.js?", "Node.js allows JavaScript to run outside the browser."],
        ["HTTP", "What is HTTP?", "HTTP is a protocol used for communication between clients and servers."]
    ],

    testing: [
        ["Testing", "What is software testing?", "Software testing checks whether an application works as expected."],
        ["Test Case", "What is a test case?", "A test case contains steps, inputs and expected results for testing."],
        ["Bug", "What is a software bug?", "A bug is an error that causes unexpected software behavior."],
        ["Manual Testing", "What is manual testing?", "Manual testing is performed by a tester without automation scripts."],
        ["Automation", "What is automation testing?", "Automation testing uses tools and scripts to execute tests."],
        ["Selenium", "What is Selenium?", "Selenium is a tool used to automate web browser testing."],
        ["Regression", "What is regression testing?", "Regression testing checks whether new changes affect existing features."],
        ["STLC", "What is STLC?", "STLC is the Software Testing Life Cycle."]
    ],

    business: [
        ["Business Analysis", "What is business analysis?", "Business analysis identifies business needs and recommends solutions."],
        ["Requirement", "What is requirement gathering?", "It is the process of collecting stakeholder needs."],
        ["Stakeholder", "Who is a stakeholder?", "A stakeholder is a person or group affected by a project."],
        ["Excel", "How is Excel useful for a business analyst?", "Excel helps organize data, perform calculations and prepare reports."],
        ["SQL", "Why should a business analyst learn SQL?", "SQL helps retrieve and analyze information from databases."],
        ["Documentation", "Why is documentation important?", "Documentation records requirements, decisions and project details."],
        ["Power BI", "What is Power BI used for?", "Power BI creates reports and visual dashboards."],
        ["Communication", "Why is communication important for a business analyst?", "It helps understand requirements and coordinate with stakeholders."]
    ],

    marketing: [
        ["Digital Marketing", "What is digital marketing?", "Digital marketing promotes products and services through online channels."],
        ["SEO", "What is SEO?", "SEO improves a website's visibility in search engine results."],
        ["Social Media", "What is social media marketing?", "It uses social platforms to promote brands and connect with audiences."],
        ["Content", "What is content marketing?", "Content marketing attracts audiences through useful and relevant content."],
        ["Email", "What is email marketing?", "Email marketing communicates with audiences through email campaigns."],
        ["Analytics", "Why is analytics important in digital marketing?", "Analytics measures campaign performance and audience behavior."],
        ["Keywords", "What are keywords in SEO?", "Keywords are search terms used by people to find information."],
        ["Campaign", "What is a marketing campaign?", "A campaign is a planned set of promotional activities."]
    ]
};


// ==========================================
// INTERVIEW MODES
// ==========================================

const interviewModes = {
    beginner: {
        name: "Beginner",
        count: 20,
        type: "basic"
    },

    intermediate: {
        name: "Intermediate",
        count: 30,
        type: "intermediate"
    },

    challenge: {
        name: "Interview Challenge",
        count: 20,
        type: "challenge"
    },

    technical: {
        name: "Technical Interview",
        count: 20,
        type: "technical"
    },

    complete: {
        name: "Complete Interview Practice",
        count: 40,
        type: "complete"
    }
};

let currentQuestions = [];
let currentInterviewRole = "";
let currentInterviewMode = "";


function createQuestion(topic, index, mode) {
    const name = topic[0];
    const basicQuestion = topic[1];
    const answer = topic[2];

    const variations = [
        basicQuestion,
        `Explain the importance of ${name} in your job role.`,
        `How would you use ${name} in a practical project?`,
        `What are the main benefits of ${name}?`,
        `Give a real-world example related to ${name}.`,
        `What challenges can you face while working with ${name}?`,
        `How would you explain ${name} to a beginner?`,
        `What are the important concepts related to ${name}?`
    ];

    if (mode === "technical") {
        return {
            question: `Technical Question: ${basicQuestion}`,
            answer: answer
        };
    }

    if (mode === "challenge") {
        return {
            question: `Challenge: ${variations[(index + 3) % variations.length]}`,
            answer: answer
        };
    }

    if (mode === "intermediate") {
        return {
            question: `Intermediate: ${variations[(index + 1) % variations.length]}`,
            answer: answer
        };
    }

    return {
        question: variations[index % variations.length],
        answer: answer
    };
}


// ---------- SELECT INTERVIEW MODE ----------

function selectMode(mode) {
    const role = document.getElementById("interviewRole").value;
    const selectedMode = interviewModes[mode];

    if (!selectedMode) {
        return;
    }

    currentInterviewRole = role;
    currentInterviewMode = mode;

    document.querySelectorAll(".mode-button").forEach(function (button) {
        button.classList.toggle(
            "active",
            button.dataset.mode === mode
        );
    });

    const topics = interviewTopics[role];

    currentQuestions = [];

    for (let i = 0; i < selectedMode.count; i++) {
        const topic = topics[i % topics.length];

        currentQuestions.push(
            createQuestion(topic, i, selectedMode.type)
        );
    }

    document.getElementById("selectedMode").textContent =
        selectedMode.name + " selected – " +
        selectedMode.count + " questions.";

    displayInterviewQuestions();
}


// ---------- DISPLAY QUESTIONS ----------

function displayInterviewQuestions() {
    const container = document.getElementById("interviewQuestions");

    const roleName = jobSkills[currentInterviewRole].name;
    const modeName = interviewModes[currentInterviewMode].name;

    let html = `
        <div class="interview-summary">
            <h3>${escapeHTML(roleName)}</h3>
            <p>Practice Mode: ${escapeHTML(modeName)}</p>
            <p>Maximum available points: ${currentQuestions.length * 2}</p>
            <p>Attempting a question earns 1 point. Self-assessing a key concept earns 1 bonus point.</p>
        </div>
    `;

    currentQuestions.forEach(function (item, index) {
        const questionId = getQuestionId(index);
        const completed = appProgress.completedQuestions[questionId];

        html += `
            <div class="question-card">
                <h3>Question ${index + 1}</h3>
                <p>${escapeHTML(item.question)}</p>

                <textarea
                    id="answer-${index}"
                    placeholder="Type your answer here..."
                    ${completed ? "disabled" : ""}
                ></textarea>

                <label class="self-check">
                    <input
                        type="checkbox"
                        id="bonus-${index}"
                        ${completed && completed.bonus ? "checked disabled" : ""}
                        ${completed ? "disabled" : ""}
                    >
                    I included the important concept in my answer.
                </label>
                
                
                <button
                    id="submit-${index}"
                    onclick="submitAnswer(${index})"
                    ${completed ? "disabled" : ""}
                >
                    ${completed ? "Answer Submitted" : "Submit Answer"}
                </button>

                <button
                    class="secondary-button"
                    onclick="toggleSampleAnswer(${index})"
                >
                    View Sample Answer
                </button>

                <div id="sample-${index}" class="answer-hint" hidden>
                    <strong>Sample Answer:</strong>
                    <p>${escapeHTML(item.answer)}</p>
                </div>

                <p id="status-${index}" class="question-status">
                    ${completed
                        ? "Completed – " + completed.points + " points earned."
                        : "Not attempted yet."}
                </p>
            </div>
        `;
    });

    container.innerHTML = html;

    const completedCount = currentQuestions.filter(function (_, index) {
        return Boolean(appProgress.completedQuestions[getQuestionId(index)]);
    }).length;

    if (completedCount === currentQuestions.length) {
        container.insertAdjacentHTML(
            "beforeend",
            `<div class="interview-summary">
                <h3>Practice Mode Completed!</h3>
                <p>You have completed all questions in this mode.</p>
            </div>`
        );
    }
}


// ---------- QUESTION IDENTIFIER ----------

function getQuestionId(index) {
    return [
        currentInterviewRole,
        currentInterviewMode,
        index
    ].join("_");
}


// ---------- SUBMIT ANSWER ----------

function submitAnswer(index) {
    const questionId = getQuestionId(index);

    if (appProgress.completedQuestions[questionId]) {
        alert("You have already submitted this question.");
        return;
    }

    const answer = document.getElementById("answer-" + index).value.trim();

    if (!answer) {
        alert("Please enter your answer before submitting.");
        return;
    }

    const bonus = document.getElementById("bonus-" + index).checked;

    const earnedPoints = bonus ? 2 : 1;

    appProgress.completedQuestions[questionId] = {
        points: earnedPoints,
        bonus: bonus,
        date: new Date().toISOString()
    };

    appProgress.totalPoints += earnedPoints;

    const oldQuestionCount = appProgress.totalQuestions;
    appProgress.totalQuestions++;

    const oldCoins = Math.floor(oldQuestionCount / 10);
    const newCoins = Math.floor(appProgress.totalQuestions / 10);

    appProgress.totalCoins += newCoins - oldCoins;

    saveProgress();

    document.getElementById("answer-" + index).disabled = true;
    document.getElementById("bonus-" + index).disabled = true;
    document.getElementById("submit-" + index).disabled = true;
    document.getElementById("submit-" + index).textContent = "Answer Submitted";

    document.getElementById("status-" + index).textContent =
        "Completed! You earned " + earnedPoints + " point(s).";

    checkAchievements();
    updateDashboard();

    alert(
        "Great job! You earned " + earnedPoints +
        " point(s)." +
        (newCoins > oldCoins ? " You also earned a coin!" : "")
    );

    const completedInMode = currentQuestions.filter(function (_, questionIndex) {
        return Boolean(appProgress.completedQuestions[getQuestionId(questionIndex)]);
    }).length;

    if (completedInMode === currentQuestions.length) {
        document.getElementById("interviewQuestions").insertAdjacentHTML(
            "beforeend",
            `<div class="interview-summary">
                <h3>Congratulations!</h3>
                <p>You have completed all ${currentQuestions.length} questions in this practice mode.</p>
            </div>`
        );
    }
}


// ---------- SHOW / HIDE SAMPLE ANSWER ----------

function toggleSampleAnswer(index) {
    const sample = document.getElementById("sample-" + index);
    sample.hidden = !sample.hidden;
}


// ==========================================
// GAMIFICATION AND PROGRESS
// ==========================================

const STORAGE_KEY = "careerCompassProgress";

function getDefaultProgress() {
    return {
        totalPoints: 0,
        totalCoins: 0,
        totalQuestions: 0,
        completedQuestions: {},
        badges: []
    };
}

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return getDefaultProgress();
        }

        const parsed = JSON.parse(saved);

        return {
            totalPoints: Number(parsed.totalPoints) || 0,
            totalCoins: Number(parsed.totalCoins) || 0,
            totalQuestions: Number(parsed.totalQuestions) || 0,
            completedQuestions: parsed.completedQuestions || {},
            badges: Array.isArray(parsed.badges) ? parsed.badges : []
        };
    } catch (error) {
        console.error("Unable to load saved progress:", error);
        return getDefaultProgress();
    }
}

let appProgress = loadProgress();

function saveProgress() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appProgress));
    } catch (error) {
        console.error("Unable to save progress:", error);
        alert("Progress could not be saved in this browser.");
    }
}


// ---------- ACHIEVEMENTS ----------

const achievements = [
    {
        id: "first",
        name: "First Step",
        icon: "🌱",
        requirement: 1,
        description: "Complete your first question."
    },
    {
        id: "quick",
        name: "Quick Learner",
        icon: "⚡",
        requirement: 10,
        description: "Complete 10 questions."
    },
    {
        id: "builder",
        name: "Skill Builder",
        icon: "🎯",
        requirement: 50,
        description: "Complete 50 questions."
    },
    {
        id: "champion",
        name: "Interview Champion",
        icon: "🏆",
        requirement: 100,
        description: "Complete 100 questions."
    }
];

function checkAchievements() {
    achievements.forEach(function (badge) {
        const alreadyEarned = appProgress.badges.includes(badge.id);

        if (
            appProgress.totalQuestions >= badge.requirement &&
            !alreadyEarned
        ) {
            appProgress.badges.push(badge.id);

            alert(
                "Achievement Unlocked! " +
                badge.icon + " " + badge.name
            );
        }
    });

    saveProgress();
}


// ---------- LEVEL SYSTEM ----------

function getUserLevel(points) {
    if (points >= 100) {
        return {
            name: "Career Ready",
            description: "Excellent progress! Keep improving your skills.",
            minimum: 100,
            next: 150
        };
    }

    if (points >= 50) {
        return {
            name: "Skill Builder",
            description: "You are building strong interview skills.",
            minimum: 50,
            next: 100
        };
    }

    if (points >= 20) {
        return {
            name: "Explorer",
            description: "You are exploring your career opportunities.",
            minimum: 20,
            next: 50
        };
    }

    return {
        name: "Beginner",
        description: "Start practicing to grow your career skills.",
        minimum: 0,
        next: 20
    };
}


// ---------- DASHBOARD ----------

function updateDashboard() {
    checkAchievements();

    document.getElementById("totalPoints").textContent =
        appProgress.totalPoints;

    document.getElementById("totalCoins").textContent =
        appProgress.totalCoins;

    document.getElementById("totalQuestions").textContent =
        appProgress.totalQuestions;

    document.getElementById("totalBadges").textContent =
        appProgress.badges.length;

    const level = getUserLevel(appProgress.totalPoints);

    document.getElementById("userLevel").textContent = level.name;
    document.getElementById("levelDescription").textContent =
        level.description;

    let levelPercent;

    if (level.name === "Career Ready") {
        levelPercent = 100;
    } else {
        levelPercent =
            ((appProgress.totalPoints - level.minimum) /
            (level.next - level.minimum)) * 100;
    }

    document.getElementById("levelProgress").style.width =
        Math.min(100, Math.max(0, levelPercent)) + "%";

    document.getElementById("levelProgressText").textContent =
        appProgress.totalPoints + " total points earned";

    document.getElementById("progressSummary").textContent =
        "You have attempted " + appProgress.totalQuestions +
        " unique questions so far.";

    const questionPercent = Math.min(
        100,
        (appProgress.totalQuestions / 100) * 100
    );

    document.getElementById("questionProgress").style.width =
        questionPercent + "%";

    document.getElementById("questionProgressText").textContent =
        appProgress.totalQuestions + " / 100 questions";

    displayBadges();
}


// ---------- DISPLAY BADGES ----------

function displayBadges() {
    const container = document.getElementById("badgeContainer");

    container.innerHTML = achievements.map(function (badge) {
        const unlocked = appProgress.badges.includes(badge.id);

        return `
            <div class="achievement-badge ${unlocked ? "" : "locked"}">
                <div class="badge-icon">${badge.icon}</div>
                <h4>${escapeHTML(badge.name)}</h4>
                <p>${unlocked ? "Unlocked!" : badge.requirement + " questions required"}</p>
                <small>${escapeHTML(badge.description)}</small>
            </div>
        `;
    }).join("");
}


// ---------- RESET PROGRESS ----------

function resetProgress() {
    const confirmed = confirm(
        "Are you sure you want to reset all points, coins and achievements?"
    );

    if (!confirmed) {
        return;
    }

    appProgress = getDefaultProgress();
    saveProgress();
    updateDashboard();

    if (currentQuestions.length > 0) {
        displayInterviewQuestions();
    }

    alert("Your Career Compass progress has been reset.");
}


// ==========================================
// RESUME STUDIO
// ==========================================

// ---------- RESUME TABS ----------

function showResumeTab(tabId) {
    document.querySelectorAll(".resume-section").forEach(function (section) {
        section.hidden = true;
    });

    document.getElementById(tabId).hidden = false;
}


// ---------- CERTIFICATE UPLOAD ----------

document.addEventListener("DOMContentLoaded", function () {
    const certificateInput =
        document.getElementById("resumeCertificates");

    if (certificateInput) {
        certificateInput.addEventListener("change", function () {
            const files = Array.from(certificateInput.files);

            document.getElementById("certificateNames").textContent =
                files.length
                    ? "Selected certificates: " +
                      files.map(file => file.name).join(", ")
                    : "No certificates selected.";
        });
    }

    updateDashboard();
});


// ---------- GENERATE RESUME ----------

function generateResume() {
    const name = document.getElementById("resumeName").value.trim();
    const email = document.getElementById("resumeEmail").value.trim();
    const phone = document.getElementById("resumePhone").value.trim();
    const role = document.getElementById("resumeRole").value.trim();
    const education = document.getElementById("resumeEducation").value.trim();
    const skills = document.getElementById("resumeSkills").value.trim();
    const projects = document.getElementById("resumeProjects").value.trim();
    const experience = document.getElementById("resumeExperience").value.trim();

    if (!name || !email) {
        alert("Please enter your name and email address.");
        return;
    }

    const preview = document.getElementById("resumePreview");

    preview.innerHTML = `
        <h2>${escapeHTML(name)}</h2>
        <p>${escapeHTML(email)} | ${escapeHTML(phone)}</p>

        <h3>Career Objective</h3>
        <p>${escapeHTML(role || "Fresher")}</p>

        <h3>Education</h3>
        <p>${escapeHTML(education || "Not provided")}</p>

        <h3>Skills</h3>
        <p>${escapeHTML(skills || "Not provided")}</p>

        <h3>Projects</h3>
        <p>${escapeHTML(projects || "Not provided")}</p>

        <h3>Experience / Internships</h3>
        <p>${escapeHTML(experience || "Fresher")}</p>
    `;

    preview.hidden = false;
    document.getElementById("printResumeButton").hidden = false;

    preview.scrollIntoView({ behavior: "smooth" });
}


// ---------- PRINT / SAVE RESUME ----------

function printResume() {
    window.print();
}


// ==========================================
// RESUME ANALYZER
// ==========================================

function analyzeResume() {
    const fileInput = document.getElementById("resumeFile");
    const result = document.getElementById("resumeAnalysis");

    const file = fileInput.files[0];

    if (!file) {
        result.textContent = "Please upload a .txt resume file.";
        return;
    }

    if (!file.name.toLowerCase().endsWith(".txt")) {
        result.textContent =
            "This version supports only .txt resume files.";
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const content = String(event.target.result || "");
        const lowerContent = content.toLowerCase();

        const checks = [
            ["Email Address", /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(content)],
            ["Phone Number", /\b\d{10}\b/.test(content)],
            ["Education", lowerContent.includes("education")],
            ["Skills", lowerContent.includes("skills")],
            ["Projects", lowerContent.includes("project")],
            ["Experience", lowerContent.includes("experience")],
            ["Objective", lowerContent.includes("objective") ||
                          lowerContent.includes("summary")]
        ];

        const found = checks.filter(item => item[1]).length;
        const missing = checks.filter(item => !item[1]);

        result.innerHTML = `
            <h3>Resume Analysis Result</h3>

            <p>
                <strong>Sections identified:</strong>
                ${found} / ${checks.length}
            </p>

            <p>
                <strong>Resume length:</strong>
                ${content.trim().length} characters
            </p>

            <h3>Checklist</h3>

            <ul>
                ${checks.map(item =>
                    `<li>${item[1] ? "✓" : "○"} ${escapeHTML(item[0])}</li>`
                ).join("")}
            </ul>

            <h3>Suggestions</h3>

            ${
                missing.length
                    ? `<p>Consider adding: ${missing.map(item =>
                        escapeHTML(item[0])
                    ).join(", ")}.</p>`
                    : "<p>All basic sections were identified. Review your resume for clarity and accuracy.</p>"
            }

            <p>
                <strong>Note:</strong>
                This is a basic checklist, not an automatic professional resume evaluation.
            </p>
        `;
    };

    reader.onerror = function () {
        result.textContent = "Unable to read this file. Please try again.";
    };

    reader.readAsText(file);
}


// ==========================================
// SECURITY HELPER
// ==========================================

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return replacements[character];
    });
}
