import React, { Component } from 'react';
import {
  Tabs, Row, Col, Icon, Button,
} from 'antd';
import moment from 'moment'
import Seat from './Seat'
const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

class ShowTime extends Component {

  constructor() {
    super();
    this.state = {
      isHidden: true,
      selectDate:'',
      selectTime:'',
      seatDetail:[]
    };
  }

  toggleHidden(date,time,showtime) {
    this.setState({
      isHidden: !this.state.isHidden,
      selectDate: date,
      selectTime: time,
      seatDetail: showtime
    });
    console.log("showtime",showtime);
    console.log(time);
  }
  

  listTime = (showtime,date) => (
    
        showtime.map((element,j) =>
        (
          <Col className="col-time" span={18} push={6} key={j}>
          <div className="button-time">
            <Row gutter={12}>
              <Col span={3}>
                <Button onClick={this.toggleHidden.bind(this,date,element.time,element)}>{element.time}</Button>
              </Col>
            </Row>
          </div>
        </Col>
        ))
  )

  listDay = (date) => (
    date.map((element,i) => (
      <TabPane tab={moment(element.date).format('DD-MMM-YYYY')} key={`${i}`}>
        <div style={{ backgroundColor: 'white' }}>
          <Row style={{ height: '150px' }}>
              {this.listTime(element.theater,element.date)}
            <Col className="text-time" span={6} pull={18}>
          Digital Cinema
            </Col>
          </Row>
       </div>
    </TabPane>
    ))
  )


  render() {
    return (
      <div className="card-container">
        <Tabs type="card" onChange={callback}>
          {this.listDay(this.props.showtime)}
        </Tabs>
        {!this.state.isHidden && <Seat date={this.state.selectDate} time={this.state.selectTime} id={this.props.movies.id} seatDetail={this.state.seatDetail} />}
      </div>
      
    );
  }
}
export default ShowTime;
