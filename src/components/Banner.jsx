import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = ({ searchData, handleSearch, setSearchData }) => {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 1500,
        easing: 'ease-in-out',
      });
  }, []);

  return (
    <div>
      <div
        className="lg:hidden hero min-h-screen"
        style={{ backgroundImage: 'url(https://i.ibb.co/BzYMdzg/bg-0.jpg)' }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white" >
            <h1 className="mb-5 text-6xl  font-bold">Welcome</h1>
            <h1 className="mb-3 text-2xl font-semibold">
              The great growling engine of change-technology....
            </h1>
            <p className="ml-52 mb-10">
              <small>-ALVIN TOFFLER</small>
            </p>
            <div className="justify-center rounded-md ">
              <form action="">
                <input
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                  type="search"
                  id="search"
                  placeholder="Search Now"
                  className="px-4 py-2 bg-transparent text-white border"
                />

                <button
                  onClick={handleSearch}
                  type="button"
                  className="text-white font-bold bg-cyan-900 px-4 py-2  rounded"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:flex hero min-h-screen bg-base-200"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/BzYMdzg/bg-0.jpg"
            className="max-w-lg lg:max-w-xl rounded-lg shadow-2xl "
            alt="Banner" data-aos="fade-down-left"
          />

          <div className="text-center ml-10 mt-6 " data-aos="fade-down-right">
            <h1 className="mb-3 text-5xl font-serif font-semibold">
              The great growling engine of change <br />-technology.
            </h1>
            <p className="ml-52 text-xl  mb-10">
              <small>-ALVIN TOFFLER</small>
            </p>

            <div className="hidden lg:flex justify-center 5 rounded-md ">
              <form action="">
                <input
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                  type="search"
                  id="search"
                  placeholder="Search Now"
                  className="px-4 py-2 bg-transparent text-black border"
                />

                <button
                  onClick={handleSearch}
                  type="button"
                  className="text-white font-bold bg-cyan-900 px-4 py-2  rounded"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10px] bg-sky-800 "></div>
    </div>
  );
};

export default Banner;
