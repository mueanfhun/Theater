import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';
import moment from 'moment';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Ticket extends Component {

  convertChange = () => {
   const Change = this.props.detailChange;
   let result =  Object.keys(Change).map((element,i) =>(
    <p key={i}>{`${element}: ${Change[element]}`}</p>
  ))
   return result
  }
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '50px' }}>
        <Card style={{ width: 350 }}>
          <h3 className="ticket">
          ชื่อโรงหนัง
            {' '}
            <br />
            {' '}
            Digital Cinema
          </h3>
          <h3 className="ticket">
            ชื่อหนัง
            {' '}
            <br />
            {' '}
            {this.props.informations.name}

          </h3>
          <div>
            <Row>
              <Col span={12}>
                {' '}
                <h3 className="ticket1">
                  วัน
                  {' '}
                  <br />
                  {' '}
                  {moment(this.props.dates).format('DD-MMM-YYYY')}
                </h3>
              </Col>
              <Col span={3}>
                {' '}
                <h3 className="ticket1">
                  รอบ
                  {' '}
                  <br />
                  {' '}
                  {this.props.detailTicket.time}
                </h3>
              </Col>
            </Row>
          </div>

          <h3 className='ticket-bottom'>
            จำนวนที่หนัง
            {' '}
            <br />
            {' '}
            <h3 style={{ textAlign: 'center' }}>{this.props.detailseat}</h3>
          </h3>
          <br />
          <h4>ปล.รายละเอียดเงินทอน</h4>
          {this.convertChange()}
        </Card>
        <Link to={'/'}>
          <Button style={{textAlign:'right'}}>เสร็จสิ้น</Button>
        </Link>
      </div>
    );
  }
}

export default Ticket;
