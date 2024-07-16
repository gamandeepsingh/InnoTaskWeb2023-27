import "./app.css";
import { useEffect, useState} from "react";
import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Error from "./components/404/Error";
import Loader from "./components/loader/Loader";

function App() {
  const [loading,setLoading] = useState(true)
  let originalTitle = document.title; 
  useEffect(() => {
  
    const handleBlur = () => {
      document.title = "Comeback :(";
    };
  
    const handleFocus = () => {
      document.title = originalTitle;
    };
  
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
  
    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2500)
  })

  if(loading){
    return(
      <div id="loader">
        <Loader/>
      </div>
    )
  }
  
  return (
    <div className="flex flex-col w-screen overflow-hidden bg-black">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;