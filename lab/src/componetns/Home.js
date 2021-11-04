import axios from "axios";
import "../App.css"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(props) {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        "https://digimon-api.herokuapp.com/api/digimon/"
      );
      setData(res.data);
    };

    fetchApi();
  }, []);

  return (
    <div className="continer">
      {data?.map((e, i) => (
        <div  key={i} >
          <h3 style={{textAlign:'center'}}>{e.name}</h3>
          <img
          className="chield"
            src={e.img}
            width={200}
            height={200}
            onClick={() => nav(`/detaiels/${e.name}`)}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
