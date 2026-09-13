import React from 'react';

const Nav = () => {
    return (
        <div>
           <nav className="flex  justify-between mt-5  mx-25">

     <div>
       <img src="src\assets\logo-text.png" alt="" />
       </div>
       
      <div className="flex  gap-4"> 
     <button><a className=" text-[#DB2777]">Home</a></button> 
      <button><a>Technologies</a></button>
      <button><a>Projects</a></button>
      <button><a>About</a></button>
      <button><a>Contact</a></button>
      </div>

      <div className="flex gap-4">
        <button>Sign in</button>
        <button className="px-3 py-2 rounded-2xl bg-[#D91B7E]">Sign Up</button>
      </div>
     

   </nav> 
        </div>
    );
};

export default Nav;