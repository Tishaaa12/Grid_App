import React from "react";
import { useState } from "react";

const GridComponent = () => {
    const [clear,setClear] = useState('');
    const [square,setSquare] = useState([1,2,3,4,5,6,7,8,9]);
    const clearFunc = () => {
        setSquare([])
    }

    const addNum = () => {
        setSquare(square.map((item) => item + 1));
        console.log(square)     
    }
    return (
    <div className="bg-white flex flex-col items-center h-screen">
        <div className = "text-black p-5 m-5 rounded-xl text-3xl font-semibold">-Time 1Hr -</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-3 ">
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4" onClick={addNum}>{square[0]}</div>
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[1]}</div>
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[2]}</div>   
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-3">
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[3]}</div>
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[4]}</div>
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[5]}</div>   
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[6]}</div>
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[7]}</div>
           <div className="w-10 h-10 border border-1 rounded-lg border-[#ddd] p-2 px-4"onClick={addNum}>{square[8]}</div>   
        </div>
        <button className="hover:border-2 px-4 py-2 rounded-xl border-[#646cff] font-semibold mt-15 mb-5" onClick={() => clearFunc()}>Clear</button>

    </div>
    );
};

export default GridComponent;