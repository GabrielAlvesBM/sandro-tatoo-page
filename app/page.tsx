import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Image className='hidden absolute top-[23%] left-12 -z-10 xl:block'
        src="/images/tatoo-bg.png" alt="Background Tatoo" width={1037} height={289}
      />

      <div className='absolute left-32 top-[35%] text-[3.7em] font-inter font-black text-blackGray'>
      <h1>INSPIRE-SE</h1>
      <h1>EXPRESSE-SE</h1>
      <h1 className='text-yellow'>TATUE-SE</h1>
      </div>

      <Image className='absolute right-[-30%] bottom-0 w-fit h-[85vh] -z-10 md:right-[6%] md:bottom-0'
        src="/images/portrait-mono.png" alt='Sandro Luz Portrait' width={370} height={650}
      />
    </>
  );
}
