import "./App.css";

function App() {
  const data = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <>
      <div className="container-target">
        <div className="conatiner-img">
          <img
            src="./assets/images/avatar-jessica.jpeg"
            alt="Avatar img the jessica Randa"
          />
        </div>
        <h2 className="title-name">Jessica Randall</h2>{" "}
        <span className="country">London, United Kingdom </span>
        <p className="description">
          {'"Front-end developer and avid reader."'}
        </p>
        <div className="buttoms-container">
          {data.map((data) => {
            return <button key={data}>{data}</button>;
          })}
        </div>
      </div>
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Nixon Parra</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
