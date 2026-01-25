# Param Sanganak Saralam

[![React](https://img.shields.io/badge/React-19.2.3-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06b6d4?logo=tailwindcss)](https://tailwindcss.com/)

A modern, user-friendly web documentation platform for **PARAM Sanganak**, IIT Kanpur's High-Performance Computing (HPC) facility.

> **"Saralam"** (सरलम्) means "simple/easy" in Sanskrit — reflecting the project's goal to simplify complex HPC concepts for users.

---

## Our Mission

This project is an effort to make using HPC facilities easier and facilitate help in the research journey of researchers in our IIT Kanpur community.

High-Performance Computing can be intimidating for newcomers — complex commands, unfamiliar schedulers, and scattered documentation can create barriers to productive research. **Param Sanganak Saralam** aims to break down these barriers by providing a single, accessible, and well-organized resource for everyone.

We have tried to accumulate as much information as possible from official documentation and compiled it in one place, transforming it into a simplified, modern, and accessible learning resource.

---

## About

Param Sanganak Saralam provides comprehensive guides for users to effectively utilize PARAM Sanganak's computing power — from absolute beginners learning Linux basics to advanced users optimizing parallel jobs.

### Key System Specifications (Documented)

| Specification | Value |
|--------------|-------|
| Peak Performance | 1.66 PetaFLOPS |
| Compute Cores | 15,000+ |
| Compute Nodes | 315 |
| Parallel Storage | 2.2 PiB |
| CPU Nodes | 150 |
| High-Memory Nodes | 78 |
| GPU-Ready Nodes | 64 |
| GPU Nodes | 20 |

> **Disclaimer:** This is an unofficial documentation resource. For official information, please refer to the [PARAM Sanganak official website](https://www.iitk.ac.in/cc/param-sanganak).

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2.3** | Frontend framework |
| **TypeScript 5.9.3** | Type safety |
| **Vite 7.2.4** | Build tool |
| **Tailwind CSS 3.4.17** | Styling |
| **Shiki 3.20.0** | Syntax highlighting |
| **Lucide React** | Icons |
| **React Router DOM 7.10.1** | Routing |
| **Vercel Analytics** | Performance monitoring |

---

## Project Structure

```
/
├── src/
│   ├── pages/              # Documentation pages (11 pages)
│   │   ├── Home.tsx
│   │   ├── LinuxBasics.tsx
│   │   ├── Tutorial.tsx
│   │   ├── CoreConcepts.tsx
│   │   ├── AccountManagement.tsx
│   │   ├── RunningJobs.tsx
│   │   ├── Applications.tsx
│   │   ├── Debugging.tsx
│   │   ├── BestPractices.tsx
│   │   ├── UsagePolicy.tsx
│   │   └── Support.tsx
│   │
│   ├── components/         # Reusable UI components (17 components)
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Alert.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ...
│   │
│   ├── lib/                # Utilities
│   │   └── highlighter.ts
│   │
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
│
├── public/                 # Static assets & diagrams
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json             # Deployment config
```

---

## Documentation Pages

| Page | Description |
|------|-------------|
| **Home** | Landing page with system specs and learning paths |
| **Linux & MPI Basics** | Prerequisites: Linux fundamentals, SSH, Bash scripting, MPI basics |
| **Getting Started Tutorial** | Step-by-step walkthrough from account setup to job submission |
| **Core Concepts** | Hardware architecture, storage systems, network, software stack |
| **Account Management** | Account setup, SSH keys, 2FA, password management |
| **Running Jobs** | SLURM scheduler guide, partitions, job submission & monitoring |
| **Applications** | Module system, SPACK, pre-installed software, custom installations |
| **Debugging** | Troubleshooting techniques, performance profiling, common errors |
| **Best Practices** | Performance optimization, parallel programming, resource utilization |
| **Usage Policy** | System guidelines, fair use principles, security requirements |
| **Support** | Help resources, FAQs, contact information |

---

## Features

- **Responsive Design** — Mobile, tablet, and desktop support
- **Dark/Light Theme** — System preference detection + manual toggle
- **Syntax Highlighting** — 30+ languages (Bash, Python, C/C++, Fortran, YAML, etc.)
- **Interactive Code Blocks** — Copy-to-clipboard with visual feedback
- **Platform-Specific Tabs** — OS-specific instructions
- **Accessibility** — Keyboard navigation, ARIA labels, semantic HTML
- **Alerts & Callouts** — Info, warning, and success variants
- **Visual Diagrams** — Architecture, filesystem, job lifecycle diagrams

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anujsngh/ParamSanganakSaralam.git

# Navigate to root directory
cd ParamSanganakSaralam

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview the production build locally |

---

## Deployment

The project is configured for deployment on **Vercel**:

- `vercel.json` handles SPA routing with URL rewrites
- Analytics and Speed Insights are enabled
- Production builds are optimized and minified

---

## Contributing

**We need your help!**

While we have tried to compile as much information as possible, there may be gaps in the documentation. We request everyone in their capacity to contribute positively to make this documentation complete and more helpful for the community.

### How You Can Help

- **Report Issues** — Found incorrect information or broken links? Open an issue!
- **Add Missing Content** — Know something that's not documented? Submit a PR!
- **Improve Clarity** — If something is confusing, help us explain it better
- **Share Your Experience** — Tips, tricks, and workflows that helped you
- **Fix Typos** — Every correction helps!

### Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-new-section`)
3. Make your changes
4. Commit with clear messages
5. Push to your fork
6. Open a Pull Request

All contributions, big or small, are greatly appreciated. Together, we can build a comprehensive resource that helps every researcher in their HPC journey.

---

## Disclaimer

This is an **unofficial** documentation resource created to help users learn and use PARAM Sanganak effectively. The information presented here has been compiled from official sources to the best of our ability, but may contain errors or outdated information.

For official documentation, policies, and support, please refer to the [IIT Kanpur Computer Centre](https://www.iitk.ac.in/cc/).

---

## Acknowledgments

This project exists because of the collaborative spirit of the IIT Kanpur research community. Special thanks to:

- Academic and Career Council, IIT Kanpur for their support and encouragement
- The Param Sanganak team for their valuable input and feedback
- Prof. Preeti Malakar for her guidance and support
- [Kunal Jolly Saxena](https://github.com/Kunaljolly) for his collaboration
- Prof. Priyanka Bagade for her support in facilitating access to the HPC facility
- The researchers who provided feedback and suggestions
- All contributors who will help improve this documentation in future

---

Made with care for the PARAM Sanganak user community at IIT Kanpur
