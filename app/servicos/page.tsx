import type { Metadata } from 'next';
import Article from './Article';

export const metadata: Metadata = {
    title: "Serviços",
    description: "Serviços oferecidos por Sandro Luz.",
  };

export default function Servicos() {
    const articles = [
        {
            title   : "Tatuagens Personalizadas",
            content : "Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos."
        },
        {
            title   : "Cover-Up",
            content : "Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original."
        },
        {
            title   : "Restauração",
            content : "Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez."
        },
        {
            title   : "Henna",
            content : "Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses."
        },
    ];

    return(
        <>
            <h1 className="text-yellow font-black text-3xl text-center indent-2 md:text-left">Serviços</h1>

            <section className='grid flex-col flex-wrap gap-[76px] max-w-[300px] mx-auto my-[11vh] mt-5 mb-20 text-center md:grid-cols-2 md:max-w-none lg:flex lg:flex-row lg:flex-nowrap lg:my-[14vh] lg:text-left lg:max-w-none'>
                {articles.map((article, index) => (
                  <Article key={index} title={article.title} content={article.content}/>
                ))}
            </section>
        </>
    );
}