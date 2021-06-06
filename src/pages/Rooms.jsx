import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";
import { roomsBanner } from "../utils/mocks/BannerData";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        {roomsBanner.map((data) => {
          return (
            <Banner title={data.title} subtitle={data.subtitle}>
              {data.btnShow && (
                <Link to={data.btnLink} className="btn-primary">
                  {data.btnLabel}
                </Link>
              )}
            </Banner>
          );
        })}
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
