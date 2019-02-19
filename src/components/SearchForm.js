import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
  return (
    <Form inline>
      <Form.Group controlId="formInlineEmail">
        <Form.Control type="search" placeholder="enter something..." />
      </Form.Group>
      {' '}
      <Button type="submit">
        search
      </Button>
    </Form>
  );
}

export default SearchForm;
