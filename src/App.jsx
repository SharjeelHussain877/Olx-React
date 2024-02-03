import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home.jsx";
import Details from "./components/details/details.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Error404 from "./pages/error/error404.jsx";
import LoginAndSignup from "./components/Login-or-signup/loginAndSignup.jsx";
import { onAuthStateChanged, auth } from "./firebase/firebase.config.js";


function App() {
  const [currentUserUid, setCurrentUser] = useState('');
  const [isUser, setIfUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser(uid)
        setIfUser(true)
        console.log(isUser)
        console.log(currentUserUid)
      } else {
        setIfUser(false)
        // User is signed out
        // ...
      }
    });
  }, [currentUserUid, isUser]);

  return (
    <div>
      <BrowserRouter>
        <Header isUser={isUser} currentUserUid={currentUserUid} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path={`/details/:id`} element={<Details />} />
          <Route path="/login" element={<LoginAndSignup />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
