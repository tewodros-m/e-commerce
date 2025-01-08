import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
const SearchBox = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [keyWord, setKeyword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyWord) {
      navigate(`/?keyword=${keyWord}&page=1`);
    } else {
      navigate(pathname);
    }
  };
  return (
    <Form
      style={{
        gap: '6px',
      }}
      onSubmit={submitHandler}
      inlist='true'
      className='d-flex '
    >
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='p-2 text-white bg-dark'
      >
        Submit
      </Button>
    </Form>
  );
};

export default SearchBox;
