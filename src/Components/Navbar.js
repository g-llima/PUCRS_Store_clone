import React from "react";
import "./Styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__content">
        <div className="navbar__content__logo">
          <h1 className="navbar__content__logo__text">
            PUCRS
            <br />
            STORE
          </h1>
          <svg className="navbar__content__logo__icon" viewBox="580 0 800 300">
            <path
              fill="#fff"
              d="M789.76,55.51a73.48,73.48,0,0,0-20.44-27.07q-13.27-11-32.13-16.77T695.28,5.91H601.21a10.7,10.7,0,0,0-10.7,10.7V230a10.7,10.7,0,0,0,16.78,8.8l81.85-56.44a10.62,10.62,0,0,1,5.88-1.86A149.43,149.43,0,0,0,733.87,175a94.71,94.71,0,0,0,33.36-16.76,78,78,0,0,0,21.83-27.59q7.86-16.42,7.86-38.07v-.7Q796.92,71.57,789.76,55.51Zm-71.24,79.71a31.19,31.19,0,0,1-17.06,4.5l-40.61.27a6.44,6.44,0,0,1-5.73-9.47l14-26.29A31.28,31.28,0,0,1,686,46l40.6-.28a6.44,6.44,0,0,1,5.73,9.47l-14,26.29a31.29,31.29,0,0,1,.26,53.7Z"
            ></path>
          </svg>
        </div>
        <div className="navbar__content__search">
          <form className="navbar__content__search__form">
            <input
              className="navbar__content__search__form__input"
              type="text"
              placeholder="O que você deseja pesquisar?"
            />
            <input
              className="navbar__content__search__form__submitBtn"
              type="Submit"
              value="BUSCAR"
            />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
