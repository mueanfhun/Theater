import React, { Component } from 'react';
import { Card, Row, Col,Button } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const { Meta } = Card;

class ListMovie extends Component {
 
  listMovie = () => {
    const lists = this.props.list.map((element, i) => ( 
      <div className="list-movie">
        <Col span={6}  className="card-movie">
        <Link to={{
          pathname:'/Dashboard',
          state: {
            detail: element
          }
        }}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                <img alt="example" src={require(`../img/imgmovie/${element.image}`)} />
              }
              >
                <Meta title={element.name} />
              </Card>
              </Link>    
      </Col>
      </div>        
    ));
    return lists
  }


  render() {
    return (
      <Row gutter={8} style={{textAlign:'center'}}>
        {this.listMovie()}
      </Row>
    );
  }
}

export default ListMovie;
