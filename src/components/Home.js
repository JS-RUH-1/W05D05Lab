import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming").then((res) => {
      setData(res.data.top);
    });
  }, []);
  return (
    <div className="center">
      <div className="row row-cols-4 gap-4">
        {data.map((item) => (
          <div className="col">
            <Link to={`/anime/${item.mal_id}`}>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={item.image_url}
                  height="250px"
                  class="card-img-top"
                />
                <div class="card-body">
                  <p class="card-text">{item.title}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
