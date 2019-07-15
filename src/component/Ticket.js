import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

class Ticket extends Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };


    return (
      <div style={{ background: '#ECECEC', padding: '50px' }}>
        <Card style={{ width: 350 }}>
          <h3 className="ticket">ชื่อโรงหนัง</h3>
          <h3 className="ticket">ชื่อหนัง</h3>
          <div>
            <Row>
              <Col span={12}>
                {' '}
                <h3 className="ticket1">วัน</h3>
              </Col>
              <Col span={3}>
                {' '}
                <h3 className="ticket1">รอบ</h3>
              </Col>
            </Row>
          </div>

          <h3 className="ticket-bottom ">จำนวนที่หนัง</h3>
          <br />
          <h4>ปล.รายละเอียดเงินทอน </h4>
        </Card>


      </div>
    );
  }
}

export default Ticket;
