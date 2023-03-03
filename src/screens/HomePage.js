import React, { useState, useEffect } from "react";
import axios from "axios";
function HomePage() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://github.com/erik-sytnyk/movies-list/blob/master/db.json")
      .then((res) => {
        setData = res;
      });
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
