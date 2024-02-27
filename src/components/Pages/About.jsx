import AboutMe from "../../assets/test.gif";
function About() {
  return (
    <>
      <h2 className="pages_title">
        <span className="pages_title--first-part">About</span>
        <span className="pages_title--sec-part">me</span>
      </h2>
      <h2 className="about__quote">
        <blockquote>
          <p>
            &#34; Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium veritatis fugit, architecto in cupiditate. &#34;
          </p>
        </blockquote>
        <small className="about__auther">&#45; Elham zarei</small>
      </h2>
      <h3 className="about__title">Hi! I'm Elham.</h3>
      <p className="about__description first__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        veritatis fugit, architecto in cupiditate aperiam eos nam impedit
        mollitia non eum ad distinctio dolores, est dolor, qui excepturi
        molestiae! Quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.
      </p>
      <p className="about__description second__desc">
        Quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laudantium veritatis fugit, architecto in cupiditate aperiam eos nam
        impedit mollitia non eum ad distinctio dolores, est dolor, qui excepturi
        molestiae! Quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.
      </p>
      <figure className="about__figure">
        <img src={AboutMe} alt="A drwing gif" />
      </figure>
    </>
  );
}

export default About;
