# Portfolio Specification - Mohit S K

## Project Overview
- **Project Name**: Terminal Portfolio
- **Type**: Single-page interactive portfolio website
- **Core Functionality**: A unique, terminal-themed portfolio for a cybersecurity enthusiast that simulates a hacker terminal interface with interactive elements
- **Target Users**: Recruiters, potential clients, fellow developers, cybersecurity professionals

## UI/UX Specification

### Layout Structure

**Page Sections:**
1. **Terminal Hero** - Full-screen terminal with typing animation and matrix rain
2. **System Info** - About section styled as system diagnostics
3. **Skill Matrix** - Technical skills displayed as system capabilities
4. **Mission Log** - Experience and education timeline
5. **Arsenal** - Services/tools showcase
6. **Secure Channel** - Contact form styled as encrypted communication
7. **Footer** - System signature and social links

**Responsive Breakpoints:**
- Mobile: < 768px (stacked layout, smaller terminal font)
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Primary Background: #0a0a0a (near black)
- Terminal Background: #0d1117 (GitHub dark)
- Primary Text: #00ff41 (matrix green)
- Secondary Text: #008f11 (darker green)
- Accent: #00ff00 (bright green)
- Highlight: #39ff14 (neon green)
- Error: #ff3333 (red for errors)
- Warning: #ffaa00 (amber)
- Link Color: #58a6ff (blue for links)
- Card Background: rgba(0, 255, 65, 0.05)
- Border: rgba(0, 255, 65, 0.2)

**Typography:**
- Primary Font: 'Fira Code', 'Source Code Pro', monospace
- Hero Title: 3rem (48px)
- Section Titles: 2rem (32px)
- Body Text: 1rem (16px)
- Terminal Text: 0.9rem (14px)
- Line Height: 1.6

**Spacing System:**
- Section Padding: 80px vertical
- Container Max Width: 1200px
- Card Padding: 30px
- Element Margins: 20px

**Visual Effects:**
- Matrix rain canvas animation in background
- Scanline overlay effect
- Text glow effect (text-shadow)
- Blinking cursor animation
- Typing effect for hero text
- Glitch effect on hover for buttons
- Fade-in animations on scroll
- Card hover lift effect with glow

### Components

**1. Terminal Window**
- Dark frame with title bar
- Traffic light buttons (close, minimize, maximize)
- Command prompt: `visitor@portfolio:~$`
- Input field for commands

**2. Matrix Rain**
- Canvas-based falling code
- Green characters on black background
- Varying speeds for depth effect

**3. Skill Bars**
- Horizontal progress bars
- Percentage display
- Glowing effect
- Animated on scroll

**4. Cards**
- Glassmorphism with green tint
- Border glow on hover
- Icon + title + description
- Hover lift effect

**5. Contact Form**
- Terminal-style input fields
- Encrypted message indicator
- Send button with loading state

**6. Navigation**
- Fixed sidebar on desktop
- Bottom bar on mobile
- Terminal-style links
- Active state indicator

## Functionality Specification

### Core Features

**1. Terminal Command System**
- Users can type commands: help, about, skills, contact, clear
- Command suggestions appear
- Auto-complete functionality

**2. Matrix Rain Animation**
- Continuous falling code effect
- Performance optimized (requestAnimationFrame)
- Can be toggled on/off

**3. Typing Animation**
- Hero text types out letter by letter
- Multiple phrases in sequence
- Blinking cursor at end

**4. Scroll Animations**
- Elements fade in on scroll
- Staggered animation delays
- Intersection Observer based

**5. Interactive Elements**
- Hover effects on all clickable elements
- Keyboard navigation support
- Smooth scroll to sections

**6. Contact Form**
- Client-side validation
- Animated submission
- Success/error feedback

### User Interactions
- Click navigation links → smooth scroll to section
- Type in terminal → see command response
- Hover cards → lift and glow effect
- Scroll → trigger reveal animations
- Submit form → show feedback message

### Edge Cases
- Mobile: Matrix rain disabled for performance
- No JavaScript: Basic content still visible
- Slow connection: Fallback fonts

## Content

### Hero Section
```
> initializing portfolio...
> welcome, visitor
> MOHIT S K
> Web Developer | Cybersecurity Enthusiast | Designer
> Type 'help' for available commands
```

### About (System Info)
```
> SYSTEM DIAGNOSTIC COMPLETE

Name: Mohit S K
Location: Tamil Nadu, India
Education: B.Tech CSE @ SRMIST (2023-2027)
Interests: Cybersecurity, Ethical Hacking, Web Development

> Past missions include:
- Full Stack Development
- Penetration Testing
- PC Building & Customization
- Security Research
```

### Skills
```
> LOADING SKILL MATRIX...
- HTML/CSS: 90%
- JavaScript: 75%
- Python: 70%
- Web Security: 65%
- Penetration Testing: 60%
- Node.js: 65%
```

### Experience
```
> MISSION LOG RETRIEVED...

[2024] Full Stack Developer - Freelancing
[2024] Cybersecurity Intern - Prompt InfoTech
[2024] PC Building Specialist - Self-employed
```

### Education
```
> ACADEMIC RECORDS...

[2023-2027] B.Tech Computer Science & Engineering
             SRM Institute of Science and Technology
[2022-2023] Senior Secondary
             Tagore Public School
[2010-2020] Secondary School
             Maharishi International Residential School
```

### Services (Arsenal)
```
> AVAILABLE TOOLS...

1. Web Development
2. Cybersecurity Consulting
3. PC Building
4. Bug Bounty Hunting
5. Penetration Testing
```

### Contact
```
> ESTABLISHING SECURE CHANNEL...

Send encrypted message to initiate contact.
Email: mohit17717@gmail.com
Phone: +91 7418634741
```

## Acceptance Criteria

### Visual Checkpoints
- [ ] Matrix rain animation runs smoothly
- [ ] Terminal window displays correctly with traffic lights
- [ ] All text has green glow effect
- [ ] Cards have glassmorphism effect with green tint
- [ ] Scroll animations trigger at correct positions
- [ ] Mobile layout is responsive and functional
- [ ] Hover effects work on all interactive elements

### Functional Checkpoints
- [ ] Terminal accepts commands and responds
- [ ] Typing animation completes without errors
- [ ] Navigation scrolls smoothly to sections
- [ ] Contact form validates inputs
- [ ] All external resources load correctly
- [ ] No console errors on page load

### Performance Checkpoints
- [ ] Page loads in under 3 seconds
- [ ] Animations run at 60fps
- [ ] Matrix rain doesn't cause lag
- [ ] Images are optimized
