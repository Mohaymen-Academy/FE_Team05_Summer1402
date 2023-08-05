const LowerHeader = () => {
  return (
    <div className="hidden md:flex items-center bg-ft-white h-[40px]">
      <div className="w-full h-full overflow-x-auto">
        <div className="flex justify-center h-full">
          {/* categories */}
          <ul className="flex justify-between items-center gap-[2rem] text-slate-600">
            <li>
              <a href="#banner1">مذهبی</a>
            </li>
            <li>
              <a href="#banner2">برترین</a>
            </li>
            <li>
              <a href="#banner3">پرفروش هفته</a>
            </li>
            <li>
              <a href="#">سبک زندگی</a>
            </li>
            <li>
              <a href="#">اخبار</a>
            </li>
            <li>
              <a href="#">تبلیغ گسترده</a>
            </li>
            <li>
              <a href="#">سروش پلاس</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LowerHeader;
