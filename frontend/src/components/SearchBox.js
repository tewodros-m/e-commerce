import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const SearchBox = () => {
  const history = useHistory();
  const [keyWord, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyWord) {
      history.push(`/?keyword=${keyWord}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
};

export default SearchBox;
