import React from "react";
import img from "../assets/coming_soon.png";
import { Email } from "./Email";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import logo from "../assets/logo.png";

const social = [
  { name: facebook, url: "https://facebook.com/edujobsofficial" },
  { name: twitter, url: "https://twitter.com/edujobsofficial" },
  { name: insta, url: "https://www.instagram.com/edujobsofficial/" },
];
export const Landing = () => {
  return (
    <section className="container mx-auto">
      <div>
        <div className="absolute top-0 left-0 bg-[#02378B] h-[50px] w-[50px] md:h-[200px] md:w-[200px] rounded-br-[90%]"></div>

        <div className="my-[3rem] pt-[3rem] pb-[3rem] flex flex-col justify-center h-screen items-center">
        
          <img src={logo} alt="" />
          <img className="my-[1rem]" src={img} alt="" />
          <h1 className="font-[800] text-[1.8rem] md:text-[2.5rem]">
            COMING SOON
          </h1>
          <p className="text-center max-w-[700px]">
          Edujobsng is an EdTech Platform for Education job seekers, recruiters, and parents. 
You wouldn't want to miss our updates on tutoring jobs and other educational job opportunities in Nigeria. 
Subscribe for more updates.
          </p>

          <Email />

          {/* Footer */}
          <div className="pt-[2rem] flex flex-row items-center mr-[1rem] gap-[3rem] md:gap-[5rem] justify-between">
            {social.map((item, index) => {
              return (
                <a key={index} target="_blank"href={item.url}>
                  <img src={item.name} alt="" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
      
    </section>
  );
};
