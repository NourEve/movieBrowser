import React from "react";
import Navigation from "./components/Navigation";
import IconGoogle from "./assets/IconGoogle";
import IconFacebook from "./assets/IconFacebook";
import Header from "./components/Header";
import MediaQuery from "react-responsive";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      <Header />
      <div className="profilePage__connection">
        <div className="profilePage__titleAndForm">
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
        </div>

        <div className="profilePage__otherAndSignup">
          <div className="profilePage__otherConnection">
            <MediaQuery maxWidth={1024}>
              <a href="#">
                <IconGoogle width="8vw" height="8vw" />
              </a>
              <a href="#">
                <IconFacebook width="7vw" height="7vw" />
              </a>
            </MediaQuery>
            <MediaQuery minWidth={1025}>
              <a href="#">
                <IconGoogle width="4vw" height="4vw" />
              </a>
              <a href="#">
                <IconFacebook width="3.5vw" height="3.5vw" />
              </a>
            </MediaQuery>
          </div>

          <div className="profilePage__signUp">
            <a href="#">Forgot your password ?</a>
            <a href="#">Create a new account</a>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default ProfilePage;
