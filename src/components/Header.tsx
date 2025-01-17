/** @format */
import { useMemo, useState } from "react";
import { ContactUsBar } from "./ContactUsSheet";
import { useRouter } from "next/router";
import { LoginSheet } from "./LoginSheet";
import { Cart } from "./Cart";

export default function Header() {
  const router = useRouter();
  const [mainWord, setMainWord] = useState("");
  const changeMainWord = useMemo(() => {
    if (router.asPath === "/bag/gucci") {
      setMainWord("gucci");
    }
    if (router.asPath === "/bag/prada") {
      setMainWord("prada");
    }
    if (router.asPath === "/bag/hermes") {
      setMainWord("hermes");
    }
    if (router.asPath === "/bag/lv") {
      setMainWord("louis vuitton");
    }
  }, [router.asPath]);
  return (
    <div className="w-full flex flex-col h-full">
      <div className="justify-between lg:h-[90px] h-[64px] flex w-full items-center">
        <a href="/">
          <button className="pl-10">
            <img src="../loogo.jpg" className="w-[100px] h-[50px]" alt="" />
          </button>
        </a>
        <div className="uppercase justify-center text-xl lg:text-4xl ">
          {mainWord}
        </div>
        <div className="pr-5 flex gap-[30px] h-[50px] lg:pr-20">
          <ContactUsBar variant="outline" />
          <LoginSheet variant="outline" />
          <Cart variant="outline" />
        </div>
      </div>
    </div>
  );
}
