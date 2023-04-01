import React from "react";



const Landing = () => {

    return (
        
        <>
       <div class="bg-amber-400 p-4 flex justify-between items-center">
  <div class="flex items-center">
    <img src="https://ateressi.sirv.com/Untitled%20design.png" height="100"width="80" alt="Logo" class="mr-2"/>
    <a href="#" class="inline-block p-2 amber-700 hover:text-amber-700 mr-2">Home</a>
    <a href="#" class="inline-block p-2 amber-700 hover:text-amber-700">About</a>
  </div>

  <div class="hidden md:block">
    <a href="#" class="inline-block p-2 text-amber-700 hover:text-indigo-100 mr-2">Login</a>
    <a href="#" class="inline-block py-2 px-4 text-yellow-700 bg-amber-400 hover:bg-amber-700 hover:text-yellow-800 rounded transition ease-in duration-150">Signup</a>
  </div>
</div>
<div class="md:flex justify-between py-20 px-10 bg-amber-400 text-indigo-100">
  <div class="md:w-1/2 mb-10 md:mb-0">
    <h2 class="text-2xl md:text-4xl lg:text-6xl text-white mb-6">Made by students, FOR students!</h2>
    <p class="mb-6 text-white">A world where students are never hungry!</p>
    <a href="#" class="inline-block rounded text-lg bg-orange-400 amber-700 hover:bg-gray-300 mr-2 py-3 px-6 ">Learn More</a>
    <a href="#" class="inline-block rounded text-lg bg-orange-400 hover:bg-orange-300 py-3 px-6">Get Started</a>
  </div>
  <div class="md:w-1/2">
    <img src="https://2012.ateneo.edu/sites/default/files/gallery-image/_MG_0207.JPG" alt="Happy Doggo" class="w-full rounded shadow-2xl"/>
  </div>
</div>
<div class="md:flex py-16 px-10 bg-amber-300 text-amber-700 text-center">
  
</div>

<div class=" p-10 bg-amber-400 text-indigo-300 flex justify-between">
  <div class="md:w-1/2">
    <h3 class="text-lg mb-2">Join the Newsletter</h3>
    <form class="flex">
      <input type="email" class="w-full rounded py-3 px-4 outline-none focus:bg-amber-400"/>
      <button class="bg-red-300 hover:bg-red-400 text-red-800 rounded-r px-4">Join</button>

    </form>

  </div>
  <div class="flex items-center">
    Ateneo De Davao University
  </div>
</div>

        </>
                
            
    );
};

export default Landing;