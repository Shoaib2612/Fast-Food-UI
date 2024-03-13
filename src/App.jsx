import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResults";

export const MainContainer = styled.div`  //I have exported it because the cards spread in the container, but this arranges them back to 3 to 3 card structure;
  margin: 0 auto;
  max-width: 1340px;
 

`;

const TopContainer = styled.section`
/* min-width: 1440px; */
min-height: 100px;
display: flex;
/* flex-direction: row; */
justify-content: space-between;
/* background-color: wheat; */
padding: 16px  ;
align-items: center;

.search{
  input{
    border: 1px solid #FF0909;
    min-width: 220px;
    height: 40px;
    border-radius: 5px;
    background-color:transparent ;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 19px; */
    padding: 10px;
    color: white;
    &::placeholder{
      color: white;
    }
  }
}

@media (0 < width < 699px ){
  display: flex;
  flex-direction: column;
  height: 120px;
}

`;

const FilterContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 100px;
    /* margin-left: 306px; */

`;

export const Button = styled.button`
    max-width: 116px;
    max-height: 31px;
    padding: 6px 12px;
    border-radius: 5px;
    background-color:#f71414 ;  // ${({isselected}) => (isselected ? "colorname" :"colorname")};
    color: white;
    cursor: pointer;
    transition: 0.3s background ease-in;

    &:hover{
      background-color: white;
      color: red;
      border: 1px solid red;
      transition: 0.3s background ease-in;
      /* outline: 1px solid white; */

    }
;


`;



export const BASE_URL = "http://localhost:9000";




const App = () => {
  const [data,setData] = useState(null);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [filteredData,setfilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await fetch(BASE_URL);
        const result  = await response.json();
        // console.log(result);
        setData(result);
        setfilteredData(result);
        console.log(data);
      }catch(error){
        console.error("error fetching data:",error);
        setError("Unable to fetch data");

      }finally{
        setLoading(false);
      }
    };
  fetchData();
},[])
  // console.log(data);
    
 
  if(error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

const searchFood = (event) => {
  const searchValue = event.target.value;
  if(searchValue == ""){
    setfilteredData(data);
  }else{
  const filter = data?.filter((food) => 
    food.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log("filter output = ",filter)

  setfilteredData(filter);
}
};

//there are buttons in the ui(all, breakfast,lunch,dinner). If i selected a dinner button dinner foods should be shown. 
// to put that functionality the below code is written.
const filteredFood = (type) => {
  if (type.toLowerCase() === "all") {
    setfilteredData(data);
    setSelectedBtn("all");
    return;
  }
  const filteredBySelectedbtnValue = data?.filter((food) => 
    food.type.toLowerCase().includes(type.toLowerCase())
  );
  setfilteredData(filteredBySelectedbtnValue);
  setSelectedBtn(type);

}
  return (
  <>
  <MainContainer>
    <TopContainer>
      <div className="logo">
        <img src="/images/logo.svg" alt="" />
      </div>
      <FilterContainer>
        {/* you can also store button name and type in an array and use map to  create buttons */}

          <Button onClick={(e) => filteredFood(e.target.innerText)} >All</Button>
          <Button onClick={(e) => filteredFood(e.target.innerText)}>Breakfast</Button>
          <Button onClick={(e) => filteredFood(e.target.innerText)}>Lunch</Button>
          <Button onClick={(e) => filteredFood(e.target.innerText)}>Dinner</Button>
      </FilterContainer>
      <div className="search">
        <input type="text" onChange={searchFood} name="" id=""  placeholder="Search food..."/>
      </div>
    </TopContainer>
  
  </MainContainer>
  <SearchResult data = {filteredData}/>
  </>
  )
};

export default App;

// const temp = [
//   {
//     name: "Boilded Egg",
//     price: 10,
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     image: "/images/egg.png",
//     type: "breakfast",
//   },
  

// ]