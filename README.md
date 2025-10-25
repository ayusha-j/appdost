# 🚀 AppDost - Complete IT Solution

A modern, responsive website for AppDost, built with Next.js 14, featuring stunning animations, a beautiful dark theme, and a seamless user experience.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS with custom animations
- **UI Components:** Custom built with Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono
- **Build Tool:** Turbopack (via Next.js 14)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ayusha-j/appdost.git
cd appdost/app-dost
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
app-dost/
├── app/
│   ├── favicon.ico        # Website favicon
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata and providers
│   └── page.tsx           # Main page component
├── components/            # Reusable UI components
│   ├── AboutAppDostSection.tsx  # About section component
│   ├── AnimatedBackground.tsx   # Dynamic background component
│   ├── DevelopmentProcess.tsx   # Development workflow section
│   ├── Footer.tsx               # Footer component
│   ├── HeroSection.tsx          # Hero section with call-to-action
│   ├── Navbar.tsx               # Navigation bar
│   ├── ProjectsSection.tsx      # Portfolio projects showcase
│   └── ServicesSection.tsx      # Services carousel
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
    └── images/            # Image assets
```
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── HeroSection.tsx     # Hero with floating cards & stats
│   ├── DevelopmentProcess.tsx  # 4-step process cards
│   ├── ServicesSection.tsx # 6 service cards with hover effects
│   ├── ProjectsSection.tsx # Featured & open source projects
│   └── Footer.tsx          # Footer with contact info
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Sections

### 1. **Hero Section**
- Animated gradient background
- Floating cards with project stats
- Call-to-action buttons
- Feature highlights
- Stats counter (Web Projects, Android Apps, CRM, Founded Year)

### 2. **Development Process**
- 4-step process cards
- Discovery & Planning
- Design & Prototype
- Development & Testing
- Deployment & Support

### 3. **Services**
- Android App Development
- Web Development
- UI/UX Development
- CRM Software
- Cloud Solutions
- Cybersecurity

### 4. **Projects**
- Featured Projects (BEU Mate, DevsRequest, The Weddings Chapter)
- Open Source Projects (DeepFake Detection, Neobot, EduTools)

### 5. **Footer**
- Company information
- Quick links
- Contact details
- Social media links

## 🎭 Animations

- **Floating Cards:** Smooth up-down motion on hero cards
- **Scroll Animations:** Elements fade in as you scroll
- **Hover Effects:** Scale, rotate, and color transitions
- **Gradient Animation:** Animated background gradients
- **Stagger Effects:** Sequential animations for lists

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:
```bash
vercel
```

## 📝 Customization

### Colors
Edit `app/globals.css` to change gradient colors and theme.

### Content
Update component files in `components/` to modify text, images, and data.

### Animations
Adjust Framer Motion parameters in component files for different animation effects.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

