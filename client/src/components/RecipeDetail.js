import { useParams } from "react-router-dom";
import styled from "styled-components";

const RecipeDetail = () => {
    const {recepieId} = useParams();
        return ( 
            <StyledItems>
                <div className="recepies">
                    <div className="recepie-details">
                        {/* image ingredients descriptions comments  */}
                    </div> 
                </div>
            </StyledItems>
            )
    };
    
    const StyledItems = styled.div`
`;

export default RecipeDetail;