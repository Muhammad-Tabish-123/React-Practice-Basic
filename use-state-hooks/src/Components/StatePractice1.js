import { useState } from "react";
// Number of times a button is clicked
function StatePractice1(){
    // console.log(useState(0));
    let [currentState,setState]=useState(0);
    function numOfBtnClcik(){
        setState(++currentState);
        // console.log(currentState);
    }

    return(
        <div>
            <h1 style={{color:"red"}}>Input Practice</h1>
            <button onClick={numOfBtnClcik}>Click Me</button>
            <p>Number of time button is clicked is : {currentState}</p>
        </div>
    );
}

export default StatePractice1;