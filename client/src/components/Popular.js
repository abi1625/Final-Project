import { useEffect, useState } from "react";
import styled from "styled-components";

const Popular = () => {
    const [popular, setPopular] = useState([]);

useEffect(() => {
    getPopular();
}, [])

const getPopular = async () => {
    const api = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
    const data = await api.json();
    setPopular(data.recepies)
    console.log(data.recepies)
};

    return ( 
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                    {popular.map((recepie) => {
                        return(
                            <Card>
                                <p>{recepie.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>
                        );
                    })}
            </Wrapper>
            
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;

img {
    border-radius: 2rem;
}
`
export default Popular;