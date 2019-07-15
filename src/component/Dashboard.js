import React, { Component } from 'react';
import {
  Layout, Button,
} from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Ticket from '../img/ticket.png';
import DefaultHeader from '../layout/DefaultHeader';
import ShowTime from './showtime';

const { Content, Footer, Sider } = Layout;

class Dashboaed extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <div>
        <Layout>
          <DefaultHeader />
          <Content style={{ padding: '0 50px', margin: '16px 0' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={300} style={{ background: '#fff' }}>
                <Layout>
                  <img src={require(`../img/imgmovie/${this.props.location.state.detail.image}`)} alt="qe" />
                </Layout>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <p className="H1">{this.props.location.state.detail.name}</p>
                <p className="H2">Release Date: 03 July 2019</p>
                <div className="H3">
                  <div className="Genre">
                    <p>
                  Genre:
                      {this.props.location.state.detail.genre}
                    </p>
                  </div>
                  <div className="rate">
                    <p>
                  Rate:
                      {this.props.location.state.detail.Rate}
                    </p>
                  </div>
                  <div className="system">
                    <p>
                      {this.props.location.state.detail.timemovies}
                  Mins
                    </p>
                  </div>
                </div>
                <div>
                  <h2> SYNOPSIS </h2>
                  <p>
                    {this.props.location.state.detail.description}
                  </p>
                </div>
                <div>
                  <Button className="button-buy" onClick={this.toggleHidden.bind(this)} type="primary">
                    <img className="img-ticket" src={Ticket} />
                    GET TICKET
                  </Button>
                </div>
              </Content>
            </Layout>
          </Content>
        </Layout>
        {!this.state.isHidden && <ShowTime showtime={this.props.location.state.detail.showingTime} movies={this.props.location.state.detail} />}
      </div>
    );
  }
}
export default Dashboaed;
