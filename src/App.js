import React, { useState, useEffect } from "react";
import { NavBar } from "./components/navbar";
import { LiveStories, profiles } from "./components/liveStories";
import { PostFeed } from "./components/postFeed";
// import { Login } from "./components/login";
import { SignUp } from "./components/signUp";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const dataReceived = await response.json();
      setData(dataReceived.map(item => ({
        url: item.download_url,
        likes: Math.ceil(Math.random() * 999),
        comments: Math.ceil(Math.random() * 999),
        time: Math.ceil(Math.random() * 59),
        profile: profiles[Math.floor(Math.random() * 5)]
      })));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <div className="border">
        {loggedIn ? (
          <>
            <NavBar />
            <LiveStories />
            <div>
              {data.map((item, index) => {
                return <PostFeed item={item} index={index} />
              })}
            </div>
          </>
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
}

export default App;
