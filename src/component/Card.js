import React from "react";
import ml from "./ml.jpg";
function Card() {
  return (
    <div className="card">
      <img src={ml} className="card-img-top" alt="Not Found" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <button onClick={greetUser} href="/" className="btn btn-primary">
          Veiw
        </button>
      </div>
    </div>
  );
}
function greetUser() {
  console.log("Navin Kumar");
}

export default Card;
