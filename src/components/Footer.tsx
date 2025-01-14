/** @format */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Unsubscribe } from "./Unsubscribe";

export const Footer = () => {
  const router = useRouter();
  const handleJumpHermes = () => {
    router.push("hermes");
  };
  const handleJumpGucci = () => {
    router.push("gucci");
  };
  const handleJumpPrada = () => {
    router.push("prada");
  };
  const handleJumpLouisVuitton = () => {
    router.push("LouisVuitton");
  };

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col p-8 border-t gap-10 lg:p-20 lg:flex-row bg-white relative">
      <div className="flex justify-between lg:w-1/2 lg:justify-around">
        <div className="lg:text-[12px] flex flex-col gap-4 text-[14px]">
          <p>MAY WE HELP YOU?</p>
          <div className="flex flex-col gap-4 text-black">
            <a href="/order">
              <u>My History</u>
            </a>
            <a href="/faq">
              <u>FAQs</u>
            </a>
            <button className="flex justify-start" onClick={toggleVisible}>
              <u>Unscribe Email</u>
            </button>
            {visible && (
              <div className="absolute bottom-0 left-0 w-full h-full flex justify-center lg:py-5">
                <Unsubscribe toggleVisible={toggleVisible} />
              </div>
            )}
          </div>
        </div>
        <div className="lg:text-[12px] text-[14px] flex flex-col gap-4 items-start">
          <p>COMPANY</p>
          <div className="flex flex-col gap-4 text-black items-start">
            <button onClick={handleJumpHermes}>
              <u>Hermes</u>
            </button>
            <button onClick={handleJumpGucci}>
              <u>Gucci</u>
            </button>
            <button onClick={handleJumpLouisVuitton}>
              <u>Louis Vuitton</u>
            </button>
            <button onClick={handleJumpPrada}>
              <u>Prada</u>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:w-1/2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-black">Contact us</p>

          <input
            className="outline-0 bg-white border-b text-black"
            placeholder="FEEDBACK"
            type="text"
          />
        </div>
        <div className="flex">
          <input
            className="outline-0 bg-white border-b text-black w-full"
            placeholder="EMAIL"
            type="text"
          />
          <button className="w-5 border-b">
            <img src="/assets/icons/sendMail.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
