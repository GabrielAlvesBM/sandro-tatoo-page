import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sandro Luz Tatoo",
  description: "Página demonstrativa do tatuador Sandro Luz.",
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
        <a href="/" className="leading-5">Sandro <span className="text-yellow">Luz</span><br></br>Tatoo<br></br>Shop</a>

        <nav>
          <ul className="flex justify-between items-center gap-4 tracking-wide">
            <a href="/servicos" className="py-0.5 px-2 hover:underline">Serviços</a>
            <a href="/sobre" className="py-0.5 px-2 hover:underline">Sobre Mim</a>
            <a href="/contato" className="py-0.5 px-2 hover:underline">Contato 
              <div className="absolute text-[0.7rem] font-inter text-blackGray tracking-normal pointer-events-none" style={{ right: '90px' }}>
                <Image className='inline translate-y-[-1px]' src="/images/icon-whatsapp.png" alt='Whatsapp Icon' width={16} height={16} />(+55 11) 99999 9999
              </div>
            </a>
          </ul>
        </nav>
        </header>

        <main className="mx-10 md:mx-20 md:my-16">
          {children}
        </main>
        
        <footer className="fixed bottom-0 w-full p-4 bg-black">
        <ul className="flex gap-6 ml-36 text-[0.7rem] text-blackGray">
          <li className="relative before:content-[''] before:absolute before:right-[-15px] before:top-1/2 before:-translate-y-1/2 before:rounded-full before:size-[5px] before:bg-yellow">Sandro Luz Tatoo Shop</li>
          <li className="relative before:content-[''] before:absolute before:right-[-15px] before:top-1/2 before:-translate-y-1/2 before:rounded-full before:size-[5px] before:bg-yellow">Rua Limoeiro, 1000 - Catalão - SP</li>
          <li><Image className='inline translate-y-[-1px]' src="/images/icon-whatsapp.png" alt='Whatsapp Icon' width={16} height={16} />(+55 11) 99999 9999</li>
        </ul>
        </footer>
      </body>
    </html>
  );
}
