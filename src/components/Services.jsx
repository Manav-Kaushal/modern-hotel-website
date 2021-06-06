import React, { Component } from "react";
import { homeServices } from "../utils/mocks/ServicesData";
import Title from "./Title";

export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {homeServices.map((item, index) => {
            return (
              <article key={item.title} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
