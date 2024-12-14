import React, { useEffect, useState } from 'react';
import FormContainer from '../components/FormContainer';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('user@test.com');
  const [password, setPassword] = useState('abcd');
  const [confirmPassword, setConfirmPassword] = useState('abcd');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect')
    ? searchParams.get('redirect')
    : '/register';

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            required
            value={name}
            placeholder='Enter Name'
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email' className='mt-2'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            required
            value={email}
            placeholder='Enter Email'
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password' className='mt-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            required
            value={password}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='passwordConfirm' className='mt-2'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            required
            value={confirmPassword}
            placeholder='Enter Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-2'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;
