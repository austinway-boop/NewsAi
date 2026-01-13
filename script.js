// Dummy news data
const newsData = {
    top: [
        {
            id: 1,
            title: "Trump imposes 25% tariff on countries doing business with Iran",
            image: "https://images.unsplash.com/photo-1540910419892-4308791312be?w=400&h=300&fit=crop",
            sources: "44 sources",
            category: "Politics",
            publishedAt: "2 hours ago",
            content: `President Trump announced sweeping new tariffs targeting countries that continue trade relationships with Iran, escalating economic pressure in the region. The 25% tariff will affect multiple sectors including energy, manufacturing, and agricultural products.

The decision comes amid growing tensions over Iran's nuclear program and regional influence. Administration officials stated that the measure is designed to further isolate Iran economically while protecting American interests.

European allies have expressed concern about the potential impact on global trade relationships. The European Union is considering retaliatory measures to protect their economic interests.

Several major corporations with international operations are reassessing their supply chains and trade partnerships in light of these new restrictions. Economic analysts predict potential market volatility in the coming weeks.

The tariffs are set to take effect within 30 days, giving affected parties time to adjust their trade relationships and seek alternative partnerships.`
        },
        {
            id: 2,
            title: "NATO commander warns Russia, China pose unprecedented threat",
            image: "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=400&h=300&fit=crop",
            sources: "32 sources",
            category: "International",
            publishedAt: "4 hours ago",
            content: `NATO's Supreme Allied Commander issued a stark warning about the growing military cooperation between Russia and China, describing it as an unprecedented threat to Western security.

Speaking at a defense summit in Brussels, the commander outlined intelligence assessments showing increased coordination between Russian and Chinese military forces across multiple domains including cyber warfare, space operations, and conventional forces.

The assessment highlights joint military exercises, technology sharing, and coordinated disinformation campaigns as key areas of concern. NATO allies are being urged to strengthen their collective defense capabilities.

Defense officials from member nations expressed unanimous concern about the implications for global stability. Plans for enhanced intelligence sharing and joint response capabilities are being accelerated.

The commander emphasized that this represents a fundamental shift in the global security landscape, requiring new approaches to deterrence and defense planning.`
        },
        {
            id: 3,
            title: "Breakthrough in quantum computing achieved by tech giants",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            sources: "28 sources",
            category: "Technology",
            publishedAt: "6 hours ago",
            content: `Major technology companies have announced a significant breakthrough in quantum computing that could revolutionize data processing and encryption technologies.

The advancement involves a new approach to quantum error correction that dramatically improves the stability and reliability of quantum systems. This development brings practical quantum computing applications much closer to reality.

Researchers demonstrated the ability to maintain quantum coherence for extended periods while performing complex calculations at speeds impossible with traditional computers.

The implications extend beyond computing to fields including drug discovery, financial modeling, and climate simulation. Several pharmaceutical companies are already exploring applications for accelerated drug development.

Industry experts believe this breakthrough could lead to commercial quantum computing systems within the next five years, fundamentally changing how we approach complex computational problems.`
        }
    ],
    tech: [
        {
            id: 4,
            title: "AI models show dramatic improvement in reasoning capabilities",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
            sources: "45 sources",
            category: "Artificial Intelligence",
            publishedAt: "1 hour ago",
            content: `Latest AI models demonstrate unprecedented advances in logical reasoning and problem-solving, approaching human-level performance in several cognitive tasks.

Research teams have developed new training methodologies that significantly enhance AI's ability to understand context, draw inferences, and solve complex multi-step problems.

The improvements are particularly notable in areas requiring abstract thinking, mathematical reasoning, and creative problem-solving. Performance benchmarks show improvements of up to 40% over previous generations.

These advances have immediate implications for applications in scientific research, education, and professional services. Several universities are piloting AI-assisted research programs.

Ethical considerations around these more capable systems are being actively discussed by researchers and policymakers to ensure responsible development and deployment.`
        }
    ],
    finance: [
        {
            id: 5,
            title: "Global markets react to central bank policy changes",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
            sources: "52 sources",
            category: "Markets",
            publishedAt: "3 hours ago",
            content: `International financial markets experienced significant volatility following coordinated policy announcements from major central banks regarding interest rates and monetary policy.

The Federal Reserve, European Central Bank, and Bank of Japan all signaled shifts in their approaches to inflation control and economic stimulus measures.

Currency markets showed immediate reactions with the dollar strengthening against major trading partners while bond yields fluctuated across different maturities.

Investment analysts are reassessing portfolio allocations and risk management strategies in light of the changing monetary policy landscape.

The coordinated approach suggests central banks are taking a unified stance on addressing global economic challenges while maintaining price stability.`
        }
    ],
    culture: [
        {
            id: 6,
            title: "Historic art exhibition breaks attendance records worldwide",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            sources: "18 sources",
            category: "Arts",
            publishedAt: "5 hours ago",
            content: `A groundbreaking international art exhibition featuring works from multiple centuries has shattered attendance records at museums across three continents.

The exhibition showcases rarely seen masterpieces alongside contemporary works, creating dialogue between historical and modern artistic expressions.

Innovative digital technologies enhance the viewing experience, allowing visitors to explore artworks in unprecedented detail and understand their historical contexts.

Cultural institutions report that the exhibition has attracted diverse audiences, including many first-time museum visitors drawn by the unique presentation format.

The success has prompted discussions about new approaches to cultural education and the role of technology in making art more accessible to global audiences.`
        }
    ],
    sports: [
        {
            id: 7,
            title: "Olympic preparations showcase sustainable venue innovations",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
            sources: "35 sources",
            category: "Olympics",
            publishedAt: "7 hours ago",
            content: `Preparations for the upcoming Olympic Games highlight revolutionary approaches to sustainable venue construction and event management.

New facilities incorporate advanced renewable energy systems, recycled materials, and innovative cooling technologies that significantly reduce environmental impact.

Athletic performance areas utilize cutting-edge materials that enhance competitor safety while minimizing waste production during both construction and operation phases.

International Olympic Committee officials praise the host city's commitment to environmental responsibility while maintaining world-class athletic facilities.

These innovations are expected to set new standards for future major sporting events and influence broader construction industry practices toward sustainability.`
        }
    ],
    politics: [
        {
            id: 8,
            title: "International climate summit reaches historic agreement",
            image: "https://images.unsplash.com/photo-1569163139394-de4e4b43e4e2?w=400&h=300&fit=crop",
            sources: "67 sources",
            category: "Environment",
            publishedAt: "8 hours ago",
            content: `World leaders have reached a landmark climate agreement featuring unprecedented commitments to reduce greenhouse gas emissions and transition to renewable energy sources.

The accord includes specific timelines for carbon neutrality goals and establishes new international funding mechanisms to support developing nations in their climate initiatives.

Participating countries committed to phase out fossil fuel subsidies while dramatically increasing investments in clean energy infrastructure and technology development.

Environmental organizations have praised the agreement as the most comprehensive climate action plan ever negotiated, though implementation challenges remain significant.

The agreement creates binding accountability measures and regular review processes to ensure nations meet their commitments to address climate change effectively.`
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

// Current state
let currentCategory = 'top';
let currentArticle = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderNews(currentCategory);
    setupEventListeners();
});

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
