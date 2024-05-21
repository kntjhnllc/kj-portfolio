import { JOURNALS } from "@/lib/journals";
import Image from "next/image";
import React from "react";
import JournalSlider from "./JournalSlider";

const Journal = () => {
  return (
    <section id="journal" className="">
      <div className="wrapper">
      <div className=" flex flex-col md:py-24 py-14 md:px-44 md:ml-1">
        <h1 className="text-lg font-bold text-blue-500 text-start">JOURNAL</h1>
        {JOURNALS.length > 0 ? (
          <div className="flex flex-col gap-10 mt-10 h-full">
            {JOURNALS.map((journal, index) => (
              <div
                key={index}
                className="flex odd:flex-row-reverse gap-5 items-center"
              >
                <Image
                  className="rounded-lg"
                  src={journal.image}
                  alt="journal"
                  width={500}
                  height={300}
                />
                <div className="flex flex-col gap-3 h-full justify-center odd:items-end odd:text-end">
                  <h1 className="font-bold text-lg">{journal.title}</h1>
                  <p>{journal.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Journals</div>
        )}
      </div>
      </div>
      <JournalSlider />
    </section>
  );
};

export default Journal;
