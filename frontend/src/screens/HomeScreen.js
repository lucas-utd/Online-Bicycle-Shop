import React, { useEffect, useState } from "react";

import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {currentPage === 1
              ? products
                  .slice(0, 5)
                  .map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))
              : currentPage === 2
              ? products
                  .slice(5, 10)
                  .map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))
              : products
                  .slice(10)
                  .map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
          </div>
        </>
      )}
      <div className="row center">
        {currentPage && (
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              First
            </button>
            {"  "}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            {"  "}
            <button
              disabled={currentPage === 2}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            {"  "}
            <button
              disabled={currentPage === 3}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            {"  "}
            <button
              disabled={currentPage === 3}
              onClick={() => setCurrentPage(3)}
            >
              Last
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
