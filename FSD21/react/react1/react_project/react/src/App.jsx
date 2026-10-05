import React from "react";
import Student from "./components/Student";

const App = () => {
    return (
        <div>

            <Student
                name="Rohit"
                class="B.Tech CSE"
                roll="101"
            />

            <br />

            <Student
                name="Sohan"
                class="B.Tech CSE"
                roll="102"
            />

        </div>
    );
};

export default App;