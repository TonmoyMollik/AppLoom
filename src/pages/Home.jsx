import React, { Suspense } from "react";
import appStoreLogo from "../assets/images/appstore.png";
import playStoreLogo from "../assets/images/playstore.png";
import heroImg from "../assets/images/hero.png";
import TrendingApp from "../components/TrendingApp";
import Loading from "../components/Looading";
import { NavLink } from "react-router";

const Home = () => {
  const appData = fetch("trendingApp.json").then((res) => res.json());

  return (
    <section className="bg-[#F5F5F5]">
      <div className="px-4 lg:px-0">
        <div>
          <div className="max-w-6xl mx-auto px-4 pt-16  text-center space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold text-[#001931] leading-tight">
              We Build <br />
              <span className="text-[#9F62F2]">Productive</span> Apps
            </h1>

            <p className="text-[#627382] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex justify-center items-center gap-4 pt-4">
              <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg hover:bg-white transition">
                <img className="w-5" src={playStoreLogo} alt="Play Store" />
                Google Play
              </button>

              <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg hover:bg-white transition">
                <img className="w-5" src={appStoreLogo} alt="App Store" />
                App Store
              </button>
            </div>

            <div className="">
              <img
                className="mx-auto w-full max-w-md md:max-w-2xl"
                src={heroImg}
                alt="App Preview"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#6B35E5] text-white py-12 text-center">
          <h3 className="pb-10 text-2xl md:text-5xl font-bold">
            Trusted by Millions, Built for You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
            <div className="space-y-1">
              <p className="text-md">Total Downloads</p>
              <p className="text-6xl font-bold">29.</p>
              <p className="">21% more than last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-md">Total Reviews</p>
              <p className="text-6xl font-bold">906K</p>
              <p className="">46% more than last month</p>
            </div>
            <div className="space-y-1">
              <p className="text-md">Active Apps</p>
              <p className="text-6xl font-bold">132+</p>
              <p className="">31 more will Launch</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-14 pb-10 space-y-2 bg-[#F5F5F5]">
          <h4 className="text-4xl font-bold">Trending Apps</h4>
          <p className="text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="bg-[#F5F5F5]">
          <Suspense fallback={<Loading></Loading>}>
            <TrendingApp appData={appData}></TrendingApp>
          </Suspense>
          <div className="text-center py-10 ">
            <NavLink to="/app" className="btn btn-primary px-8">
              Show All
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
