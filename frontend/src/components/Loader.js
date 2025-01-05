import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "50px",
          height: "50px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
