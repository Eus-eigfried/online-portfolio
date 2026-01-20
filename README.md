# Kyle Vincent T. Alcantara - Online Portfolio

A modern, responsive portfolio website built with React JS, featuring light/dark mode, smooth animations, and a professional design with proper separation of concerns.

## ✨ Features

-   **Welcome Modal** - Legal disclaimer before accessing the site
-   **Light/Dark Mode** - Toggle between light green and dark purple themes
-   **Responsive Design** - Mobile-friendly layout
-   **Smooth Animations** - Fade-in effects on scroll with Framer Motion
-   **Interactive Sections** - Hover effects and glow effects
-   **Back to Top Button** - Easy navigation
-   **PDF Previews** - View traditional and modern resumes
-   **Social Media Integration** - Links to Facebook, LinkedIn, Indeed, and Jobstreet

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── assets/            # Add your images/PDFs here
├── src/
│   ├── components/        # React components (organized in folders)
│   │   ├── Header/        # Header with theme toggle
│   │   ├── WelcomeModal/  # Legal disclaimer modal
│   │   ├── Profile/       # Profile ID card section
│   │   ├── ResumeSection/ # PDF resume viewer
│   │   ├── ContactInfo/   # Contact information
│   │   ├── Education/     # Educational background
│   │   ├── WorkExperience/# Professional experience
│   │   ├── Skills/        # Skills with progress bars
│   │   ├── Hobbies/       # Personal interests
│   │   ├── PreviousWorks/ # Project showcase
│   │   └── Footer/        # Footer with tech logos
│   ├── contexts/          # React Context providers
│   │   └── ThemeContext.jsx
│   ├── data/              # Separated data files
│   │   ├── profileData.js
│   │   ├── contactData.js
│   │   ├── educationData.js
│   │   ├── workExperienceData.js
│   │   ├── skillsData.js
│   │   ├── hobbiesData.js
│   │   ├── projectsData.js
│   │   └── resumeData.js
│   ├── utils/             # Utility functions
│   │   └── iconUtils.jsx
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── index.js           # Entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1.  Navigate to the portfolio directory:

```bash
cd portfolio
```

2.  Install dependencies:

```bash
npm install
```

3.  Start the development server:

```bash
npm start
```

4.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Customization

### Update Personal Information

All data is separated in the `src/data/` directory:

1.  **Profile**: Edit `src/data/profileData.js`
    -   Full name, title, birthdate
    -   Social media links
2.  **Contact**: Edit `src/data/contactData.js`
    -   Phone number, address, email
3.  **Education**: Edit `src/data/educationData.js`
    -   Schools, courses, graduation years
4.  **Work Experience**: Edit `src/data/workExperienceData.js`
    -   Job titles, companies, dates, descriptions
5.  **Skills**: Edit `src/data/skillsData.js`
    -   Skill names and percentages
6.  **Hobbies**: Edit `src/data/hobbiesData.js`
    -   Hobby names and descriptions
7.  **Projects**: Edit `src/data/projectsData.js`
    -   Project titles, descriptions, and what you learned

### Add Your Assets

1.  **Profile Photo**: Place in `public/assets/profile.jpg`
2.  **Resume PDFs**: Place in `public/assets/`
    -   `traditional-resume.pdf`
    -   `modern-resume.pdf`

### Update Icons

Icons are managed centrally in `src/utils/iconUtils.jsx`. Add new icons to the import and the icons object.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment to GitHub Pages

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### Step 3: Deploy

```bash
npm run deploy
```

Your site will be available at: `https://yourusername.github.io/portfolio`

## 🛠 Technologies Used

-   **React JS** - Frontend framework (JSX)
-   **Framer Motion** - Animation library
-   **Lucide React** - Icon library
-   **CSS3** - Styling with custom themes

## 📝 Key Architecture Decisions

### Separation of Concerns

-   **Data Layer**: All content data is in `src/data/` files
-   **Components**: Each section is a separate component in its own folder
-   **Utilities**: Reusable functions in `src/utils/`
-   **Context**: Global state (theme) managed with React Context

### JSX Files

All components use `.jsx` extension for better code highlighting and to clearly indicate JSX usage.

### Component Organization

Each component has:

-   `ComponentName.jsx` - Component logic
-   `ComponentName.css` - Component styles
-   `index.js` - Export file for clean imports

## 🎯 Sections Overview

1.  **Profile** - ID card-style display with social links
2.  **Resumes** - Side-by-side PDF previews with modal viewer
3.  **Contact Information** - Phone, address, and email
4.  **Education** - Academic history from elementary to college
5.  **Work Experience** - Professional experience with cover photo style
6.  **Skills** - Progress bars with percentages
7.  **Hobbies** - Personal interests with descriptions
8.  **Previous Works** - Project showcase with detail modals

## 📱 Responsive Breakpoints

-   **Desktop**: 1200px and above
-   **Tablet**: 768px - 1199px
-   **Mobile**: 320px - 767px

## 🎨 Theme System

### Light Mode

-   Primary: `#22c55e` (green)
-   Background: `#f0fdf4` (light green)
-   Text: `#166534` (dark green)

### Dark Mode

-   Primary: `#a855f7` (purple)
-   Background: `#1a0a2e` (dark purple)
-   Text: `#d8b4fe` (light purple)

## 🐛 Troubleshooting

### Common Issues

**Icons not displaying:**

-   Check `src/utils/iconUtils.jsx`
-   Verify icon names match

**Theme not working:**

-   Ensure `ThemeProvider` wraps the app
-   Check CSS class names (`.app.dark-mode`)

**Data not showing:**

-   Verify data files in `src/data/`
-   Check imports in components

## 📄 License

This project is for personal use. All content is the property of Kyle Vincent T. Alcantara.

## 🤝 Support

For questions or issues, please contact through the provided contact information on the portfolio.

* * *

**Built with React JS, Framer Motion, and Lucide Icons** 🚀