import React from "react";
import Section from "./Section";

const Sections = (props) => {
  return (
    <div>
      {props.data.map((item) => {
        return (
          <div>
            <Section category={item.category} images={item.images} />
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
