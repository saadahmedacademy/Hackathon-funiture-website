import Image from "next/image";
import React from "react";
import newCeramic from "@/jsondata/newCeramic.json";

export const NewCeremics = () => {
  return (
    <main className="md:container md:mx-auto w-full flex flex-col gap-6 py-16 px-4">
      {/* Section Heading */}
      <p className="text-2xl md:text-3xl font-sans font-semibold text-gray-800">
        New ceramics
      </p>

      {/* Responsive Grid Layout */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
        {newCeramic.map((ceramic, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-start text-gray-600"
          >
            {/* Ceramic Image */}
            <Image
              src={`${ceramic.img}`}
              alt={ceramic.title}
              width={305}
              height={375}
              className="rounded-lg shadow-sm"
            />

            {/* Ceramic Title */}
            <p className="text-lg font-medium">{ceramic.title}</p>

            {/* Ceramic Price */}
            <p className="text-lg font-semibold">{ceramic.price}</p>
          </div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="pt-8 mx-auto">
        <button className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          View collection
        </button>
      </div>
    </main>
  );
};
