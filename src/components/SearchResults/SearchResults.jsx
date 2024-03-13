import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, MainContainer } from "../../App";


const FoodCardContainer = styled.section`
    min-height: calc(100vh - 187px); //in order to remove scroll this is used.
    background-image: url("/images/Background.png");
    background-size: cover;
`;
const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap; // when i reduce the window size, It adjusts the contents.
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;
const FoodCard = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: rgba(0,0,0.5); */
    background: radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%);
    border: 0.1px solid;
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected,warning: gradient uses a rotation that is not supported by CSS and may not behave as expected; */
border-image-source: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) 
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) ;


    gap: 10px;  
    width: 340px;
    height: 167px;
    box-sizing: border-box;
    backdrop-filter: blur(13.1842px);
    background-blend-mode: overlay,normal;
    border-radius: 20px;

    .food_info{
       
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* align-items: end; */
        gap: 8px;
        min-width: 168px;
        min-height: 59px;
        font-size: 12px;
        line-height: 14.5px;
        margin-bottom: 5px;
        margin-top: 10px;

        .btn{
            /* display: flex;
            align-items: end; */
            margin-top: 35px;
            margin-left: 100px;
        }

    }

`;
//by writing data:foods. you can use foods in doing operations instead of data. Its just changing names
const SearchResult = ({data,foodInput}) => {
    console.log("data in search result",data);
    return (  
        <>
        {/* <div>
            SearchResult
        </div> */}
        <FoodCardContainer>
            <MainContainer>
            <FoodCards> 
            {
                
                data?.map((food) => (
                    //key is used to manage the object . It should be unique, as name is unique its used here.
                    <FoodCard key= {food.name}>
                        {/* {food.text} */}
                        <div className="food_image">
                            <img src={BASE_URL + food.image } alt="" />
                        </div>
                        <div className="food_info">
                            <div>
                            <h3>{food.name}</h3>
                            </div>
                            <div className="info">
                                
                                <p>{food.text}</p>
                
                            </div>
                            <div className="btn">
                                <Button>${food.price.toFixed(2)}</Button>

                            </div>
                            
                        </div>
                    </FoodCard>

                ))
            }
            </FoodCards>
            </MainContainer>
            
        </FoodCardContainer>
        </>
    );
}
 
export default SearchResult;