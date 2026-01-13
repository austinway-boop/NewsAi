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
            content: `President Trump announced sweeping new tariffs targeting countries that continue trade relationships with Iran, escalating economic pressure in the region. The 25% tariff will affect multiple sectors including energy, manufacturing, and agricultural products, according to senior administration officials <sup>[Reuters, WSJ]</sup>.

The decision comes amid growing tensions over Iran's nuclear program and regional influence. Administration officials stated that the measure is designed to further isolate Iran economically while protecting American interests <sup>[CNN, BBC]</sup>. The tariffs specifically target nations that have maintained significant trade volumes with Iran despite existing international sanctions.

European allies have expressed immediate concern about the potential impact on global trade relationships. The European Union is considering retaliatory measures to protect their economic interests, with Germany and France leading the opposition <sup>[Financial Times, Bloomberg]</sup>. EU Trade Commissioner Valdis Dombrovskis called the move "counterproductive to international cooperation."

Several major corporations with international operations are already reassessing their supply chains and trade partnerships in light of these new restrictions. Economic analysts from Goldman Sachs and JPMorgan predict potential market volatility in the coming weeks, particularly in energy and commodities sectors <sup>[Goldman Sachs Research, JPMorgan Analysis]</sup>.

The automotive industry appears particularly vulnerable, with companies like BMW, Mercedes-Benz, and Toyota potentially facing significant cost increases for components sourced through affected supply chains <sup>[Automotive News, Reuters]</sup>. Industry experts estimate the tariffs could add $2,000-$4,000 to the cost of affected vehicles.

Congressional Republicans have largely supported the measure, while Democrats express concerns about its impact on American consumers. Senator Chuck Schumer stated, "While we support tough measures against Iran, we must ensure American families don't bear the economic burden" <sup>[Politico, The Hill]</sup>.

The tariffs are set to take effect within 30 days, giving affected parties time to adjust their trade relationships and seek alternative partnerships. The Treasury Department will publish a detailed list of affected goods and services by Friday <sup>[Treasury.gov, Federal Register]</sup>.

Market analysts predict this could accelerate the ongoing shift toward regionalized supply chains, as companies seek to reduce exposure to geopolitical risks. The move is expected to benefit domestic manufacturers in affected sectors, particularly in renewable energy and advanced manufacturing <sup>[McKinsey Global Institute, Deloitte Insights]</sup>.`
        },
        {
            id: 2,
            title: "NATO commander warns Russia, China pose unprecedented threat",
            image: placeholderImages.international,
            sources: "32 sources",
            category: "International",
            publishedAt: "4 hours ago",
            content: `NATO's Supreme Allied Commander issued a stark warning about the growing military cooperation between Russia and China, describing it as an unprecedented threat to Western security. General Christopher Cavoli, speaking at a defense summit in Brussels, outlined intelligence assessments showing increased coordination between Russian and Chinese military forces across multiple domains <sup>[Defense News, Jane's Defence]</sup>.

The assessment highlights joint military exercises, technology sharing, and coordinated disinformation campaigns as key areas of concern. Recent satellite imagery shows unprecedented levels of military equipment transfers between the two nations, particularly in advanced missile systems and cyber warfare capabilities <sup>[CSIS, ISW Analysis]</sup>.

"What we're seeing is not just bilateral cooperation, but the formation of an alternative military alliance that directly challenges the existing international order," Cavoli stated during his keynote address. The alliance has conducted over 40 joint military exercises in the past year, including naval operations in the South China Sea and Arctic regions <sup>[USNI News, Naval War College Review]</sup>.

NATO allies are being urged to strengthen their collective defense capabilities in response to this evolving threat landscape. The alliance has approved a $100 billion increase in defense spending over the next five years, with particular emphasis on cyber defense and space-based assets <sup>[NATO Official Statement, Defense & Security Analysis]</sup>.

Defense officials from member nations expressed unanimous concern about the implications for global stability. British Defense Secretary Ben Wallace noted, "This partnership represents a fundamental shift in the balance of power that requires immediate and sustained response from democratic nations" <sup>[BBC Defense Correspondent, Sky News]</sup>.

Intelligence assessments reveal that the Russia-China partnership extends beyond traditional military cooperation to include joint development of hypersonic weapons, artificial intelligence applications for defense, and coordinated efforts to challenge Western technological supremacy <sup>[The Diplomat, Foreign Affairs]</sup>.

The partnership has also manifested in economic warfare tactics, with both nations implementing coordinated sanctions responses and developing alternative financial systems to bypass Western institutions like SWIFT <sup>[Financial Times, Wall Street Journal]</sup>.

Plans for enhanced intelligence sharing and joint response capabilities among NATO members are being accelerated. The alliance will establish new command structures specifically designed to counter hybrid threats from the Russia-China axis <sup>[Atlantic Council, RAND Corporation]</sup>.

The commander emphasized that this represents a fundamental shift in the global security landscape, requiring new approaches to deterrence and defense planning that move beyond traditional Cold War strategies <sup>[Foreign Policy, International Institute for Strategic Studies]</sup>.`
        },
        {
            id: 3,
            title: "Breakthrough in quantum computing achieved by tech giants",
            image: placeholderImages.tech,
            sources: "28 sources",
            category: "Technology",
            publishedAt: "6 hours ago",
            content: `Major technology companies have announced a significant breakthrough in quantum computing that could revolutionize data processing and encryption technologies. IBM, Google, and Microsoft jointly revealed a new approach to quantum error correction that dramatically improves the stability and reliability of quantum systems <sup>[Nature, Science]</sup>.

The advancement involves a revolutionary technique called "logical qubit encoding" that maintains quantum coherence for extended periods while performing complex calculations at speeds impossible with traditional computers. IBM's quantum processor achieved a 99.9% fidelity rate in maintaining quantum states for over 10 minutes <sup>[IBM Research, Physical Review Letters]</sup>.

"This breakthrough brings us significantly closer to practical quantum advantage," stated Dr. Jay Gambetta, IBM's Vice President of Quantum Computing. The implications extend far beyond computing to fields including drug discovery, financial modeling, climate simulation, and cryptography <sup>[MIT Technology Review, IEEE Spectrum]</sup>.

Researchers demonstrated the ability to factor large numbers exponentially faster than classical computers, a capability that poses both opportunities and threats for current encryption methods. The quantum system successfully factored a 2048-bit number in under four hours, compared to the estimated thousands of years required by conventional computers <sup>[Quantum Information & Computation, Nature Physics]</sup>.

Several pharmaceutical companies are already exploring applications for accelerated drug development. Roche and Pfizer have announced partnerships with quantum computing firms to model molecular interactions for new cancer treatments <sup>[BioPharma Dive, Nature Biotechnology]</sup>. Early simulations suggest quantum computers could reduce drug discovery timelines from 10-15 years to 3-5 years.

The financial sector is particularly interested in quantum applications for risk modeling and algorithmic trading. Goldman Sachs and JP Morgan have invested over $500 million combined in quantum computing research, focusing on portfolio optimization and fraud detection <sup>[Quantinuum Research, McKinsey Quantum Computing Report]</sup>.

However, the advancement also raises significant cybersecurity concerns. Current encryption methods used to protect financial transactions, government communications, and personal data could become vulnerable to quantum attacks. The National Institute of Standards and Technology (NIST) has accelerated its timeline for implementing post-quantum cryptography standards <sup>[NIST Official Statement, Cybersecurity & Infrastructure Security Agency]</sup>.

Industry experts believe this breakthrough could lead to commercial quantum computing systems within the next five years, fundamentally changing how we approach complex computational problems. The global quantum computing market is projected to reach $125 billion by 2030 <sup>[IDC Market Research, Boston Consulting Group]</sup>.

Major cloud providers are already incorporating quantum processors into their services. Amazon Web Services, Microsoft Azure, and Google Cloud Platform have announced expanded quantum computing offerings for enterprise customers <sup>[AWS Press Release, Microsoft Official Blog, Google Quantum AI]</sup>.`
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
const chatConversation = document.getElementById('chatConversation');
const modalContentEl = document.getElementById('modalContent');

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

    // Mobile swipe functionality
    setupSwipeToClose();
}

// Mobile swipe to close functionality
function setupSwipeToClose() {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let initialModalTop = 0;

    modalContentEl.addEventListener('touchstart', (e) => {
        if (!modal.classList.contains('active')) return;
        
        startY = e.touches[0].clientY;
        initialModalTop = modalContentEl.getBoundingClientRect().top;
        isDragging = true;
        modalContentEl.style.transition = 'none';
    });

    modalContentEl.addEventListener('touchmove', (e) => {
        if (!isDragging || !modal.classList.contains('active')) return;
        
        currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        
        // Only allow downward swipe
        if (deltaY > 0) {
            const translateY = Math.min(deltaY, 200);
            modalContentEl.style.transform = `translateY(${translateY}px)`;
            
            // Add opacity effect
            const opacity = Math.max(0.5, 1 - (deltaY / 400));
            modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;
        }
    });

    modalContentEl.addEventListener('touchend', (e) => {
        if (!isDragging || !modal.classList.contains('active')) return;
        
        const deltaY = currentY - startY;
        isDragging = false;
        
        modalContentEl.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        
        // Close if swiped down enough (more than 100px)
        if (deltaY > 100) {
            modalContentEl.style.transform = 'translateY(100vh)';
            setTimeout(() => {
                closeModalHandler();
                modalContentEl.style.transform = '';
                modal.style.backgroundColor = '';
            }, 300);
        } else {
            // Snap back to original position
            modalContentEl.style.transform = '';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
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
    chatMessages.innerHTML = '';
    chatConversation.style.display = 'none';
    chatInput.value = '';
    chatInput.placeholder = 'Ask a follow-up question...';
}

// Send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message || !currentArticle) return;

    // Show conversation area if this is the first message
    if (chatConversation.style.display === 'none') {
        chatConversation.style.display = 'block';
        chatInput.placeholder = 'Continue the conversation...';
    }

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';

    // Disable input while processing
    chatInput.disabled = true;
    sendBtn.disabled = true;

    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message, currentArticle);
        addMessage(response, 'ai');
        
        // Re-enable input
        chatInput.disabled = false;
        sendBtn.disabled = false;
        chatInput.focus();
    }, 1200);
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
    const lowerQuestion = question.toLowerCase();
    
    // Context-aware responses that reference the article as previous context
    if (lowerQuestion.includes('explain') || lowerQuestion.includes('what') || lowerQuestion.includes('how')) {
        return `To expand on what I mentioned about ${article.title.toLowerCase()}, this development is particularly significant because it represents a shift in ${article.category.toLowerCase()} policy. The key factors driving this include economic pressures, international relations, and public sentiment. Would you like me to dive deeper into any of these aspects?`;
    } else if (lowerQuestion.includes('why') || lowerQuestion.includes('reason')) {
        return `The underlying reasons for this ${article.category.toLowerCase()} development stem from several factors I touched on earlier. Political motivations, economic incentives, and timing all play crucial roles. This wasn't a spontaneous decision but rather the result of ongoing negotiations and pressures that have been building over time.`;
    } else if (lowerQuestion.includes('when') || lowerQuestion.includes('timeline') || lowerQuestion.includes('time')) {
        return `As I mentioned, this was reported ${article.publishedAt} and covered by ${article.sources}. However, the timeline for implementation is key here - these changes typically take 30-90 days to fully take effect, allowing stakeholders to adjust their strategies accordingly.`;
    } else if (lowerQuestion.includes('impact') || lowerQuestion.includes('effect') || lowerQuestion.includes('consequence')) {
        return `Building on the details I shared earlier, the broader implications of this ${article.category.toLowerCase()} development could be quite substantial. We're likely to see ripple effects across related industries, changes in market dynamics, and potential policy responses from other stakeholders. The full impact may not be apparent for several months.`;
    } else if (lowerQuestion.includes('source') || lowerQuestion.includes('reliable') || lowerQuestion.includes('verify')) {
        return `This information comes from ${article.sources}, indicating significant media coverage and verification across multiple outlets. The widespread reporting suggests the credibility of these developments, though as always, it's worth monitoring how the situation evolves over time.`;
    } else {
        // Generic contextual responses
        const genericResponses = [
            `That's an interesting follow-up to the information I shared about ${article.title.toLowerCase()}. This aspect of the story highlights the complexity of ${article.category.toLowerCase()} issues and how they interconnect with broader societal trends.`,
            `Good question about the details I mentioned. The nuances of this ${article.category.toLowerCase()} situation reveal how multiple stakeholders with different interests are navigating these developments.`,
            `To build on what I explained earlier, this particular angle shows how ${article.category.toLowerCase()} decisions often have unintended consequences that become apparent only after implementation begins.`
        ];
        return genericResponses[Math.floor(Math.random() * genericResponses.length)];
    }
}

// Make openArticle globally accessible
window.openArticle = openArticle;
