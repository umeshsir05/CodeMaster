// JavaScript Document
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const currentYearSpan = document.getElementById('currentYear');
    
    // Set current year in footer
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Theme Toggle Functionality
    function toggleTheme() {
        const body = document.body;
        
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Initialize theme from localStorage
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        }
    }
    
    // Toggle Menu Functionality
    function toggleMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }
    
    // Close menu when clicking outside on mobile
    function closeMenuOnClickOutside(event) {
        if (window.innerWidth <= 768 && 
            navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !hamburger.contains(event.target)) {
            toggleMenu();
        }
    }
    
    // Handle dropdown on mobile
    function handleDropdown(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.classList.toggle('active');
        }
    }
    
    // Close dropdowns when clicking outside
    function closeDropdowns(event) {
        if (window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('active');
                }
            });
        }
    }
    
    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
    
    // Add event listeners to dropdown toggles
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-link');
        if (toggle) {
            toggle.addEventListener('click', handleDropdown);
        }
    });
    
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', closeDropdowns);
    
    // Initialize theme on page load
    initTheme();
    
    // Simple page navigation (for demo purposes)
    // In a real site, you would use actual separate HTML files
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown .nav-link)');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's a regular navigation link (not dropdown toggle)
            if (!this.parentElement.classList.contains('dropdown')) {
                // Remove active class from all nav links
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // For demo purposes, we're just updating the URL without actually navigating
                // In a real site, you would have separate HTML files
                const pageName = this.getAttribute('href');
                
                if (pageName === 'about.html') {
                    // Simulate loading about page
                    loadAboutPage();
                } else if (pageName === 'index.html') {
                    // Simulate loading home page
                    loadHomePage();
                }
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
    });
    
    // Demo page loading functions
    function loadHomePage() {
        document.title = 'CodeMaster Institute | Programming Courses';
        
        // Update main content to home page
        document.getElementById('main-content').innerHTML = `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">Master Programming with <span class="highlight">CodeMaster Institute</span></h1>
                        <p class="hero-subtitle">Learn C, C++, Java, Python, Web Development and more from industry experts. Build your coding career with our comprehensive courses.</p>
                        <div class="hero-actions">
                            <a href="#" class="btn btn-primary">Explore Courses</a>
                            <a href="about.html" class="btn btn-secondary">Learn More About Us</a>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Programming on laptop">
                    </div>
                </div>
            </section>
            
            <section class="courses">
                <div class="container">
                    <h2 class="section-title">Our <span class="highlight">Courses</span></h2>
                    <p class="section-subtitle">Comprehensive programming courses designed for beginners to advanced learners.</p>
                    
                    <div class="course-grid">
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-cuttlefish"></i>
                            </div>
                            <h3>C Programming</h3>
                            <p>Learn fundamentals of programming with C. Perfect starting point for beginners.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-cuttlefish"></i><i class="fas fa-plus plus-icon"></i>
                            </div>
                            <h3>C++ Programming</h3>
                            <p>Master object-oriented programming with C++. Build efficient applications.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-java"></i>
                            </div>
                            <h3>Java</h3>
                            <p>Learn Java for enterprise applications, Android development and more.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-python"></i>
                            </div>
                            <h3>Python</h3>
                            <p>From basics to advanced concepts including data science and machine learning.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-html5"></i>
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <h3>HTML/CSS</h3>
                            <p>Build beautiful, responsive websites with HTML5 and CSS3.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-js-square"></i>
                            </div>
                            <h3>JavaScript</h3>
                            <p>Master frontend development with modern JavaScript frameworks.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fab fa-php"></i>
                                <i class="fas fa-database"></i>
                            </div>
                            <h3>PHP & MySQL</h3>
                            <p>Learn server-side programming and database management for web apps.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                        
                        <div class="course-card">
                            <div class="course-icon">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <h3>Full Stack</h3>
                            <p>Complete web development course covering frontend and backend technologies.</p>
                            <a href="#" class="course-link">Learn More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="features">
                <div class="container">
                    <h2 class="section-title">Why Choose <span class="highlight">CodeMaster?</span></h2>
                    
                    <div class="feature-grid">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-user-tie"></i>
                            </div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from industry professionals with years of teaching experience.</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-laptop-house"></i>
                            </div>
                            <h3>Flexible Learning</h3>
                            <p>Online and offline classes available with recorded sessions.</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-project-diagram"></i>
                            </div>
                            <h3>Project-Based</h3>
                            <p>Build real-world projects to strengthen your portfolio.</p>
                        </div>
                        
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <h3>Certification</h3>
                            <p>Get industry-recognized certificates upon course completion.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
    
    function loadAboutPage() {
        document.title = 'About Us | CodeMaster Institute';
        
        // Update main content to about page
        document.getElementById('main-content').innerHTML = `
            <section class="hero about-hero">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">About <span class="highlight">CodeMaster Institute</span></h1>
                        <p class="hero-subtitle">We are passionate about teaching programming and helping students build successful careers in technology.</p>
                    </div>
                </div>
            </section>
            
            <section class="about-content">
                <div class="container">
                    <div class="about-grid">
                        <div class="about-text">
                            <h2>Our Mission</h2>
                            <p>At CodeMaster Institute, our mission is to make quality programming education accessible to everyone. We believe that anyone can learn to code with the right guidance and resources.</p>
                            
                            <p>Founded in 2015, we have helped over 10,000 students master programming languages and start their careers in software development, web development, data science, and more.</p>
                            
                            <h2>Our Approach</h2>
                            <p>We focus on practical, hands-on learning. Our courses are designed to help you build real-world projects that you can showcase in your portfolio. We combine theoretical concepts with practical implementation to ensure you understand how to apply what you learn.</p>
                            
                            <h2>Our Instructors</h2>
                            <p>Our instructors are industry professionals with years of experience in software development and teaching. They bring real-world insights and best practices to the classroom, helping you learn the skills that employers are looking for.</p>
                        </div>
                        
                        <div class="about-stats">
                            <div class="stat-card">
                                <div class="stat-number">8+</div>
                                <div class="stat-text">Years Experience</div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-number">10,000+</div>
                                <div class="stat-text">Students Trained</div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-number">15+</div>
                                <div class="stat-text">Courses Offered</div>
                            </div>
                            
                            <div class="stat-card">
                                <div class="stat-number">50+</div>
                                <div class="stat-text">Expert Instructors</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="teaching-approach">
                        <h2 class="section-title">Our <span class="highlight">Teaching Approach</span></h2>
                        
                        <div class="approach-grid">
                            <div class="approach-card">
                                <div class="approach-icon">
                                    <i class="fas fa-hands-helping"></i>
                                </div>
                                <h3>Personalized Attention</h3>
                                <p>Small batch sizes ensure individual attention to every student.</p>
                            </div>
                            
                            <div class="approach-card">
                                <div class="approach-icon">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <h3>Hands-on Projects</h3>
                                <p>Learn by building real applications and solving practical problems.</p>
                            </div>
                            
                            <div class="approach-card">
                                <div class="approach-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <h3>Career Support</h3>
                                <p>Resume building, interview preparation, and placement assistance.</p>
                            </div>
                            
                            <div class="approach-card">
                                <div class="approach-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h3>Community Learning</h3>
                                <p>Join a community of learners and collaborate on projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        // Add some additional styles for the about page
        const style = document.createElement('style');
        style.textContent = `
            .about-hero {
                background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
                color: white;
                text-align: center;
            }
            
            .about-hero .highlight {
                color: white;
            }
            
            .about-grid {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: var(--spacing-xl);
                margin: var(--spacing-xl) 0;
            }
            
            .about-stats {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--spacing-md);
            }
            
            .stat-card {
                text-align: center;
                padding: var(--spacing-lg);
                border-radius: 8px;
            }
            
            .light-mode .stat-card {
                background-color: var(--light-card);
                box-shadow: 0 5px 15px var(--light-shadow);
            }
            
            .dark-mode .stat-card {
                background-color: var(--dark-card);
                box-shadow: 0 5px 15px var(--dark-shadow);
            }
            
            .stat-number {
                font-size: 2.5rem;
                font-weight: 700;
                color: var(--primary);
                margin-bottom: var(--spacing-xs);
            }
            
            .teaching-approach {
                margin: var(--spacing-xl) 0;
            }
            
            .approach-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: var(--spacing-lg);
                margin-top: var(--spacing-lg);
            }
            
            .approach-card {
                text-align: center;
                padding: var(--spacing-lg);
                border-radius: 8px;
            }
            
            .light-mode .approach-card {
                background-color: var(--light-card);
                box-shadow: 0 5px 15px var(--light-shadow);
            }
            
            .dark-mode .approach-card {
                background-color: var(--dark-card);
                box-shadow: 0 5px 15px var(--dark-shadow);
            }
            
            .approach-icon {
                font-size: 2.5rem;
                color: var(--primary);
                margin-bottom: var(--spacing-md);
            }
            
            @media (max-width: 768px) {
                .about-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }
});