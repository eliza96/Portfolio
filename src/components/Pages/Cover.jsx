import ElhamPic from "../../assets/ELI.png";

function Cover() {
  return (
    <>
      <h1 className="cover__title">
        <p>Hi - I'm Elham</p>
        <p>I build things for web</p>
      </h1>
      <figure className="cover__img">
        <img src={ElhamPic} alt="my portrait" />
      </figure>
      <p className="cover__intro">This is my portfolio!</p>
    </>
  );
}

export default Cover;
