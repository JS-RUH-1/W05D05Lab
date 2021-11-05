import { useParams } from "react-router-dom";
import "./App.css";

function CharDetails({ data }) {
  const { id } = useParams();

  return (
    <div>
      {data
        .filter((character) => character.id === id)
        .map((character) => (
          <div>
            <br></br>
            <h3>{character.name}</h3>
            <div className="charDetailsCard" key={character.id}>
              <div className="charDetailsImg">
                <img alt="" src={character.img}></img>
                <img alt="" src={character.avatarImg}></img>
              </div>
              <div className="charDetailsP">
                <p>{character.details}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CharDetails;
