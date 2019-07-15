import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

class CardPrice extends Component {
  render() {
    return (
      <div>
        <Header className="card-price">
          <Row>
            <Col span={12}>
              <h3> ราคาสุทธิ </h3>
            </Col>
            <Col style={{ textAlign: 'right' }} span={12}>
              <h3> 490 THB </h3>
            </Col>

          </Row>

        </Header>

      </div>
    );
  }
}
export default CardPrice;
