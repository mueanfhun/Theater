import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Col,Button } from 'antd';
import DefaultHeader from '../layout/DefaultHeader';
import ListMovie from '../component/ListMovie';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Main extends Component {

  state = {
    dataMovies: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/movies`)
      .then(res => {
        const dataMovies = res.data;
        console.log("=====>",dataMovies);
        this.setState({ dataMovies });
      })
  }

  render() {
    return (
        <div>
        <DefaultHeader />
        <ListMovie list={this.state.dataMovies}/>
      </div>
    );
  }
}

export default Main;
