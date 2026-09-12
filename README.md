# 🍿 AbhiFlix — Netflix-Themed Engineering Portfolio

A cinematic, Netflix-inspired developer portfolio designed for recruiters and engineering teams. Built with Next.js 16, TypeScript, and Tailwind CSS, featuring full-bleed widescreen visuals, interactive project streams, and zero-backend form transmission.

---

## 🌟 Features

* **Cinematic Billboard Hero**: High-resolution, widescreen Netflix-style header with dynamic action triggers and responsive vignettes.
* **Stream-Ready Project Showcase**: Interactive card rows with horizontal snap-scrolling on mobile and grid view on desktop.
* **Rich Project Previews**: Detailed modals featuring architectural breakdowns, system features, and verified external repositories.
* **Direct Contact Transmission**: Asynchronous form routing using FormSubmit without server-side SMTP overhead.
* **Recruiter Asset Hub**: Integrated quick actions for live system demos, GitHub repositories, competitive programming handles, and resume downloads.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Form Transmission**: [FormSubmit](https://formsubmit.co/)
* **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```text
abhilash-portfolio/
├── frontend/
│   ├── app/
│   │   ├── globals.css         # Netflix color palette & custom scroll utilities
│   │   ├── layout.tsx          # Root layout and metadata configuration
│   │   └── page.tsx            # Main portfolio composite view
│   ├── components/
│   │   ├── Hero.tsx            # Billboard showcase with quick-action CTAs
│   │   ├── ProjectsRow.tsx     # Responsive cards & mobile snap-carousel
│   │   ├── ProjectModal.tsx    # Detailed architecture & feature modal
│   │   └── ContactSection.tsx  # Direct recruiter message transmission
│   ├── public/
│   │   ├── images/             # Hero billboard & project assets
│   │   └── resume.pdf          # Downloadable candidate resume
│   ├── package.json
│   └── tsconfig.json
└── README.md
