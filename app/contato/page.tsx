import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Contato",
    description: "Entre em Contato Com Sandro Luz.",
};

export default function Contato() {
    return (
        <>
            <h1 className='mb-10 font-black text-2xl text-center indent-2 sm:text-3xl md:text-left'>Entre em <span className='text-yellow'>Contato</span></h1>

            <section className='flex flex-col items-center gap-11 md:items-start md:max-w-[300px]'>
                <div className='text-center md:text-left'>
                    <p className='mb-2'>Clique no botão abaixo e envie uma mensagem.</p>
                    <p>Vamos conversar!</p>
                </div>

                <Link href="https://wa.me/5511991111111/?text=Olá,%20Gostaria%20de%20marcar%20um%20horário!" className='flex items-center gap-5 mb-24 py-3 px-5 border-b-4 border-btnShadow rounded-[5px] bg-btn'>
                    <Image
                        src="/images/icon-whatsapp-big.png"
                        alt='Whatsapp Icon'
                        width={35}
                        height={35}
                    />
                    <div className='p-1'>
                        <p className='text-lg font-medium leading-none'>Enviar Whatsapp</p>
                        <p className=' text-left text-xs text-blackGray'>(+55 11) 99711 1111</p>
                    </div>
                </Link>
            </section>

            <Image className='hidden lg:block absolute top-1/2 translate-y-[-50%] right-0 left-[44%] w-[47%]'
                src="/images/tatoo-contato.png"
                alt='People Making Tatoo'
                width={500}
                height={250}
            />
        </>
    );
}