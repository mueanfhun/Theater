import React, {Component} from 'react'
import { Steps, Divider  } from 'antd';


const { Step } = Steps;

class stepReserved extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            current: 0,
        };
      }
    
      onChange = (current) => {
          console.log('onChange: ', current);
          this.setState({ current });
      }
   

   
    render() {
      const { current } = this.state;
  
      return (
        <div className="layout-step">
          <Steps current={current} onChange={this.onChange}>
            <Step title="Select Showtime"  />
            <Step title="Select Seat"  />
            <Step title="Payment"  />
            <Step title="Finish"  />
          </Steps>
  
          <Divider />

        </div>
      );
    }
  }
    


export default stepReserved;
