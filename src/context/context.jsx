
import { useEffect, useState } from "react";
// import { createContext, useContext } from "react";
import { createContext,useContext } from "react";

const AppContext =createContext();
const url ="https://api.themoviedb.org/3/movie/popular?api_key=c78acce0f3f2ea89dc161ac367c1d5f7";




export function AppProvider ( {children}){

  const [data, setData] = useState([]);


 const getData = async () => {

    try{
    const res= await fetch(url);
    const data = await res.json();
    setData(data.results);
    console.log(data.results);
    }
    catch(error) {
        console.log(error);
    }
};
useEffect(() =>{
         getData(url);

           },[]);



    


return(
        <AppContext.Provider  value={{
            data,
            setData
            }} >
        
            {children}
        </AppContext.Provider>)
}



export  const useGlobalContext = () =>{
    return useContext(AppContext);
};

export  default {AppContext,AppProvider};