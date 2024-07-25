import React from "react";
import HeaderLogo from "../../assets/images/header-logo.svg";
import HeaderItem from "../HeaderItem/HeaderItem";

const Header = () => {
  return (
    <header className="pt-[19px] pb-[27px]">
      <div className="w-[1250px] mx-auto">
        <div className="flex items-center justify-between">
          <img src={HeaderLogo} alt="Header logo" width={207} height={50} />
          <ul className="flex items-center gap-[32px] ml-[196px]">
            <HeaderItem title={"Home"} />
            <HeaderItem title={"About"} />
            <HeaderItem title={"Promotions"} />
            <HeaderItem title={"Home"} />
          </ul>
          <div className="flex items-center gap-[24px]">
            <span className="block font-medium text-[14px] leading-[22px]">
              Masuk
            </span>
            <button className="w-[147px] py-[10px] bg-[#8BAC3E] rounded-[100px] font-normal text-[14px] leading-[22px] text-[#FFFFFF] hover:bg-yellow-400 ease-linear transition-all">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
