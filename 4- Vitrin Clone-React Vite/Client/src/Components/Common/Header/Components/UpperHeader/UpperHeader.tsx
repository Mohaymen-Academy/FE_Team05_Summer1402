import logo from '../../../../../assets/logo.png';
import {SearchBar} from '../Searchbar';

const UpperHeader = () => {
  return (
    <header>
      <div className="flex justify-between items-center w-full bg-blue-600 box-border h-[80px]">
        <div className="w-full flex justify-between items-center h-full">
          {/* logo */}
          <div className="w-2/5 m-auto h-full flex justify-center">
            <div className="h-full overflow-hidden flex flex-col items-center justify-center w-24">
              <a href="#" className="h-[55%]">
                <img src={logo} alt="logo" className="h-10 w-10" />
              </a>
              <p className="text-white text-sm">سروش پلاس</p>
            </div>
          </div>
          {/* items */}
          <div className="flex justify-center h-full">
            <ul className="flex  px-3 sm:px-5 md:px-0 justify-between items-center gap-[3rem] md:gap-[4rem] text-white">
              <li>
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">دانلود</a>
              </li>
            </ul>
          </div>
        </div>
        <SearchBar />
        {/* search bar */}
        <div className="hidden md:flex items-center justify-center w-full h-full">
          <div className="relative w-[40%]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <button
                type="submit"
                className="text-white bg-white hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
              >
                <svg
                  className="w-4 h-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
            <input
              className="block w-full p-[11px] pl-10 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none"
              placeholder="جستجو در ویترین"
              dir="rtl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
