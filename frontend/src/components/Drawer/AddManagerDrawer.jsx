import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row } from 'antd';

const AddManagerDrawer = (props) => {
  const {open, onClose} = props;

  const [form] = Form.useForm();

  const onAddManager = (values) => {
    console.log(values)
  }

  return (
    <>
      <Drawer
        title="Добавить менеджера"
        width={420}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
            color: '#7A7D80',
            fontSize: '17px'
          }
        }}
      >
        <Form 
          layout="vertical" 
          form={form}
          onFinish={onAddManager}
          hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="ФИО менеджера"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name'
                  }
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="number"
                label="Номер"
                rules={[
                  {
                    required: true,
                    message: 'Please enter phone number'
                  }
                ]}
              >
                <Input placeholder="Please enter phone number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Почта"
                rules={[
                  {
                    required: true,
                    message: 'Please enter email address'
                  }
                ]}
              >
                <Input placeholder="Please enter email address" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Временный пароль"
                rules={[
                  {
                    required: true,
                    message: 'Please enter password'
                  }
                ]}
              >
                <Input placeholder="Please enter password" />
              </Form.Item>
            </Col>
          </Row>

          <div className="form-button-group">
            <div className='d-flex justify-content-center'>
              <Button 
                style={{ 
                  width: '360px',
                  height: '50px',
                  background: '#5780EB'
                }} 
                type="primary"
                htmlType="submit"
              >
                Сохранить
              </Button>
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <Button 
                onClick={onClose} 
                style={{ 
                  width: '360px',
                  height: '50px',
                  borderRadius: '4px'
                }}
              >
                Отмена
              </Button>
            </div>
          </div>
        </Form>
      </Drawer>
    </>
  );
};
export default AddManagerDrawer;