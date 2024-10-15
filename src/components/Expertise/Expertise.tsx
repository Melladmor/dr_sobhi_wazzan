import React from "react";
import Title from "../Title/Title";
import ExpertiseCard from "./ExpertiseCard";
import { expertiseData } from "../../../localdata/expertiseData";
import { expertiseI } from "../../../localdata/type";

const Expertise = () => {
  return (
    <div>
      <Title
        title={expertiseData?.title}
        description={expertiseData?.subTitle}
      />
      <div className="flex flex-wrap justify-center items-center gap-4">
        {expertiseData?.expertise?.map((el: expertiseI) => {
          return <ExpertiseCard {...el} key={el?.id} />;
        })}
      </div>
    </div>
  );
};

export default Expertise;
