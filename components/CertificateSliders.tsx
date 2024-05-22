"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CERTIFICATES } from "@/lib/certificates";
import Image from "next/image";

const CertificateSliders = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full h-full flex justify-center items-center wrapper"
    >
      <CarouselContent>
        {CERTIFICATES.length > 0 ? (
          <div>
            {CERTIFICATES.map((cert, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-center text-center gap-5 "
              >
                <h1 className="text-lg font-bold">{cert.title}</h1>
                <Image src={cert.image} alt="image" height={800} width={800} />
              </div>
            ))}
          </div>
        ) : (
          <div>No Certs</div>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CertificateSliders;
