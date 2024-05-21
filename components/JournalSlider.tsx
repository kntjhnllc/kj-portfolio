
import Image from "next/image";
import React from "react";
import shuffle from "lodash/shuffle";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { shuffleArray } from "@/lib/utils";

type ImageModule = {
  default: string;
};

const images = require.context("/public/journal", true, /\.(png|jpe?g|svg|jpg)$/);
const imageList = shuffleArray(images.keys().map(image => images(image)));

const JournalSlider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {imageList.length > 0 ? (
          imageList.map((image: { default: string | StaticImport; }, index: React.Key | null | undefined) => (
            <div className="slide flex items-center gap-2" key={index}>
              <Image
                key={index} src={image.default} alt={`image-${index}`}
                height={600}
                width={600}
                
              />
            </div>
          ))
        ) : (
          <div>No Images</div>
        )}
      </div>
    </div>
  );
};

export default JournalSlider;