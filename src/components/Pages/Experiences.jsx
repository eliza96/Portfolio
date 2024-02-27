import { useState } from "react";
function Experiences() {
  return (
    <>
      <h2 className="pages_title">
        <span className="pages_title--first-part">e</span>
        <span className="pages_title--sec-part">xperiences</span>
      </h2>
      <div className="experiences__items">
        <div className="experiences__item">
          <span className="experiences__item_date">2019 – 2021</span>
          <h4 className="experiences__item_title">Front-End Developer</h4>
          <p className="experiences__item_desc">
            I developed the user interface section for the websites as a member
            of the development team. HTML5, CSS, Bootstrap, Javascript, and
            JQuery were my main areas of expertise.
          </p>
        </div>
        <div className="experiences__item center">
          <span className="experiences__item_date">2017 – 2019</span>
          <h4 className="experiences__item_title">Computer Technician</h4>
          <p className="experiences__item_desc">
            My responsibilities as a technician at this company included
            computer hardware and software troubleshooting and repairs. The
            duties I performed included the replacement of broken parts as well
            as the installation of operating systems, drivers, and software
            required.
          </p>
        </div>
        <div className="experiences__item">
          <span className="experiences__item_date">2015 – 2017</span>
          <h4 className="experiences__item_title">Quality Control Expert</h4>
          <p className="experiences__item_desc">
            As a member of this company, I was responsible for assembly and
            quality control of electronic products.
          </p>
        </div>
      </div>
    </>
  );
}

export default Experiences;
