// Create placeholder images using data URIs for better loading
const createPlaceholderImage = (width = 400, height = 300, colors = ['#6366f1', '#8b5cf6']) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add subtle geometric pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    
    // Create diamond pattern
    const spacing = 40;
    for (let x = 0; x < width + spacing; x += spacing) {
        for (let y = 0; y < height + spacing; y += spacing) {
            ctx.beginPath();
            ctx.moveTo(x, y - 10);
            ctx.lineTo(x + 10, y);
            ctx.lineTo(x, y + 10);
            ctx.lineTo(x - 10, y);
            ctx.closePath();
            ctx.stroke();
        }
    }
    
    return canvas.toDataURL();
};

// Generate consistent placeholder images with different color schemes
const placeholderImages = {
    politics: createPlaceholderImage(400, 300, ['#dc2626', '#ef4444']),
    tech: createPlaceholderImage(400, 300, ['#2563eb', '#3b82f6']),
    finance: createPlaceholderImage(400, 300, ['#059669', '#10b981']),
    sports: createPlaceholderImage(400, 300, ['#ea580c', '#f97316']),
    culture: createPlaceholderImage(400, 300, ['#7c3aed', '#8b5cf6']),
    international: createPlaceholderImage(400, 300, ['#0891b2', '#06b6d4'])
};

// Expanded dummy news data with many more articles
const newsData = {
    top: [
        {
            id: 1,
            title: "Trump imposes 25% tariff on countries doing business with Iran",
            image: placeholderImages.politics,
            sources: "44 sources",
            category: "Politics",
            publishedAt: "2 hours ago",
            content: `President Trump announced sweeping new tariffs targeting countries that continue trade relationships with Iran, escalating economic pressure in the region. The 25% tariff will affect multiple sectors including energy, manufacturing, and agricultural products.`
        },
        {
            id: 2,
            title: "NATO commander warns Russia, China pose unprecedented threat",
            image: placeholderImages.international,
            sources: "32 sources",
            category: "International",
            publishedAt: "4 hours ago",
            content: `NATO's Supreme Allied Commander issued a stark warning about the growing military cooperation between Russia and China, describing it as an unprecedented threat to Western security.`
        },
        {
            id: 3,
            title: "Breakthrough in quantum computing achieved by tech giants",
            image: placeholderImages.tech,
            sources: "28 sources",
            category: "Technology",
            publishedAt: "6 hours ago",
            content: `Major technology companies have announced a significant breakthrough in quantum computing that could revolutionize data processing and encryption technologies.`
        },
        {
            id: 4,
            title: "Global climate summit reaches historic agreement on emissions",
            image: placeholderImages.international,
            sources: "67 sources",
            category: "Environment",
            publishedAt: "8 hours ago",
            content: `World leaders have reached a landmark climate agreement featuring unprecedented commitments to reduce greenhouse gas emissions.`
        },
        {
            id: 5,
            title: "Major cryptocurrency exchange faces security breach",
            image: placeholderImages.finance,
            sources: "89 sources",
            category: "Finance",
            publishedAt: "1 hour ago",
            content: `One of the world's largest cryptocurrency exchanges reported a significant security breach affecting millions of users.`
        },
        {
            id: 6,
            title: "Breakthrough AI system demonstrates human-level reasoning",
            image: placeholderImages.tech,
            sources: "76 sources",
            category: "Technology",
            publishedAt: "3 hours ago",
            content: `Researchers unveil an artificial intelligence system that can reason through complex problems at human-level performance.`
        },
        {
            id: 7,
            title: "Olympic Games preparations showcase sustainable innovations",
            image: placeholderImages.sports,
            sources: "35 sources",
            category: "Sports",
            publishedAt: "7 hours ago",
            content: `Preparations for the upcoming Olympic Games highlight revolutionary approaches to sustainable venue construction.`
        },
        {
            id: 8,
            title: "Historic art discovery changes understanding of Renaissance",
            image: placeholderImages.culture,
            sources: "23 sources",
            category: "Arts",
            publishedAt: "5 hours ago",
            content: `A newly discovered painting is revolutionizing our understanding of Renaissance art and culture.`
        },
        {
            id: 9,
            title: "Global supply chain disruption affects major industries",
            image: placeholderImages.finance,
            sources: "91 sources",
            category: "Business",
            publishedAt: "9 hours ago",
            content: `Widespread supply chain disruptions are impacting manufacturing and retail sectors worldwide.`
        },
        {
            id: 10,
            title: "Space agency announces plans for Mars colonization mission",
            image: placeholderImages.tech,
            sources: "54 sources",
            category: "Science",
            publishedAt: "12 hours ago",
            content: `International space agencies collaborate on ambitious plans for the first human colony on Mars.`
        }
    ],
    tech: [
        {
            id: 11,
            title: "AI models show dramatic improvement in reasoning capabilities",
            image: placeholderImages.tech,
            sources: "45 sources",
            category: "Artificial Intelligence",
            publishedAt: "1 hour ago",
            content: `Latest AI models demonstrate unprecedented advances in logical reasoning and problem-solving, approaching human-level performance in several cognitive tasks.`
        },
        {
            id: 12,
            title: "Revolutionary battery technology promises 10x longer life",
            image: placeholderImages.tech,
            sources: "38 sources",
            category: "Technology",
            publishedAt: "3 hours ago",
            content: `Scientists develop groundbreaking battery technology that could extend device life by up to ten times current capacity.`
        },
        {
            id: 13,
            title: "Quantum internet takes major step forward with new breakthrough",
            image: placeholderImages.tech,
            sources: "42 sources",
            category: "Science",
            publishedAt: "5 hours ago",
            content: `Researchers successfully demonstrate quantum entanglement over record distances, bringing quantum internet closer to reality.`
        },
        {
            id: 14,
            title: "Self-driving cars pass major safety milestone in testing",
            image: placeholderImages.tech,
            sources: "51 sources",
            category: "Transportation",
            publishedAt: "7 hours ago",
            content: `Autonomous vehicle technology achieves significant safety benchmarks in comprehensive testing programs.`
        },
        {
            id: 15,
            title: "New gene therapy shows promise for treating rare diseases",
            image: placeholderImages.tech,
            sources: "29 sources",
            category: "Medicine",
            publishedAt: "9 hours ago",
            content: `Clinical trials reveal encouraging results for gene therapy treatments targeting previously incurable conditions.`
        }
    ],
    finance: [
        {
            id: 16,
            title: "Global markets react to central bank policy changes",
            image: placeholderImages.finance,
            sources: "52 sources",
            category: "Markets",
            publishedAt: "3 hours ago",
            content: `International financial markets experienced significant volatility following coordinated policy announcements from major central banks.`
        },
        {
            id: 17,
            title: "Bitcoin reaches new all-time high amid institutional adoption",
            image: placeholderImages.finance,
            sources: "73 sources",
            category: "Cryptocurrency",
            publishedAt: "2 hours ago",
            content: `Bitcoin surges to unprecedented levels as major corporations announce significant investments in digital assets.`
        },
        {
            id: 18,
            title: "Major bank announces zero-fee digital payment platform",
            image: placeholderImages.finance,
            sources: "41 sources",
            category: "Banking",
            publishedAt: "4 hours ago",
            content: `Leading financial institution launches comprehensive digital payment solution with no transaction fees.`
        },
        {
            id: 19,
            title: "Economic indicators suggest strong recovery momentum",
            image: placeholderImages.finance,
            sources: "65 sources",
            category: "Economy",
            publishedAt: "6 hours ago",
            content: `Latest economic data reveals robust growth patterns across multiple sectors and regions.`
        },
        {
            id: 20,
            title: "Green bonds market experiences record-breaking growth",
            image: placeholderImages.finance,
            sources: "34 sources",
            category: "Sustainable Finance",
            publishedAt: "8 hours ago",
            content: `Environmental, social, and governance focused investments reach unprecedented market penetration.`
        }
    ],
    culture: [
        {
            id: 21,
            title: "Historic art exhibition breaks attendance records worldwide",
            image: placeholderImages.culture,
            sources: "18 sources",
            category: "Arts",
            publishedAt: "5 hours ago",
            content: `A groundbreaking international art exhibition featuring works from multiple centuries has shattered attendance records at museums across three continents.`
        },
        {
            id: 22,
            title: "Broadway shows return with innovative virtual reality experiences",
            image: placeholderImages.culture,
            sources: "27 sources",
            category: "Theater",
            publishedAt: "3 hours ago",
            content: `Theater productions integrate cutting-edge VR technology to create immersive audience experiences.`
        },
        {
            id: 23,
            title: "Ancient manuscript discovered reveals hidden historical secrets",
            image: placeholderImages.culture,
            sources: "31 sources",
            category: "Archaeology",
            publishedAt: "6 hours ago",
            content: `Archaeologists uncover medieval text that challenges existing understanding of historical events.`
        },
        {
            id: 24,
            title: "Music streaming platforms report surge in global collaborations",
            image: placeholderImages.culture,
            sources: "44 sources",
            category: "Music",
            publishedAt: "4 hours ago",
            content: `International artists increasingly collaborate across borders, creating new fusion genres and cultural exchanges.`
        },
        {
            id: 25,
            title: "Documentary festival highlights climate change storytelling",
            image: placeholderImages.culture,
            sources: "22 sources",
            category: "Film",
            publishedAt: "7 hours ago",
            content: `Filmmakers showcase powerful environmental narratives at prestigious international documentary festival.`
        }
    ],
    sports: [
        {
            id: 26,
            title: "Olympic preparations showcase sustainable venue innovations",
            image: placeholderImages.sports,
            sources: "35 sources",
            category: "Olympics",
            publishedAt: "7 hours ago",
            content: `Preparations for the upcoming Olympic Games highlight revolutionary approaches to sustainable venue construction and event management.`
        },
        {
            id: 27,
            title: "World Cup qualifications produce surprising upsets",
            image: placeholderImages.sports,
            sources: "89 sources",
            category: "Soccer",
            publishedAt: "2 hours ago",
            content: `Unexpected results in World Cup qualifying matches reshape tournament predictions and rankings.`
        },
        {
            id: 28,
            title: "Tennis championships feature breakthrough young talent",
            image: placeholderImages.sports,
            sources: "43 sources",
            category: "Tennis",
            publishedAt: "5 hours ago",
            content: `Rising stars dominate major tennis tournaments, signaling generational shift in professional tennis.`
        },
        {
            id: 29,
            title: "Basketball playoffs deliver historic performance records",
            image: placeholderImages.sports,
            sources: "67 sources",
            category: "Basketball",
            publishedAt: "1 hour ago",
            content: `Professional basketball playoffs witness unprecedented individual and team achievement milestones.`
        },
        {
            id: 30,
            title: "Swimming championships showcase new world records",
            image: placeholderImages.sports,
            sources: "38 sources",
            category: "Swimming",
            publishedAt: "9 hours ago",
            content: `International swimming competition produces multiple world record performances across various events.`
        }
    ],
    politics: [
        {
            id: 31,
            title: "International climate summit reaches historic agreement",
            image: placeholderImages.politics,
            sources: "67 sources",
            category: "Environment",
            publishedAt: "8 hours ago",
            content: `World leaders have reached a landmark climate agreement featuring unprecedented commitments to reduce greenhouse gas emissions and transition to renewable energy sources.`
        },
        {
            id: 32,
            title: "Congressional hearings address social media regulation",
            image: placeholderImages.politics,
            sources: "78 sources",
            category: "Technology Policy",
            publishedAt: "4 hours ago",
            content: `Lawmakers examine comprehensive approaches to regulating social media platforms and protecting user privacy.`
        },
        {
            id: 33,
            title: "Election security measures enhanced for upcoming votes",
            image: placeholderImages.politics,
            sources: "56 sources",
            category: "Elections",
            publishedAt: "6 hours ago",
            content: `Government agencies implement advanced cybersecurity protocols to protect electoral processes.`
        },
        {
            id: 34,
            title: "International trade negotiations reach critical phase",
            image: placeholderImages.politics,
            sources: "91 sources",
            category: "Trade",
            publishedAt: "3 hours ago",
            content: `Multi-national trade discussions approach decisive moments with significant economic implications.`
        },
        {
            id: 35,
            title: "Healthcare reform proposals gain bipartisan support",
            image: placeholderImages.politics,
            sources: "64 sources",
            category: "Healthcare",
            publishedAt: "5 hours ago",
            content: `Political leaders from both parties find common ground on healthcare accessibility and affordability measures.`
        }
    ]
};

// DOM Elements
const newsGrid = document.getElementById('newsGrid');
const navTabs = document.querySelectorAll('.nav-tab');
const mobileNavTabs = document.querySelectorAll('.mobile-nav-tab');
const modal = document.getElementById('articleModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const themeToggle = document.getElementById('themeToggle');

// Current state
let currentCategory = 'top';
let currentArticle = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderNews(currentCategory);
    setupEventListeners();
});

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Setup event listeners
function setupEventListeners() {
    // Navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            setActiveTab(tab, navTabs);
            currentCategory = category;
            renderNews(category);
        });
    });

    // Mobile navigation tabs
    mobileNavTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            setActiveTab(tab, mobileNavTabs);
            // Also update main nav
            navTabs.forEach(mainTab => {
                if (mainTab.dataset.category === category) {
                    setActiveTab(mainTab, navTabs);
                }
            });
            currentCategory = category;
            renderNews(category);
            closeMobileMenuHandler();
        });
    });

    // Modal controls
    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // Mobile menu controls
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMobileMenu.addEventListener('click', closeMobileMenuHandler);
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenuHandler();
        }
    });

    // Chat functionality
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModalHandler();
        }
    });
}

// Set active tab
function setActiveTab(activeTab, tabList) {
    tabList.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

// Render news for category
function renderNews(category) {
    const articles = newsData[category] || [];
    
    if (articles.length === 0) {
        newsGrid.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
            </div>
        `;
        return;
    }

    newsGrid.innerHTML = articles.map(article => `
        <article class="news-card" onclick="openArticle(${article.id})">
            <img class="news-card-image" src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="news-card-content">
                <h2 class="news-card-title">${article.title}</h2>
                <div class="news-card-meta">
                    <div class="source-icons">
                        <div class="source-icon"></div>
                        <div class="source-icon"></div>
                    </div>
                    <span>${article.sources}</span>
                </div>
            </div>
        </article>
    `).join('');
}

// Open article in modal
function openArticle(articleId) {
    // Find article in all categories
    currentArticle = null;
    for (const category in newsData) {
        const article = newsData[category].find(a => a.id === articleId);
        if (article) {
            currentArticle = article;
            break;
        }
    }

    if (!currentArticle) return;

    // Populate modal
    modalImage.src = currentArticle.image;
    modalImage.alt = currentArticle.title;
    modalTitle.textContent = currentArticle.title;
    modalMeta.innerHTML = `
        <span>${currentArticle.category}</span>
        <span>•</span>
        <span>${currentArticle.publishedAt}</span>
        <span>•</span>
        <span>${currentArticle.sources}</span>
    `;
    modalContent.innerHTML = currentArticle.content.split('\n\n').map(p => `<p>${p}</p>`).join('');

    // Reset chat
    resetChat();

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentArticle = null;
}

// Close mobile menu
function closeMobileMenuHandler() {
    mobileMenu.classList.remove('active');
}

// Reset chat
function resetChat() {
    chatMessages.innerHTML = `
        <div class="ai-message">
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>Hi! I'm here to help you understand this article better. What would you like to know?</p>
            </div>
        </div>
    `;
    chatInput.value = '';
}

// Send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message || !currentArticle) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message, currentArticle);
        addMessage(response, 'ai');
    }, 1000);
}

// Add message to chat
function addMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    
    const avatar = type === 'ai' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            ${avatar}
        </div>
        <div class="message-content">
            <p>${content}</p>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate AI response (simplified simulation)
function generateAIResponse(question, article) {
    const responses = [
        `Based on the article about "${article.title}", this appears to be related to ${article.category.toLowerCase()} developments. What specific aspect would you like me to explain further?`,
        `This article discusses important developments in ${article.category.toLowerCase()}. The key points suggest significant implications for policy and public interest.`,
        `The article was published ${article.publishedAt} and has been covered by ${article.sources}. This indicates substantial media attention and public interest.`,
        `From my analysis of the article, this development could have broader implications beyond what's immediately apparent. Would you like me to explore potential consequences?`,
        `The article provides substantial detail about recent events. I can help break down the complex aspects or explain the background context if that would be helpful.`
    ];

    // Simple keyword-based response selection
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('explain') || lowerQuestion.includes('what')) {
        return responses[0];
    } else if (lowerQuestion.includes('when') || lowerQuestion.includes('time')) {
        return responses[2];
    } else if (lowerQuestion.includes('why') || lowerQuestion.includes('impact')) {
        return responses[3];
    } else {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Make openArticle globally accessible
window.openArticle = openArticle;
