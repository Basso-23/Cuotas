import React, { useState, useEffect } from "react";
import Lock from "@/assets/Lock";
import Unlock from "@/assets/Unlock";
import { example_db } from "@/assets/example_db";

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

        <div className=" justify-end flex items-center">
          $24.77
          {/*//*  <div className=" absolute mr-[-65px] bg-white py-[14px] px-[8px] flex gap-[3px] justify-center border border-[#F1F0F1] rounded-sm">
            <div className=" w-1 h-1 rounded-full bg-[#8C8D8C]"></div>
            <div className=" w-1 h-1 rounded-full bg-[#8C8D8C]"></div>
            <div className=" w-1 h-1 rounded-full bg-[#8C8D8C]"></div>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <main className=" min-h-screen">
      <section className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-10 pageSize my-10">
        {example_db.map((item, index) => (
          <div key={index} className="w-[400px] text-sm font-medium mx-auto">
            <h1 className=" py-2">Saldo 50y6 - Nº{item.key}</h1>
            {item.saldo.map((i, index) => (
              <div key={index} className="bg-white">
                <Saldo letra={i.key} lock={i.lock} date={i.date} />
              </div>
            ))}
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
          </div>
        ))}
      </section>
    </main>
  );
};

export default App;
