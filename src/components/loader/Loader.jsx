import React from "react";
import "./style.css";
export default function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="loader-container">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">Hello</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">world !</li>
              <li className="content__container__list__item">geeks!</li>
              <li className="content__container__list__item">coder !</li>
              <li className="content__container__list__item">users !</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
