import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Recommanded = ({ idMovie }) => {
  const [recommandation, setRecommandation] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${idMovie}/similar?api_key=af0a6e78cf2f5300726297b7f6e4d22c&language=en-US&page=1`,
      responseType: "json",
    }).then((res) => setRecommandation(res.data.results));
  }, [idMovie]);

  console.log(recommandation);

  return (
    <div>
      <p>test</p>
    </div>
  );
};

export default Recommanded;
