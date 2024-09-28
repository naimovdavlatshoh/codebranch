import React from "react";
import User1 from "../../assets/images/image.png";
import User2 from "../../assets/images/image (1).png";
import User3 from "../../assets/images/image (2).png";
import UserCard from "../../components/UserCard";

const TeamSection = () => {
    return (
        <div className="min-h-screen md:h-screen container mx-auto py-[50px] px-2 md:px-0 md:mb-20 mb-5">
            <div className="h-full bg-[#F6F6F6] rounded-[25px] py-10">
                <p className="text-[48px] font-normal leading-[56px] text-center mb-20 md:mb-0 ">
                    Команда \\\ Dream team
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center h-full py-0 md:py-[50px] px-10 gap-[100px] md:gap-[80px]">
                    <UserCard
                        name={"stamp_qw"}
                        img={User1}
                        position={"founder\\ full-stack developer"}
                    />
                    <UserCard
                        name={"gladiator"}
                        img={User2}
                        position={"founder\\ back-end\\ devops"}
                    />
                    <UserCard
                        name={"ваше место"}
                        img={User3}
                        position={"ваши технологии"}
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
