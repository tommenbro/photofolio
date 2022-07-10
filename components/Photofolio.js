import Image from "next/image";
import React from "react";
import { AllData } from "./AllData";

const Photofolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">All photos</h1>
      <div className="grid grid-row-2 p-2">
        <div>
          {AllData.map((item, index) => {
            return (
              <div key={index} className="py-4">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={677}
                  height={451}
                  layout="responsive"
                  objectFit="cover"
                />
                <p>
                  lorem ipsum dolor sit amet consectetur adipisicing elit, 2022
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Photofolio;
