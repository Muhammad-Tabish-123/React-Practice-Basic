
function Bag(props){
    // const bag={
    //     padding: "20px",
    //     border: "1px solid gray",
    //     background: "#fff",
    //     margin: "20px 0"
    // }
    return(
        // style={bag}
        <div  className="bag">
            {props.children}
        </div>
    )
}

export default Bag;