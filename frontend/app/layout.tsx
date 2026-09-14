import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Palem Ganga Abhilash Reddy | Full-Stack Architect & ML Engineer',
  description:
    'Portfolio of Palem Ganga Abhilash Reddy (AbhiFlix). Full-Stack Developer & Machine Learning Engineer specializing in React, Next.js, Node.js, and AI systems. Creator of Sadhana Hostel Portal.',
  keywords: [
    'Abhilash Reddy',
    'Palem Ganga Abhilash Reddy',
    'Abhilash Reddy Portfolio',
    'AbhiFlix',
    'Full-Stack Developer India',
    'Machine Learning Engineer',
    'Sadhana Hostel Management',
    'GITAM University',
    'Next.js Portfolio'
  ],
  authors: [{ name: 'Palem Ganga Abhilash Reddy', url: 'https://abhiflix.vercel.app' }],
  creator: 'Palem Ganga Abhilash Reddy',
  metadataBase: new URL('https://abhiflix.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Palem Ganga Abhilash Reddy | Full-Stack Architect & ML Engineer',
    description:
      'Explore AbhiFlix: The Netflix-themed engineering portfolio of Palem Ganga Abhilash Reddy featuring production web architectures and machine learning systems.',
    url: 'https://abhiflix.vercel.app',
    siteName: 'AbhiFlix — Palem Ganga Abhilash Reddy',
    images: [
      {
        url: '/images/kerala.jpeg',
        width: 1200,
        height: 630,
        alt: 'Palem Ganga Abhilash Reddy Portfolio Banner',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palem Ganga Abhilash Reddy | Software Engineer',
    description: 'Full-Stack Developer & ML Engineer portfolio streaming live systems.',
    images: ['/images/kerala.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "SD2bK2MHpmkqEluexwbIpeLx_68Dy-AzTWj3HScTSew",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Palem Ganga Abhilash Reddy',
    alternateName: ['Abhilash Reddy', 'Abhi'],
    url: 'https://abhiflix.vercel.app',
    image: 'https://abhiflix.vercel.app/images/kerala.jpeg',
    jobTitle: 'Full-Stack Developer & Machine Learning Engineer',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'GITAM Deemed to be University',
    },
    sameAs: [
      'https://www.linkedin.com/in/palem-ganga-abhilash-reddy-57981936b',
      'https://github.com/abhilashworks',
      'https://leetcode.com/u/GB2024204147/',
      'https://www.sadhanahostel.in/'
    ],
    knowsAbout: [
      'Full-Stack Web Development',
      'Machine Learning',
      'React.js',
      'Next.js',
      'Node.js',
      'Python',
      'Natural Language Processing',
      'MongoDB'
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B0B0E] text-white selection:bg-[#E50914] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}