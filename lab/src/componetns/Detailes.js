import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../App.css"

function Detailes(props) {
  const [data, setData] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        `https://digimon-api.herokuapp.com/api/digimon/name/${name}`
      );
      setData(res.data);
    };

    fetchApi();
    console.log(data);
  }, []);

  return (
    <div className="flexs">
      {data?.map((e, i) => (
        <div key={i}>
          <h1 style={{textAlign:'center'}}>{e.name}</h1>
          <img src={e.img} width={300} height={300} className="chield"/>
          <h4 style={{textAlign:'center'}}> Level: {e.level}</h4>
        </div>
      ))}

    </div>
  );
}

export default Detailes;
