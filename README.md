# Portfolio Website - Nanda Kishore Manne

A modern, professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Showcasing the work, skills, and achievements of Nanda Kishore Manne - Full-Stack Web Developer and Innovation Enthusiast.

## 🚀 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: Beautiful transitions and animations using Framer Motion
- **Interactive DSA Visualizer**: Step-by-step visualization of data structures and algorithms
- **Competitive Coding Profiles**: Showcase your profiles on LeetCode, Codeforces, CodeChef, and more
- **Contact Form**: Integrated Email.js for sending messages
- **Modern UI/UX**: Glassmorphism effects, hover animations, and smooth scrolling
- **Startup Page**: Separate dedicated page for startup journey with green/nature theme
- **Dark Theme**: Professional navy blue and cyan color scheme

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Email**: Email.js
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up Email.js (optional, for contact form):
   - Sign up at [Email.js](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the Contact component (`app/components/Contact.tsx`) with your credentials:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       from_name: data.name,
       from_email: data.email,
       message: data.message,
     },
     'YOUR_PUBLIC_KEY'
   );
   ```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── DSAVisualizer.tsx
│   │   ├── CompetitiveCoding.tsx
│   │   ├── Experience.tsx
│   │   ├── Certificates.tsx
│   │   ├── Work.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── startup/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── assets/
│       ├── images/
│       ├── certificates/
│       └── logos/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update your personal information:
- **Hero Section**: `app/components/Hero.tsx`
- **About Section**: `app/components/About.tsx`
- **Contact Info**: `app/components/Contact.tsx`
- **Social Links**: `app/components/Footer.tsx`

### Add Projects

Update the `projects` array in `app/components/Work.tsx`:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description',
    longDescription: 'Detailed description...',
    techStack: ['Tech1', 'Tech2'],
    githubLink: 'https://github.com/...',
    liveLink: 'https://your-project.com',
    image: '/assets/images/project.jpg',
  },
];
```

### Add Certificates

Update the `certificates` array in `app/components/Certificates.tsx`:

```typescript
const certificates = [
  {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    description: 'Certificate description',
    credentialLink: 'https://...',
    image: '/assets/certificates/cert.jpg',
  },
];
```

### Add Resume

Place your resume PDF in `public/assets/resume.pdf` and update the path in `app/components/About.tsx` if needed.

### Update Competitive Coding Profiles

Update the `platforms` array in `app/components/CompetitiveCoding.tsx`:

```typescript
const platforms: CodingPlatform[] = [
  {
    name: 'LeetCode',
    icon: '💻',
    profileUrl: 'https://leetcode.com/your-username',
    username: 'your-username',
    problemsSolved: '150+',
    rank: 'Top 15%',
    badges: '3 Badges',
    color: 'from-orange-500/20 to-orange-600/20',
  },
  // Add more platforms...
];
```

**Available fields:**
- `name`: Platform name (e.g., 'LeetCode', 'Codeforces')
- `icon`: Emoji or icon for the platform
- `profileUrl`: Link to your profile on the platform
- `username`: Your username/handle
- `rating`: Your current rating (e.g., 'Expert', '3★')
- `problemsSolved`: Number of problems solved
- `rank`: Your rank or position
- `badges`: Number of badges earned
- `color`: Tailwind gradient classes for the card background

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## 📝 License

This project is private and all rights are reserved.

## 👨‍💻 Author

**Nanda Kishore Manne**
- Full-Stack Web Developer
- Node.js | Web3 | MongoDB
- Innovation Enthusiast
- KL University, India

---

Built with ❤️ using Next.js and Tailwind CSS