import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-[#F9F9F9] text-[#2A254B]'>
        
        <main className="md:container mx-auto flex flex-col px-6 py-10 gap-4">
        
        <section className="w-full">
            <h1 className="text-3xl">
            Your shopping cart
            </h1>
        </section>

      <section className="w-full flex flex-col py-6 gap-2">
         <div className="w-full flex justify-around items-center gap-42">
          <p className='text-md'>Product</p>
          <p className='text-md'>Quantity</p>
          <p className='text-md'>Total</p>
         </div>

        </section>

        </main>
    </div>
  )
}

export default page