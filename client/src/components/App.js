import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Profile from "./Profile";
import RecipeDetail from "./RecipeDetail";
import GlobalStyles from "./GlobalStyles";
import SignUp from "./SignUp";
import Users from "./Users";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/recepie/:recepieId" element={<RecipeDetail/>} />
                </Routes>
            </Main>
        </BrowserRouter>
    );
};

const Main = styled.div`
  /* background: grey; */
    display: flex;
    flex-direction: column;
    height: calc(100vh - 150px);
`;

export default App;
