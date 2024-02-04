import { useState } from "react"

// Reading inputs of single box using states
// function InputState(){
//     let [currentInput,changeInputFunction]=useState("Write Here");
    
//     function updateParagraphTag(e){
//         console.log(e.target);
//         changeInputFunction(e.target.value);
//     }

//     function reset(){
//         changeInputFunction("Write Here");
//     }

//     return(
//         <div>
//             <br/>
//             <h1 style={{color:"red"}}>Input Practice</h1>
//             <input type="text" value={currentInput} onChange={updateParagraphTag}/>
//             <p>Your inputed text is : {currentInput}</p>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// export default InputState;

// ---------------------------------------------------------------------------------------

// Reading inputs of multiple boxes using states
function InputState(){
    let [currentInput,changeInputFunction]=useState({
        firstName:"Name",
        lastName: "Name",
        mail: "@gmail.com",
    });
    
    function updateParagraphTag(e){
        console.log(e.target);
        changeInputFunction(e.target.value);
    }

    function reset(){
        changeInputFunction({
            firstName:"Name",
            lastName: "Name",
            mail: "@gmail.com",
        });
    }

    return(
        <div>
            <br/>
            <h1 style={{color:"red"}}>Input Practice</h1>
            <label>FName: </label>
            <input type="text" value={currentInput.firstName} onChange={(e)=>{
                changeInputFunction({
                    ...currentInput,
                    firstName: e.target.value
                })
            }}/>
            
            <label>LName: </label>
            <input type="text" value={currentInput.lastName} onChange={(e)=>{
                changeInputFunction({
                    ...currentInput,
                    lastName: e.target.value
                })
            }}/>

            <label>Mail: </label>
            <input type="text" value={currentInput.mail} onChange={(e)=>{
                changeInputFunction({
                    ...currentInput,
                    mail: e.target.value
                })
            }}/>
            <p>Your inputed firstName is : {currentInput.firstName}</p>
            <p>Your inputed firstName is : {currentInput.lastName}</p>
            <p>Your inputed firstName is : {currentInput.mail}</p>

            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default InputState;