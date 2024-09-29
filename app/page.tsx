import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image className='hidden absolute top-[23%] left-12 -z-10 xl:block'
        src="/images/tatoo-bg.png" alt="Background Tatoo" width={1037} height={289}
      />

      <div className='absolute left-6 top-[35%] text-[2.7em] font-inter font-black text-blackGray sm:left-32 sm:text-[3.7em]'>
      <h1>INSPIRE-SE</h1>
      <h1>EXPRESSE-SE</h1>
      <h1 className='text-yellow'>TATUE-SE</h1>
      </div>

      <Image className='fixed right-0 bottom-0 w-fit h-[75vh] -z-10 translate-x-[110px] sm:right-[13%] sm:h-[85vh]'
        src="/images/portrait-mono.png" alt='Sandro Luz Portrait' width={370} height={650}
      />
    </>
  );
}