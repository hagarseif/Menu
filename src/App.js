import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Category from "./component/Category";
import { Container } from "react-bootstrap";
import CardList from "./component/CardList";
import menuItems from "./data";
import { useState } from "react";

function App() {
  const [item,setItem]=useState(menuItems)

  const handelFilter=(cate)=>{
    if(cate==="الكل"){
    setItem(menuItems)
    }
    else{
      const newMenu=menuItems.filter(i=>i.category === cate)
      setItem(newMenu)
    }
  }
  //to get uniqe category
  const category=['الكل',...new Set(menuItems.map(i=>i.category))]
  
  const handelSearch=(w)=>{
    if(w!==''){
    const newItem=menuItems.filter(i=>i.name.includes(w))
    setItem(newItem)
    }
  }
  return (
    <div className="App">
      <Navbar handelSearch={handelSearch}/>
      <Container>
          <Header/>
          <Category handelFilter={handelFilter} category={category}/>
          <CardList item={item}/>
      </Container>
     
    </div>
  );
}

export default App;
