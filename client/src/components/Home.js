import styled from "styled-components";

const Home = () => {
    return (
        <Wrapper>
        <div className="home">
                <p></p>
            <div className="browse">
                <p>Browse recepie:</p>
                <div className="image">
                    {/* Image and name import recepieDetail{recepies={recepies}}*/}
                </div>
            </div>
        </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
.browse {
    font-weight: bold;
}
`

export default Home;
