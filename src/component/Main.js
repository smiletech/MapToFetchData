import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";
import ReactPaginate from "react-paginate";

const BaseUrl = "https://fakestoreapi.com/products";

function Main() {
  const [Product, setProduct] = useState([]);
  const [ID, setID] = useState(1);
  const [endID, setendID] = useState(10);
  const pageLimit = 6;
  const dataLimit = 5;
  let data = Product;
  const [pages] = useState(Math.round(data.length / dataLimit));
  // const [currentPage, setCurrentPage] = useState(ID);

  useEffect(() => {
    axios.get(BaseUrl).then((response) => {
      if (response.status === 200) setProduct(response.data);
    });
  }, [ID]);

  function goToNextPage() {
    setID((page) => page + 1);
  }

  const goToPreviousPage = () => {
    setID((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setID(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = ID * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((ID - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  console.log(getPaginationGroup());

  return (
    <>
      <div className="main">
        {Product !== null &&
          Product.filter((ele, index1) => ele.id >= ID).map((item, index) => {
            return <Card key={index} index={item.id - 1} />;
          })}
      </div>

      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${ID === 1 ? "disabled" : ""}`}
        >
          prev
        </button>
        {/* show page numbers */}

        {/* {
        getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`mx-2 paginationItem ${
              ID === item && item >= 0 ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))
        } */}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${ID === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Main;
