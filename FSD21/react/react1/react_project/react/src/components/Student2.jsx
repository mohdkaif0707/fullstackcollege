import React from "react";
const Student = (props) => {
  return (
    <div style={{ border: "2px solid red", height: "400px", width: "500px" }}>
      <h1 style={{ color: "red" }}>Student Id Card</h1>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/031/610/037/small/a-of-a-3d-cartoon-little-boy-in-class-world-students-day-images-ai-generative-photo.jpg" alt="" height={'150px'} width={'198px'}></img>
      <h2>{props.name}</h2>
      <h2> 11 class</h2>
    </div>
  );
};
export default Student;