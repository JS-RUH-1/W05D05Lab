import { Link } from "react-router-dom";
import "./App.css";

function Home({ data }) {
  return (
    <>
      <br></br> <h2>أبطال الديجيتال </h2>
      <br></br>
      <br></br>
      <div className="HomeCardBig">
        {data.map((character) => (
          <div className="HomeCardSmall" key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <h3>{character.name}</h3>
              <img alt="" src={character.img}></img>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
  //   return (
  //     <>
  //       {data.map((character) => {
  //         <div key={character.id}>
  //           <div className="charDetailsDiv" key={character.id}>
  //             <Link to={`/characters/${character.id}`}>
  //               <h3>{character.name}</h3>
  //               <img src={character.img}></img>
  //             </Link>
  //           </div>
  //         </div>;
  //       })}
  //     </>
  //   );
}

export default Home;
