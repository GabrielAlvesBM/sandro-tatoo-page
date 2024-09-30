import React from 'react';
import Image from 'next/image';

export default function Sobre() {
    return (
        <>
            <h1 className="mb-10 font-black text-2xl text-center indent-2 sm:text-3xl md:text-left">Prazer, sou <span className="text-yellow">Sando Luz</span></h1>

            <section className='lg:flex lg:items-end'>
                <article>
                    <p className="mb-8 font-light">Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele. Com mais de 10 anos de experiência no mundo da tatuagem, dedico-me a transformar visões e emoções em arte corporal que expressa quem você é e o que você ama.</p>
                    <p className="mb-8 font-light">Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço atentamente os desejos e as histórias de meus clientes para que cada peça seja única e pessoal. Especializo-me em vários estilos, desde o delicado traço fino até composições mais robustas e coloridas, garantindo que cada design não só atenda, mas supere as expectativas.</p>
                    <p className="mb-8 font-light">Além da dedicação à arte, a segurança e o conforto são prioridades no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso quanto aos protocolos de higiene e segurança, garantindo uma experiência segura e confortável para todos.</p>
                    <p className="mb-8 font-light">Visite meu estúdio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajudá-lo a contar sua história de uma maneira única e eterna. Agende sua consulta e vamos juntos criar algo extraordinário!</p>

                    <h2 className="mb-4 font-island text-3xl text-center lg:text-left">Sandro Luz</h2>
                </article>
                
                <article className="relative h-[350px] translate-y-4 overflow-y-hidden lg:w-full lg:h-[60vh] lg:overflow-visible">
                    <Image className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[350px] lg:fixed lg:bottom-0 lg:h-[100%] lg:w-fit lg:translate-y-0 lg:object-cover'
                        src="/images/portrait-colored.png"
                        width={325}
                        height={325}
                        alt="Sandro Luz Portrait"
                    />
                </article>
            </section>
        </>
    );
}