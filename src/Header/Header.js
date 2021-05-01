import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {

  const history = useHistory();
  return (
    // BEM ===> Bloock Element Modifier
    <div className="header">
    {backButton ? (
      <IconButton onClick = {() => history.replace(backButton)}>
      <ArrowBackIosIcon fontSize = "large" className = "header_backButton" />
     
      </IconButton>
    ) : (
      <IconButton>
        <PersonIcon className="header_icon" fontSize="large" />
      </IconButton>
    )}

      <Link to="/">
        <img
          className="header_logo"
          src="https://air-marketing-assets.imgix.net/blog/logo-db/tinder-logo/tinder-logo-svg-4.svg?auto=format&fit=max&ixlib=react-9.0.2&h=135&w=132"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
