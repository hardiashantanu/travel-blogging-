// import React from "react";
// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// // import "survey-core/defaultV2.min.css";
// import { themeJson } from "./theme";
// // import "./index.css";
// import { json } from "./json";

// function Hotel() {
//     const survey = new Model(json);
//     survey.applyTheme(themeJson);
//     survey.onComplete.add((sender, options) => {
//         console.log(JSON.stringify(sender.data, null, 3));
//     });
//     return (<Survey model={survey} />);
// }

// export default Hotel;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Assuming your backend server is running locally
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from backend:', error);
        setError('Failed to fetch data from backend');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>External API Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
