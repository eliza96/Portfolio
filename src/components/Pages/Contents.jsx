import { Link } from "react-router-dom";

const PAGES = [
  "cover",
  "contents",
  "about",
  "experiences",
  "projects",
  "contact",
];

function Contents() {
  return (
    <>
      <h2 className="pages_title">
        <span className="pages_title--first-part">c</span>
        <span className="pages_title--sec-part">ontents</span>
      </h2>
      <ul className="contents_nav">
        {PAGES.map((p, index) => {
          return (
            <li key={index}>
              <Link to={`/${p}`}>
                {p}
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path
                    fill="none"
                    d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
                  />
                </svg>
              </Link>

              <span className="devider_line"></span>
              <p className="page_index">
                <span className="page_index--zero">0</span>
                <span className="page_index--num">{index + 1}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Contents;
