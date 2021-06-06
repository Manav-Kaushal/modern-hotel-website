import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { homeBanner } from "../utils/mocks/BannerData";

const HomePage = () => {
  return (
    <>
      <Hero>
        {homeBanner.map((data) => {
          return (
            <Banner
              key={data.title}
              title={data.title}
              subtitle={data.subtitle}
            >
              {data.btnShow && (
                <Link to={data.btnLink} className="btn-primary">
                  {data.btnLabel}
                </Link>
              )}
            </Banner>
          );
        })}
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default HomePage;
