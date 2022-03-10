import React from "react";
import { Link } from "react-router-dom";
import image1 from "./../../../assets/images/simon-berger-twukN12EN7c-unsplash.jpg";
const Card = () => {
    return (
        <div className="w-2/4 flex justify-center items-center bg-slate-100 mx-auto overflow-hidden  rounded-xl">
            <div className="md:flex shadow-md rounded-lg space-x-4 ">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={image1}
                        alt="Man looking at item at a store"
                    />
                </div>
                <div className="space-y-4 pb-2">
                    <div className="space-y-.5">
                        <h2 className="text-lg font-bold">company retreats</h2>
                        <h4 className="font-medium">
                            Incredible accomodation for your team
                        </h4>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Fuga cum dicta odit.Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Fuga cum dicta
                            odit.Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Fuga cum dicta odit.
                        </p>
                    </div>
                    <button className="px-5 py-2 border-2 font-semibold bg-yellow-300 rounded-full ">
                        Contact now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
