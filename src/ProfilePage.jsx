import React from "react";
import Navigation from "./components/Navigation";
import IconGoogle from "./assets/IconGoogle";
import IconFacebook from "./assets/IconFacebook";
import Header from "./components/Header";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Header />
      <h1 className="profilePage__title">Log in</h1>

      <div className="profilePage__logIn">
        <label htmlFor="Username" className="profilePage__logIn--label">
          Username
        </label>
        <input type="text" className="profilePage__logIn--input" />
        <label htmlFor="password" className="profilePage__logIn--label">
          Password
        </label>
        <input type="password" className="profilePage__logIn--input" />
      </div>

      <div className="profilePage__otherConnection">
        <a href="#">
          <IconGoogle width="8vw" height="8vw" />
        </a>
        <a href="#">
          <IconFacebook width="7vw" height="7vw" />
        </a>
      </div>

      <div className="profilePage__signUp">
        <a href="#">Forgot your password ?</a>
        <a href="#">Create a new account</a>
      </div>

      <Navigation />
    </div>
  );
};

export default ProfilePage;
