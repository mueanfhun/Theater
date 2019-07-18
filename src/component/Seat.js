import React, { Component } from 'react'
import { Card, Col, Row, InputNumber, Button, Layout, Modal, Input, Alert } from 'antd';
import normal from '../img/normal.png';
import Honeymoon from '../img/honeymoon.png';
import Pair from '../img/pair.png';
import axios from 'axios';
import Ticket from './Ticket';

const { Header } = Layout;

class Seat extends Component {

    state = { 
        couteSeats:0,
        visible: false, 
        normalPrice:0,
        honeymoonPrice:0,
        pairSeatPrice:0 ,
        countNormal:0,
        countHoneymoon:0,
        countPair:0,
        payment:0,
        position:0,
        loading: false,
        isHidden: true,
        change:{

            1000: 0,
            500: 0,
            100: 0,
            50: 0,
            20: 0,
            10: 0,
            5: 0,
            2: 0,
            1: 0,

        }
        };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = () => {
      this.setState({
        visible: false,
        isHidden: !this.state.isHidden,
      });
      setTimeout(() => {
        axios.post(`http://localhost:8081/reserver`,{

                id: this.props.id,
                time: this.props.time,
                countNormal: this.state.countNormal,
                countHoneymoon: this.state.countHoneymoon,
                countPair: this.state.countPair,
                date: this.props.date,
                totalPrice: this.state.normalPrice + this.state.honeymoonPrice + this.state.pairSeatPrice,
                payment: this.state.payment,
            
        }).then(response => {
            this.setState({
               change : response.data
            })
            alert("payment Confirmed")
          }).catch(err => {
              alert("fail to connect service")
          }) 
    }, 3000);
    }
  
    handleCancel = e => {
      this.setState({
        visible: false,
      });
    };

    selectNormal = (price,value) =>{
        const temp = value*price ;
         this.setState({
            normalPrice : temp,
            countNormal: value
         })
      }

      selectHoneymoon = (price,value) =>{
        const temp = value*price ;
         this.setState({
            honeymoonPrice : temp,
            countHoneymoon : value
         })
      }

      selectPair = (price,value) =>{
        const temp = value*price ;
         this.setState({
            pairSeatPrice : temp,
            countPair : value
         })
      }

      calculat = (money,value) => {
          this.setState({
            payment : value,
          })
          this.countSeate()
      }

      countSeate = () => {
        this.setState({
            couteSeats: this.state.countNormal+this.state.countHoneymoon+this.state.countPair
        })
      }
     render () {
        return (
        <div style={{ background: '#ECECEC', padding: '50px 300px' }}>
        <Card title="ประเภทที่นั่ง" bordered={false} style={{ width: 900 }}>
            <Row className="seat">
                <Col span={2}>
                    <img src={normal} alt="normal"/>
                </Col>
                <Col span={7}>
                    <h3 className="text-seat">Normal Seat {this.props.seatDetail.normalSeat.price} THB (ที่ว่าง {this.props.seatDetail.normalSeat.available})</h3>
                </Col>
                <Col span={6}/>
                <Col className="input-seat" span={13}>
                    <InputNumber  min={0} max={30} defaultValue={0} onChange={(e) =>  this.selectNormal(this.props.seatDetail.normalSeat.price,e)} />
                </Col>
            </Row>
            <Row className="seat">
                <Col span={2}>
                    <img src={Honeymoon} alt="Honeymoon"/>
                </Col>
                <Col span={7}>
                    <h3 className="text-seat">Honeymoon Seat {this.props.seatDetail.honeymoonSeat.price} THB (ที่ว่าง {this.props.seatDetail.honeymoonSeat.available})</h3>
                </Col>
                <Col span={6}/>
                <Col className="input-seat" span={13}>
                    <InputNumber min={0} max={20} defaultValue={0} onChange={ (e) => this.selectHoneymoon(this.props.seatDetail.honeymoonSeat.price,e)} />
                </Col>
            </Row>
            <Row>
            <Col span={3}>
                    <img src={Pair} alt="Pair"/>
                </Col>
                <Col span={7}>
                    <h3 className="text-seat">Executive Suite (Pair) {this.props.seatDetail.pairSeat.price} THB (ที่ว่าง {this.props.seatDetail.pairSeat.available})</h3>
                </Col>
                <Col span={6}/>
                <Col  className="input-seat" span={12} >
                    <InputNumber min={0} max={5} defaultValue={0} onChange={(e) => this.selectPair(this.props.seatDetail.pairSeat.price,e) } />
                </Col>
            </Row>
            <Row className="button-seat">
            <Button className="button-submit-seat" onClick={this.showModal}>SUBMIT</Button>
            </Row>

            <Modal
                title="ชำระเงิน"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={false}
                >
                <Row>
                    <Col span={12}>
                        <h3> ราคาสุทธิ </h3> 
                    </Col>
                    <Col style={{textAlign:'right'}} span={12}>
                        <h3>{this.state.normalPrice + this.state.honeymoonPrice + this.state.pairSeatPrice} THB</h3>
                    </Col>       
                </Row>
                <Row>
                    <Col span={12}>
                        <h3> ชำระจำนวน </h3> 
                    </Col>
                    <Col span={12} style={{textAlign:'right'}}>
                        <InputNumber style={{ width:'150px',textAlign:'right'}} placeholder="โปรดใส่จำนวนเงิน" onChange={(e) => this.calculat(this.state.payment,e) }/>
                    </Col>       
                </Row>
                        <Button onClick={() => this.handleOk()}>SUBMIT</Button>
                </Modal>

                 <Header className="card-price">
                <Row>
                    <Col span={12}>
                        <h3> ราคาสุทธิ </h3> 
                    </Col>
                    <Col style={{textAlign:'right'}} span={12}>
                    <h3>{this.state.normalPrice + this.state.honeymoonPrice + this.state.pairSeatPrice}THB </h3>
                    </Col>              
                </Row> 
                 </Header>
            </Card>
            {!this.state.isHidden && <Ticket dates={this.props.date} detailTicket={this.props.seatDetail} detailChange={this.state.change} informations={this.props.information} detailseat={this.state.couteSeats}/>}
          </div>
        )
    }


}
export default Seat;