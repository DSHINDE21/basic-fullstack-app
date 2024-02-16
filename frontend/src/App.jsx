import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    axios
      .get("api/investors")
      .then((response) => {
        setInvestors(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <h1>Basic Full Stack App</h1>
      <h3>Investors Count: {investors.length}</h3>
      <div className="investor-container">
        {investors.map((investor) => (
          <div className="investor-box" key={investor.id}>
            <h4>Investor {investor?.id}</h4>
            <h6>Name: {investor?.name}</h6>
            <h6>City: {investor?.city}</h6>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
