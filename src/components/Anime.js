import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Anime() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${id}`).then((res) => {
      console.log(res.data);
      setDetails(res.data);
    });
  }, [id]);
  return (
    <div>
      <p>
        <h1>{details.title}</h1>
        <p>{details.synopsis}</p>
        <p>
          <b>Type</b>: {details.type}
        </p>
        <p>
          <b>Trailer</b>:
          <div>
            {" "}
            <iframe
              width="560"
              height="315"
              src={details.trailer_url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </p>
        <p>
        </p>
      </p>
    </div>
  );
}
