import React, { Component } from 'react';

import { Form, Select, Input, Button } from 'antd';

const { Option } = Select;


class Payment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
      handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
          note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
      };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item label="Email Address">
          {getFieldDecorator('Email Address', {
            rules: [{ required: true, message: 'Please input your Email Address!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Mobile">
          {getFieldDecorator('Mobile', {
            rules: [{ required: true, message: 'Please input your Mobile!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedApp = Form.create({ name: 'coordinated' })(Payment);

export default WrappedApp;
