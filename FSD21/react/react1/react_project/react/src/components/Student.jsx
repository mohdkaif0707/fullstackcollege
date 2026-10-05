import React from "react";

const Student = (props) => {
    return (
        <div style={{
            border: "2px solid red",
            height: "400px",
            width: "500px"
        }}>
            <h1 style={{ color: "red" }}>
                Student Id Card
            </h1>

            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/031/610/037/small/a-of-a-3d-cartoon-little-boy-in-class-world-students-day-image-ai-generative-free-photo.jpg"
                alt=""
                height="150px"
            />

            <h2>Name: {props.name}</h2>
            <h2>Class: {props.class}</h2>
            <h2>Roll No: {props.roll}</h2>
        </div>
    );
};

export default Student;