import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrums = () => {
  return (
    <Breadcrumb className='mx-5 my-5'>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrums;
