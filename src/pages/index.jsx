import React, { useState, useEffect } from "react";
import Lock from "@/assets/Lock";
import Unlock from "@/assets/Unlock";

const App = () => {
  const Saldo = ({ letra, lock, date }) => {
    return (
      <div className=" grid grid-cols-4 border-b py-2 px-5 border-[#F1F0F1] items-center">
        <div className=" flex gap-3 items-center ">
          <div className=" w-4 h-4 border-2 border-[#8C8D8C] rounded-sm"></div>
          <div className={lock === "lock" ? "" : "text-[#0F83F9]"}>
            LTR - {letra}
          </div>
        </div>

        <div className=" justify-center items-center flex">
          {lock === "lock" ? (
            <div className=" text-[#d4d4d4]">
              <Lock />
            </div>
          ) : (
            <div className="text-[#0F83F9]">
              <Unlock />
            </div>
          )}
        </div>

        <div
          className={` text-[12px] w-[90px] text-center py-1 rounded-sm ${
            date === "green"
              ? "bg-[#EAF9EA] text-[#55d053]"
              : "bg-[#FDEBEB] text-[#F37575]"
          }`}
        >
          15-04-2024
        </div>

        <div className=" justify-end flex">$24.77</div>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex flex-col">
      <section className="m-auto w-[400px] text-sm font-medium">
        <h1 className=" py-2">Saldo 50y6</h1>
        <div className="bg-white shadow-md">
          <Saldo letra={"1"} lock={"lock"} date={"red"} />
          <Saldo letra={"2"} lock={"unlock"} date={"green"} />
          <Saldo letra={"3"} lock={"lock"} date={"red"} />
          <Saldo letra={"4"} lock={"unlock"} date={"green"} />
          <Saldo letra={"5"} lock={"lock"} date={"red"} />
          <Saldo letra={"6"} lock={"lock"} date={"red"} />
          <Saldo letra={"7"} lock={"unlock"} date={"green"} />
        </div>
        <div className=" grid grid-cols-2 bg-white border-b ">
          <div className="py-2 px-5">Subtotal</div>
          <div className="py-2 px-5 text-right">$198.16</div>
          <div className="py-2 px-5">ITBMS</div>
          <div className="py-2 px-5 text-right">$13.87</div>
        </div>
        <div className=" grid grid-cols-2 bg-white text-xl font-bold ">
          <div className="py-2 px-5">Total</div>
          <div className="py-2 px-5 text-right">$212.03</div>
        </div>
      </section>
    </main>
  );
};

export default App;
