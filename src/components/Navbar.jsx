import React from "react";

const Navbar = () => {
    return (
        <div className="border-b border-[#6B73FF] ">
            <div className="container flex justify-between h-[60px] items-center mx-auto p-2 md:p-0">
                <p className="text-[#ffffff] text-[24px] md:text-[36px] leading-[42px] font-normal cursor-pointer">
                    CODE BRANCH
                </p>
                <ul className="flex flex-col md:flex-row md:gap-20 md:items-center text-[#ffffff] text-[18px] md:text-[24px] font-normal cursor-pointer">
                    <li>команда</li>
                    <li>о нас</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
