import Image from "next/image";
import React from "react";
import newCeramic from "@/jsondata/newCeramic.json";

export const NewCeremics = () => {
  return (
    <main className="md:container md:mx-auto w-full flex flex-col gap-4 py-24">
      <p className="text-2xl md:text-3xl font-sans">New ceramics</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4">
        {newCeramic.map((ceramic) => (
          <div className="flex flex-col gap-3 text-gray-600">
            <Image
              src={`${ceramic.img}`} 
              alt={ceramic.title}
              width={305}
              height={375}
            />
            <p className="text-xl">{ceramic.title}</p>
            <p className="text-xl">{ceramic.price}</p>
          </div>
        ))}
      </div>

      <div className="pt-6 mx-auto">
        <button className="px-6 py-2 text-gray-600 border bg-300">
          View collection
        </button>
      </div>
    </main>
  );
};
