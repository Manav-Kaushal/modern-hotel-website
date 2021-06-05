import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from '../components/Hero';
import { errorBanner } from "../utils/mocks/BannerData";

const ErrorPage = () => {
  return (
    <Hero>
      {errorBanner.map((data) => {
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
  );
};

export default ErrorPage;
