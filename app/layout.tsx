import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sandro Luz",
  description: "Página demonstrativa do tatuador Sandro Luz.",
  keywords: "tatuagens, serviços de tatuagem, Sandro Luz, arte corporal",
  authors: [{name: "Gabriel Alves"}],
  openGraph: {
    title: "Sandro Luz | Tatoo",
    description: "Contacte os serviços oferecidos por Sandro Luz em tatuagens personalizadas.",
    url: "https://localhost:3000",
    images: [{
      url: "https://localhost:3000/images/portrait-colored.png",
      width: 800,
      height: 600,
      alt: "Perfil do Sandro",
    }],
    siteName: "Sandro Luz Tatoo Shop",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="{inter.className} bg-lightBlack selection:bg-selectedColor selection:text-black cursor-default overflow-x-hidden"
      >
        <header className="flex flex-col justify-between items-start gap-2 mx-10 mt-10 mb-20 font-londrina text-2xl md:flex-row md:items-center md:mx-20 md:mb-4">
        <Link href="/" className="home leading-5">Sandro <span className="text-yellow">Luz</span><br></br>Tatoo<br></br>Shop</Link>

        <nav>
          <ul className="flex justify-between items-center gap-4 tracking-wide text-xl sm:text-2xl">
            <li><Link href="/servicos" className="py-0.5 px-2 hover:underline">Serviços</Link></li>
            <li className="text-center"><Link href="/sobre" className="py-0.5 px-2 hover:underline">Sobre Mim</Link></li>
            <li><Link href="/contato" className="py-0.5 px-2 hover:underline">Contato</Link></li>
          </ul>
          <div className="hidden absolute top-[75px] right-[87px] text-[0.7rem] font-inter text-blackGray tracking-normal text-nowrap pointer-events-none md:block">
                <Image className='inline translate-y-[-1px]' src="/images/icon-whatsapp.png" alt='Whatsapp Icon' width={16} height={16} />(+55 11) 99999 9999
          </div>  
        </nav>
        </header>

        <main className="mx-10 md:mx-20 md:my-16">
          {children}
        </main>
        
        <footer className="fixed bottom-0 w-full p-3 bg-black sm:p-4">
        <ul className="flex gap-6 ml-3 text-[0.55rem] text-blackGray md:ml-36 sm:text-[0.7rem]">
          <li className="relative before:content-[''] before:absolute before:right-[-15px] before:top-1/2 before:-translate-y-1/2 before:rounded-full before:size-[5px] before:bg-yellow">Sandro Luz Tatoo Shop</li>
          <li className="relative before:content-[''] before:absolute before:right-[-15px] before:top-1/2 before:-translate-y-1/2 before:rounded-full before:size-[5px] before:bg-yellow">Rua Limoeiro, 1000 - Catalão - SP</li>
          <li><Image className='inline translate-y-[-1px]' src="/images/icon-whatsapp.png" alt='Whatsapp Icon' width={16} height={16} />(+55 11) 99999 9999</li>
        </ul>
        </footer>
        <Script src="/scripts/navClicked.js" strategy='lazyOnload'/>
      </body>
    </html>
  );
}
