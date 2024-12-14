import React, { useEffect, useState } from 'react';
import FormContainer from '../components/FormContainer';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails } from '../actions/userActions';

function UserUpdateScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const { id: userId } = useParams();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  useEffect(() => {
    if (!user.name || user._id !== Number(userId)) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, userId, user]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Update user</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
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
            <Form.Group controlId='isadmin' className='mt-2'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary' className='mt-2'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default UserUpdateScreen;
