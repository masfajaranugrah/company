
import "@/public/assets/css/vendors.bundle.css"
import "@/public/assets/css/portfolio.css"

import "@/node_modules/react-modal-video/css/modal-video.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dev Dream | Joki Proyek IT, Aplikasi Mobile & Website Profesional",
  description:
    "Butuh joki proyek IT atau jasa buat aplikasi mobile & website? Dev Dream hadir untuk bantu Anda menyelesaikan proyek coding, skripsi, hingga pengembangan website secara profesional dan terpercaya.",
  keywords: [
    "joki proyek",
    "joki proyek IT",
    "joki coding",
    "jasa joki tugas akhir",
    "jasa joki skripsi",
    "jasa pembuatan aplikasi mobile",
    "jasa buat aplikasi android",
    "jasa website profesional",
    "dev dream",
    "jasa buat web murah",
    "jasa freelancer IT",
    "jasa IT terbaik",
    "joki aplikasi mobile",
    "joki tugas coding mahasiswa"
  ],
  authors: [{ name: "Dev Dream", url: "https://www.devdream.my.id" }],
  creator: "Dev Dream Team",
  publisher: "Dev Dream",
  robots: "index, follow",
  icons: {
    icon: "/assets/imgs/logo/icon.jpeg",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Dev Dream | Joki Proyek, Aplikasi Mobile & Website Profesional",
    description:
      "Dev Dream menyediakan layanan joki proyek IT, aplikasi mobile, dan jasa pembuatan website profesional untuk mahasiswa, UMKM, dan startup. Garansi aman dan cepat.",
    url: "https://www.devdream.my.id",
    siteName: "Dev Dream - Joki Proyek & Pengembangan Aplikasi",
    type: "website",
    images: [
      {
        url: "https://www.devdream.my.id/assets/imgs/logo/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Jasa Joki Proyek, Aplikasi Mobile & Web Dev - Dev Dream",
      },
    ],
  },
  
  metadataBase: new URL("https://www.devdream.my.id"),
  alternates: {
    canonical: "https://www.devdream.my.id",
  },
  category: "Jasa IT, Jasa Pembuatan Aplikasi, Joki Proyek, Website Developer",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
             <head>
                <meta name="google-site-verification" content="MYXdgUHJRuqNKWic4Chubn51VM7Q5PlnYN_5QBqKYc" />
            </head>
            <body>{children}</body>
        </html>
    )
}
