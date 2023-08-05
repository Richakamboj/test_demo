import React,{useEffect, useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards";
const alanKey = '7fe0fefdd0b221b8874edcedeed6452d2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App=()=>{
const [newsArticles, setNewsArticles]=useState([]);
useEffect(()=>{
alanBtn({
    key:alanKey,
    onCommand:({command, articles})=>{      
        if(command ==='newHeadlines'){        
            setNewsArticles(articles);
        }
    }
})

},[])
    return(
        <>  
        <NewsCards articles={newsArticles}/>       
        </>
    )
}

export default App;