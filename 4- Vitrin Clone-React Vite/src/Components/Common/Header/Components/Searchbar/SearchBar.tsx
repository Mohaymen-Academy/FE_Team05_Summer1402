import {useRef, useEffect} from 'react';

const SearchBar = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchSVG = useRef<HTMLElement>(null);
  const searchBtn = useRef<HTMLButtonElement>(null);
  let flag = false;
  useEffect(() => {
    if (searchBtn.current != null) {
      searchBtn.current.addEventListener('click', (e: Event) => {
        if (flag) return;
        e.stopPropagation();
        if (searchInput.current != null) {
          if (!flag) {
            if (searchSVG.current != null) {
              searchSVG.current.classList.remove('invert');
            }
            if (searchBtn.current != null) {
              searchBtn.current.classList.add('hidden');
            }
            if (searchInput.current != null && searchBtn.current != null) {
              searchInput.current.classList.remove('hidden');
              searchBtn.current.classList.remove('bg-blue-600');
              flag = true;
            }
          }
        }
      });
    }
    if (searchInput.current != null) {
      searchInput.current.addEventListener('click', (e: Event) => {
        e.stopPropagation();
      });
    }

    document.addEventListener('click', (e: Event) => {
      e.stopPropagation();
      if (flag) {
        if (searchSVG.current != null) {
          searchSVG.current.classList.add('invert');
        }
        if (searchBtn.current != null) {
          searchBtn.current.classList.remove('hidden');
        }
        if (searchInput.current != null && searchBtn.current != null) {
          searchInput.current.classList.add('hidden');
          searchBtn.current.classList.add('bg-blue-600');
          searchInput.current.value = '';
          flag = false;
        }
      }
    });
  }, []);

  return (
    <div className="flex md:hidden justify-start items-center w-full">
      <div className="relative w-[70%] mx-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <button ref={searchBtn} type="submit" className="bg-blue-600 font-medium rounded-lg text-sm px-1 py-2">
            <svg
              id="searchSVG"
              className="w-6 h-8 text-black filter invert"
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
          ref={searchInput}
          className="hidden w-full p-[11px] pl-10 text-xs border border-gray-300 rounded-lg bg-white focus:outline-none"
          placeholder="جستجو"
          dir="rtl"
        />
      </div>
    </div>
  );
};

export default SearchBar;
