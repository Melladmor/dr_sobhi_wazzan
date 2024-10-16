import React, { FC } from "react";

interface PaginationLinesProps {
  totalSlides: number; // Total number of lines (groups of slides)
  activeIndex: number; // The current active slide index
}

const Pagination: FC<PaginationLinesProps> = ({ totalSlides, activeIndex }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`
                block 
                lg:w-10 lg:h-1    
                md:w-8 md:h-1      
                sm:w-4 sm:h-4      
                xs:w-2 xs:h-2      
                sm:rounded-full 
                xs:rounded-full       
                ${index === activeIndex ? "bg-bluePrimary" : "bg-[#ADC2C0]"}
        `}
        />
      ))}
    </div>
  );
};

export default Pagination;
