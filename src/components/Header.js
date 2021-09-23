import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
} from "../features/user/userSlice";
import {
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = async () => {
    try {
      if (!userName) {
        const response = await signInWithPopup(auth, provider);

        console.log(response);

        const user = response.user;

        helperSetUserFunction(user);
      } else if (userName) {
        await auth.signOut();

        dispatch(setSignOutState());
        history.push("/");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    console.log("running");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        helperSetUserFunction(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const helperSetUserFunction = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </Link>
            <Link to="/home">
              <img src="/images/search-icon.svg" alt="HOME" />
              <span>SEARCH</span>
            </Link>
            <Link to="/home">
              <img src="/images/watchlist-icon.svg" alt="HOME" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="/home">
              <img src="/images/original-icon.svg" alt="HOME" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="/home">
              <img src="/images/movie-icon.svg" alt="HOME" />
              <span>MOVIES</span>
            </Link>
            <Link to="/home">
              <img src="/images/series-icon.svg" alt="HOME" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <Signout>
            <ProfilePhoto src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </Signout>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  background-color: #090b13;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0% 36px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  min-width: 80px;
  max-height: 70px;
  img {
    display: inline-block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  position: relative;
  margin: 0 auto 0 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      padding: 0px 2px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: "";
        width: auto;
        height: 2px;
        border-radius: 0px 0px 4px 4px;
        background-color: rgb(249, 249, 249);
        position: absolute;
        right: 0px;
        bottom: -6px;
        left: 0px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 906px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.4s linear;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

const ProfilePhoto = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  transform: scale(0);
  transition: all 0.4s ease-in 0.1s;
`;

const Signout = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  cursor: pointer;

  ${ProfilePhoto} {
    border-radius: 50%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      top: 48px;
      transform: scale(1);
      transform-origin: right center;
    }
  }
`;

export default Header;
