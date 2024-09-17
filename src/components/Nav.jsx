import React from 'react';

export default function Nav({ register, login, logout, user, isLoggedIn, loading }) {
  return (
    <nav className="container">
      <div className="row nav__row">
        <h1 className="nav__title">
          {`</>`} <span className="special">Coding4Freedom</span> Consultant
        </h1>
        <div className="btn__wrapper">
          {loading ? (
            <>
              <div className="skeleton__auth"></div>
              <div className="skeleton__btn"></div>
            </>
          ) : isLoggedIn ? (
            <button className="userIcon__btn" onClick={logout}>
              <span>{user.email[0].toUpperCase()}</span>
            </button>
          ) : (
            <>
              <button className="btn nav__login--btn" onClick={login}>
                Login
              </button>
              <button className="btn nav__reg--btn" onClick={register}>
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}