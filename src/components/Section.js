import React from "react";

const Section = (props) => {
  console.log(props.images);
  return (
    <>
      <h1> {props.category} </h1>
      <section>
        {props.images.map((image) => {
          return <img src={image} />;
        })}
      </section>
    </>
  );
};

export default Section;
