import React, { useState, useEffect } from "react";
import Lock from "@/assets/Lock";
import Unlock from "@/assets/Unlock";
import { example_db } from "@/assets/example_db";

const App = () => {
  const [active, setActive] = useState("todos");

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
    <main className=" min-h-screen ">
      <section className=" w-full gap-3 mt-0 text-sm overflow-x-auto flex">
        <div className="flex gap-4 mx-auto text-center">
          <div
            onClick={() => {
              setActive("todos");
            }}
            className={`scroll_item  text-white w-[100px] py-2 rounded-bl-sm rounded-br-sm  cursor-pointer ${
              active === "todos"
                ? "bg-[#0F83F9]"
                : "bg-[#d4d4d4] hover:bg-[#0F83F9] transition-all"
            }`}
          >
            Todos
          </div>
          {example_db.map((item, index) => (
            <div
              onClick={() => {
                setActive(item.key);
              }}
              key={index}
              className={`scroll_item  text-white w-[100px] py-2 rounded-bl-sm rounded-br-sm cursor-pointer ${
                active === item.key
                  ? "bg-[#0F83F9]"
                  : "bg-[#d4d4d4] hover:bg-[#0F83F9] transition-all"
              }`}
            >
              Cuota #{item.key}
            </div>
          ))}
        </div>
      </section>
      <section className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-8 pageSize my-10">
        {example_db.map((item, index) => (
          <div
            key={index}
            className={`sm:w-[400px] w-screen text-sm font-medium mx-auto ${
              active === item.key || active === "todos" ? "" : "hidden"
            }`}
          >
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
