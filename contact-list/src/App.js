import React, { useEffect, useState } from "react";
import './App.css' 
import ContactCard from "./components/ContactCard";
import useStyles from './Styles.js';
const App =()=>{

const [results, setResults] = useState([]);
const classes = useStyles();
useEffect(()=>{
fetch('https://randomuser.me/api/?results=50')
.then(response =>response.json())
.then(data => {
  setResults(data.results)
})


},[])
return(

  <div className={classes.conatiner}>
 {results.map((result,index) =>{
    return(
      <ContactCard key={index}
      avatarUrl={result.picture.large}
      name={result.name.first}
      email={result.email}
      age={result.dob.age}/>
    )

  })}
  </div>
 


)
 }

 export default App;