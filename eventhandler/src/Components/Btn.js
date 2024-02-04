// -----------------------------Event Clcik---------------------------------------
// const eventHandler= ()=>{
//     console.log('Button Clicked')
// }

// function Btn(){
//     return(
//         <button onClick={eventHandler}>Click Me</button>
//     );

// }
// export default Btn;


// -----------------------------Event Mouse Over---------------------------------------

// const eventHandler= ()=>{
//     console.log('Mouse Over')
// }

// function Btn(){
//     return(
//         <button onMouseOver={eventHandler}>Click Me</button>
//     );

// }
// export default Btn;

// -----------------------------Function as props---------------------------------------



function Btn(prop){
    return(
        <button onClick={prop.onClick}>Click Me</button>
    );

}
export default Btn;