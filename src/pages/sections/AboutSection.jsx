import React from "react";
import AboutCard from "../../components/AboutCard";

const AboutSection = () => {
    return (
        <div className="gradient w-full">
            <p className="text-[36px] font-normal leading-[56px] text-center mb-10 md:mb-0 text-[#ffffff]">
                О нас
            </p>
            <div className="min-h-screen md:h-screen container mx-auto pt-[20px] pb-[100px] font-normal px-2 md:px-0 ">
                <div className="h-full bg-[#F6F6F6] rounded-[25px] ">
                    <div className="flex flex-wrap justify-between items-center h-full px-2 md:px-20 py-10">
                        <AboutCard
                            icon={"🤓"}
                            name={"Команда основана в 2019 году"}
                            description={
                                "Сначала это были маленькие пет проекты"
                            }
                        />
                        <AboutCard
                            icon={"🥳"}
                            name={"Старт фриланс карьеры в 2020"}
                            description={
                                "Начали брать мелкие заказы на фриланс"
                            }
                        />
                        <AboutCard
                            icon={"🚀"}
                            name={"Набор сотрудников в команду"}
                            description={
                                "В настоящее время расширяем состав команды"
                            }
                        />
                        <AboutCard
                            icon={"📈"}
                            name={"Работа с большими компаниями"}
                            description={
                                "в 2022 начали работать с большими компаниями"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
