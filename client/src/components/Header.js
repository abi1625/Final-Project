import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Wrapper>
        <header>
            <nav className="navbar">
            <h1>Recipes</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">SignUp</Link>
            </div>
            </nav>
        </header>
        </Wrapper>
    );
};

const Wrapper = styled.div`
.navbar Link {
    margin-left: 16px;
    padding: 6px;
}
.navbar .links {
    margin-left: auto;
}
.navbar  {
    padding: 14px 16px;
    display: flex;
    margin: 0 auto;
    text-decoration: none;
}
.links a {
    text-decoration: none;
    text-align: center;
    float: left;
    padding: 6px;
}
`;

export default Header;