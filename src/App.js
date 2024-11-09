import "./App.css";
import {useState}from "react";
function App() {
  const[count,setCount]=useState(0);
  function incHandler(){
    setCount(count+1);
  }
  function decHandler(){
    setCount(count-1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
       <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div className="text-2xl font-bold font-medium text-[#0398d4]">Increment & Decrement</div>
        <div className="flex  bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button onClick={decHandler} className="border-r-2 text-center  w-20 border-[#bfbfbf] text-5xl">
            -
          </button>
           <div  className=" gap-12 text-5xl font-bold">
              {count}
           </div>
           <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
            +
           </button>
        </div>
        <button onClick={resetHandler} className="px-10 py-3 bg-[#0398d4] font-bold text-white rounded">Reset</button>
       </div>
  );
}

export default App;
