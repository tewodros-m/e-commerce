import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import Product from "../components/Product";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";
import ProductCarousel from "../components/ProductCarousel";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error, page, pages } = productList;
  const [searChParams] = useSearchParams();
  useEffect(() => {
    dispatch(listProducts(`?${searChParams.toString()}`));
  }, [dispatch, searChParams]);

  return (
    <div>
      {!searChParams.get("keyword") && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            keyword={searChParams.get("keyword")}
            pages={pages}
            page={page}
          />
        </div>
      )}
    </div>
  );
}
