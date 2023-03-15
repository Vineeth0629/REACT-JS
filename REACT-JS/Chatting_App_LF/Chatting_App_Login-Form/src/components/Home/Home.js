import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Hi Friends, This is vineeth from Moback...</h1>
      <h3>Thank you</h3>
    </Card>
  );
};

export default Home;
