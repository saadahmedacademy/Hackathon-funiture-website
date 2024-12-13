import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <main className='w-full'>
      <section className="w-full lg:h-[209px] h-[50px] md:h-[105px] relative">
        <Image
          src="/productList.svg"
          alt="Banner showcasing all products"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </section>

      <section className="container mx-auto flex justify-between items-center py-4 px-2 ">
        <div className="flex items-center gap-3"> 
          <div className="flex items-center gap-2">
            </div
        </div>
      </section>
    </main>
  );
}
