import { createContext, useContext ,useState } from "react";
const userContext=createContext(undefined);


export const UserProvider=({children})=>{
    console.log("Childrens::");
    console.log(children)
    const [user]=useState({
        name: "Alpha",
        email: "Alpha@gmail.com",
        dob: "01/01/2000"
    });
    console.log(user);
    console.log(userContext.Provider)
    return <userContext.Provider value={{user}}>{children}</userContext.Provider>;
}

export const useUser=()=>useContext(userContext)