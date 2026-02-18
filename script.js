// =============================================
// TERMINAL PORTFOLIO - MOHIT S K
// JavaScript Interactivity
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initMatrixRain();
    initTypingEffect();
    initTerminalCommands();
    initCustomCursor();
    initScrollAnimations();
    initNavigation();
    initContactForm();
    initSkillBars();
});

/* =============================================
   MATRIX RAIN EFFECT
   ============================================= */
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|;:,.<>?/*-+';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Array to track y position of each drop
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    let animationId;
    
    function draw() {
        // Semi-transparent black to create trail effect
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Green text
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Get random character
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            
            // Draw the character
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            // Reset drop to top randomly after it crosses screen
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            // Move drop down
            drops[i]++;
        }
        
        animationId = requestAnimationFrame(draw);
    }
    
    // Start animation
    draw();
    
    // Stop on mobile for performance
    if (window.innerWidth < 768) {
        cancelAnimationFrame(animationId);
        canvas.style.display = 'none';
    }
}

/* =============================================
   TYPING EFFECT
   ============================================= */
function initTypingEffect() {
    const textElement = document.getElementById('typing-text');
    const phrases = [
        'Web Developer',
        'Cybersecurity Enthusiast',
        'Ethical Hacker',
        'PC Builder',
        'Designer'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100        if (!is;
        }
        
Deleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

/* =============================================
   TERMINAL COMMAND SYSTEM
   ============================================= */
function initTerminalCommands() {
    const terminalInput = document.getElementById('terminal-input');
    const commandOutput = document.getElementById('command-output');
    
    if (!terminalInput) return;
    
    const commands = {
        help: {
            response: `Available commands:
  <span class="cmd">about</span>    - Display information about me
  <span class="cmd">skills</span>   - View my technical skills
  <span class="cmd">contact</span>  - Get my contact information
  <span class="cmd">projects</span> - See my projects
  <span class="cmd">clear</span>    - Clear terminal output
  <span class="cmd">whoami</span>   - Display current user info`,
            type: 'html'
        },
        about: {
            response: `> Loading about information...

Name: Mohit S K
Location: Tamil Nadu, India
Education: B.Tech CSE @ SRMIST (2023-2027)

I am a passionate cybersecurity enthusiast and ethical hacker with 
hands-on experience in penetration testing, security tools, and 
Linux systems. I also enjoy web development and building custom PCs.

Type <span class="cmd">contact</span> to get in touch!`,
            type: 'html'
        },
        skills: {
            response: `> Loading skill matrix...

[█████████░] HTML/CSS    - 90%
[███████░░░] JavaScript  - 75%
[██████░░░░] Python       - 70%
[█████░░░░░] Web Security - 65%
[█████░░░░░] Node.js     - 65%
[████░░░░░░] PenTesting  - 60%`,
            type: 'html'
        },
        contact: {
            response: `> Contact channels:

Email: mohit17717@gmail.com
Phone: +91 7418634741
Location: Tamil Nadu, India

You can also use the contact form below!`,
            type: 'html'
        },
        projects: {
            response: `> Fetching projects...

[1] Portfolio Website - This terminal-based portfolio
[2] Full Stack Applications - E-commerce & web apps
[3] Security Tools - Python-based security scripts
[4] PC Builds - Custom gaming & workstation rigs

More projects coming soon!`,
            type: 'html'
        },
        whoami: {
            response: `visitor@portfolio

You are a visitor exploring this terminal portfolio.
Built by Mohit S K - Cybersecurity Enthusiast & Web Developer`,
            type: 'text'
        },
        clear: {
            response: '',
            type: 'clear'
        },
        ls: {
            response: `about.txt  skills.exe  contact.bin  projects/  blog.md`,
            type: 'text'
        },
        sudo: {
            response: `<span class="error">Access denied!</span> This is not a real terminal. 
But nice try!`,
            type: 'html'
        },
        hack: {
            response: `<span class="warning">Nice try!</span> I'm a security professional, 
not a hacker. I use my skills ethically!`,
            type: 'html'
        },
        hello: {
            response: `Hello, visitor! Welcome to my terminal portfolio.
Type <span class="cmd">help</span> to see available commands.`,
            type: 'html'
        },
        hi: {
            response: `Hi there! Welcome! Type <span class="cmd">help</span> to get started.`,
            type: 'html'
        }
    };
    
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            
            if (command) {
                if (command === 'clear') {
                    commandOutput.innerHTML = '';
                    commandOutput.classList.remove('show');
                } else if (commands[command]) {
                    const cmd = commands[command];
                    let responseHtml = `<p class="system-msg">visitor@portfolio:~$ ${command}</p>`;
                    
                    if (cmd.type === 'html') {
                        responseHtml += cmd.response;
                    } else {
                        responseHtml += `<p>${cmd.response}</p>`;
                    }
                    
                    commandOutput.innerHTML = responseHtml;
                    commandOutput.classList.add('show');
                } else {
                    commandOutput.innerHTML = `
                        <p class="system-msg">visitor@portfolio:~$ ${command}</p>
                        <p class="error">Command not found: ${command}</p>
                        <p>Type <span class="cmd">help</span> for available commands</p>
                    `;
                    commandOutput.classList.add('show');
                }
            }
            
            terminalInput.value = '';
        }
    });
    
    // Focus terminal on click
    document.querySelector('.terminal-body').addEventListener('click', () => {
        terminalInput.focus();
    });
}

/* =============================================
   CUSTOM CURSOR
   ============================================= */
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Move cursor immediately
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    // Smooth follower movement
    function animateFollower() {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        
        cursor.style.left = mouseX - 6 + 'px';
        cursor.style.top = mouseY - 6 + 'px';
        follower.style.left = followerX - 15 + 'px';
        follower.style.top = followerY - 15 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Add hover effect on links and buttons
    const hoverElements = document.querySelectorAll('a, button, input, textarea');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
            follower.style.opacity = '0.8';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
            follower.style.opacity = '0.5';
        });
    });
}

/* =============================================
   SCROLL ANIMATIONS
   ============================================= */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.section, .terminal-card, .skill-card, .timeline-item, .service-card, .education-card');
    
    // Add fade-in class to elements
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });
}

/* =============================================
   NAVIGATION
   ============================================= */
function initNavigation() {
    const nav = document.querySelector('.terminal-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Update active link based on scroll position
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* =============================================
   CONTACT FORM
   ============================================= */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = form ? form.querySelector('.submit-btn') : null;
    
    if (!form || !submitBtn) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Message transmitted successfully! I will get back to you soon.';
            
            // Reset form
            form.reset();
        } catch (error) {
            // Show error message
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Transmission failed. Please try again or email directly.';
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.className = 'form-status';
            }, 5000);
        }
    });
}

/* =============================================
   SKILL BARS ANIMATION
   ============================================= */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const percentage = progress.getAttribute('data-progress');
                progress.style.width = percentage + '%';
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

/* =============================================
   KEYBOARD SHORTCUTS
   ============================================= */
document.addEventListener('keydown', (e) => {
    // Press 'h' to go home
    if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
        const activeEl = document.activeElement;
        if (activeEl.tagName !== 'INPUT' && activeEl.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    
    // Press '/' to focus terminal
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const activeEl = document.activeElement;
        if (activeEl.tagName !== 'INPUT' && activeEl.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const terminalInput = document.getElementById('terminal-input');
            if (terminalInput) {
                terminalInput.focus();
            }
        }
    }
});
