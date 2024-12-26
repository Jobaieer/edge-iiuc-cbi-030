import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row lg:flex-row  gap-5">
      <div className="relative">
        <div className="carousel w-[500px] h-[233px] bg-gradient-63deg rounded-box p-4">
          <div
            id="item1"
            className="carousel-item w-full flex flex-col gap-2 p-5"
          >
            <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
            <p className="text-white text-lg ">
              “There is more treasure in books than in all the <br />
              pirate’s loot on Treasure Island.”
            </p>
            <p className="text-white text-lg text-right">-Walt Disney</p>
          </div>
          <div
            id="item2"
            className="carousel-item w-full flex flex-col gap-2 p-5"
          >
            <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
            <p className="text-white text-lg ">
              “There is more treasure in books than in all the <br />
              pirate’s loot on Treasure Island.”
            </p>
            <p className="text-white text-lg text-right">-Walt Disney</p>
          </div>
          <div
            id="item3"
            className="carousel-item w-full flex flex-col gap-2 p-5"
          >
            <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
            <p className="text-white text-lg ">
              “There is more treasure in books than in all the <br />
              pirate’s loot on Treasure Island.”
            </p>
            <p className="text-white text-lg text-right">-Walt Disney</p>
          </div>
          <div
            id="item4"
            className="carousel-item w-full flex flex-col gap-2 p-5"
          >
            <h1 className="text-white font-medium text-2xl">Today’s Quote</h1>
            <p className="text-white text-lg ">
              “There is more treasure in books than in all the <br />
              pirate’s loot on Treasure Island.”
            </p>
            <p className="text-white text-lg text-right">-Walt Disney</p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2 absolute bottom-6 right-44">
          <a
            href="#item1"
            className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
          >
            1
          </a>
          <a
            href="#item2"
            className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
          >
            2
          </a>
          <a
            href="#item3"
            className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
          >
            3
          </a>
          <a
            href="#item4"
            className="btn btn-xs rounded-badge bg-transparent text-transparent hover:bg-white"
          >
            4
          </a>
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="bg-gradient-63deg rounded-l-box flex justify-center items-center">
            <div className="text-white -rotate-90 transform text-xl font-medium w-32"> 
              New Arrivals
            </div>
          </div>
          <div className="carousel carousel-center bg-neutral  max-w-2xl space-x-4 p-4 h-[233px] rounded-r-box">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
