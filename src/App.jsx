import React from "react";

function App() {

  return (
     <div className="max-w-6xl mx-auto  py-1">
      <div className="flex space-x-20">
        <div className="py-3">
        <img src="./image/Image.png" alt="" className="w-160  h-auto translate-[20px]"/>
      </div>
      <div>
        <div>
        <h1 className="text-4xl font-bold leading-snug">Exploration and<br/>inspiration</h1>
        <div>
          <p className="text-2xl text-gray-600 py-4">
            Lorem ipsum dolor sit amet, consecteur<br/>
          adipiscing elit. Faucibus in libero risus<br/>
          semper habitant arcu eget. Et integer<br/>
          facilisi eget diam.
          </p>
          <button className="border px-10 py-1 bg-black text-white rounded-md hover:bg-gray-500">
            <a href="">Explore</a>
          </button>
        </div>
      </div >
      <div className="py-15">
        <span className="text-gray-400 font-bold text-2xl">01</span>
        <p className="text-2xl text-gray-600">
          Lorem ipsum dolor sit amet, consecteur<br/>
          adipiscing elit. Faucibus in libero risus<br/>
          semper habitant arcu eget. Et integer<br/>
          facilisi eget.
        </p>
      </div>
      <div>
        <span className="text-gray-400 font-bold text-2xl">02</span>
        <p className="text-2xl text-gray-600">
          Lorem ipsum dolor sit amet, consecteur<br/>
          adipiscing elit. Faucibus in libero risus<br/>
          semper habitant arcu eget. Et integer<br/>
          facilisi eget.
        </p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App;
