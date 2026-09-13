import Nav from "./Component/Nav"

import Players from "./Component/Players/Players";
import { Suspense } from "react";
import type { Iplayer } from "./types/playerType";
import Banner from "./Component/Banner";



const playersFetch = async():Promise<Iplayer[]> =>{
    const res = await fetch('/data.json');
    const data = await res.json();

     return data ;
  }

 
function App(){
  
 const playersPromise = playersFetch();
  
  

 return(
    <>
    
   
   <Nav></Nav>
   <Banner></Banner>
   

    <Suspense fallback={<h1>Loading...</h1>}>
   <Players playersPromise = {playersPromise}></Players>
   </Suspense>

    </>
  )
}

export default App
