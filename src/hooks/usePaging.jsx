import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pagingAudio from "../assets/Turning-Paper.mp3";

const PAGES = [
  "cover",
  "contents",
  "about",
  "experiences",
  "projects",
  "contact",
];

const audio = new Audio(pagingAudio);

function usePaging(isNextPage, setIsNextPage) {
  ////// GETING THE PAGE NAME FROM URL
  const location = useLocation();
  const pathName = location.pathname;
  const pathnameSegments = pathName.split("/");
  const PageName = pathnameSegments[pathnameSegments.length - 1];

  ////// STORE PAGE NAME IN A STATE TO APPLY CHANGES
  const [currPage, setCurrPage] = useState(PageName);

  const navigate = useNavigate();

  const nextPageHandler = () => {
    setIsNextPage(true);
    const currentPageIndex = PAGES.indexOf(currPage);
    const next = PAGES[currentPageIndex + 1];

    // if (next) {
    //    navigate(`/${next}`);
    //    audio.play();
    //    setCurrPage(next);
    //    setIsNextPage(false);
    // }
    audio.play();

    if (next) {
        setTimeout(() => {
        navigate(`/${next}`);
        setCurrPage(next);
        setIsNextPage(false);
      }, 500);
    }
  };

  const prevPageHandler = () => {
    const currentPageIndex = PAGES.indexOf(currPage);
    const prev = PAGES[currentPageIndex - 1];
    if (prev) {
      audio.play();
      navigate(`/${prev}`);
      setCurrPage(prev);
    }
  };

  // console.log(currPage);

  return { nextPageHandler, prevPageHandler, currPage };
}

export default usePaging;
