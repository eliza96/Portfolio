import { Outlet } from "react-router-dom";
import PagingBtn from "../Button/PagingBtn";
import usePaging from "../../hooks/usePaging";
import { useCallback, useEffect, useState } from "react";

export default function Layout() {
  const [isNextPage, setIsNextPage] = useState(false);
  const { nextPageHandler, prevPageHandler, currPage } = usePaging(
    isNextPage,
    setIsNextPage
  );

  console.log(currPage);

  const memoizedNextPageHandler = useCallback(nextPageHandler, [
    nextPageHandler,
  ]);
  const memoizedPrevPageHandler = useCallback(prevPageHandler, [
    prevPageHandler,
  ]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        memoizedNextPageHandler();
      } else {
        memoizedPrevPageHandler();
      }
    };
    window.addEventListener("wheel", handleScroll);
    // Remove the event listener
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [nextPageHandler, prevPageHandler]);

  return (
    <div className="page-container">
      <div
        className={`pages fold ${currPage} ${
          isNextPage ? "next-paging-action" : "prev-paging-action"
        }`}
      >
        <Outlet />
      </div>
      {/* <PagingBtn isNextPage={isNextPage} setIsNextPage={setIsNextPage} /> */}
    </div>
  );
}
