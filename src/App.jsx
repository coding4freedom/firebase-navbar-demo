import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { auth } from './firebase/init';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged } from "firebase/auth";

  function App() {
    const [user, setUser] = useState({});  // Initialize with an empty object
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setLoading(false);
        if (user) {
          setUser(user);
          setIsLoggedIn(true); // Set isLoggedIn to true if user is authenticated
        } else {
          setUser({}); // Set to an empty object if no user is authenticated
          setIsLoggedIn(false); // Set isLoggedIn to false if no user is authenticated
        }
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);
  
    function register() {
      setLoading(true);
      createUserWithEmailAndPassword(auth, 'test@email.com', 'testword')
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  
    function login() {
      setLoading(true);
      signInWithEmailAndPassword(auth, 'test@email.com', 'testword')
        .then(({ user }) => {
          setUser(user);
          setIsLoggedIn(true); // Set isLoggedIn to true on successful login
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        });
    }
  
    function logout() {
      setLoading(true);
      signOut(auth).then(() => {
        setUser({}); // Set user to an empty object on logout
        setIsLoggedIn(false); // Set isLoggedIn to false on logout
        setLoading(false);
      });
    }
  
    return (
      <>
        <Nav 
          register={register} 
          login={login} 
          logout={logout} 
          user={user} 
          isLoggedIn={isLoggedIn} 
          loading={loading}
        />
        <div className="loading__container">
          {loading ? (
            <span>Loading...</span>
          ) : (
            user.email ? <span>{user.email}</span> : <span>No user</span>
          )}
        </div>
      </>
    );
  }

export default App;
