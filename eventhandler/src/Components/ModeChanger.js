let isDarkModeOn=true;
const darkMode=<h1>darkMode is On</h1>;
const lightMode=<h1>lightMode is On</h1>;

const toggleMode=()=>{
    isDarkModeOn=!isDarkModeOn;
    if(isDarkModeOn){
        console.log(darkMode.props.children);
    }else{
        console.log(lightMode.props.children);
    }
}

function ModeChanger(){

    return(
        <div>
            {isDarkModeOn ? darkMode : lightMode}
            <button onClick={toggleMode}>Click to toggle Mode</button>
        </div>
    )
}

export default ModeChanger;