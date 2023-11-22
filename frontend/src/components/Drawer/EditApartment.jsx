import React, { useState } from 'react';
import { 
  Button, 
  Col, 
  Drawer, 
  Form, 
  Input, 
  Row,
  Radio,
  message
} from 'antd';

const EditApartment = (props) => {
  const {open, onClose} = props;
  
  const success = () => {
    message.success({
      className: 'apartment-edit-success',
      content: 'Изменения сохранены',
      duration: 400,
      maxCount: 3,
      style: {
        position: 'fixed',
        right: '30px',
        top: '30px'
      }
    })
  }

  // const error = () => {
  //   messageApi.open({
  //     type: 'error',
  //     content: 'This is an error message'
  //   })
  // }

  const [form] = Form.useForm()

  const onEditApartment = (values) => {
    onClose(false)
    success()
    console.log(values)
  }

  return (
    <>
      <Drawer
        title="Изменить"
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
          onFinish={onEditApartment}
          hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="ФИО менеджера"
                initialValue="dsfsdfsdf"
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
                name="status_tag"
                label="Статус"
                className="status-tag"
              >
                <Radio.Group defaultValue="reservation" buttonStyle="solid">
                  <Radio.Button value="reservation">Бронь</Radio.Button>
                  <Radio.Button value="purchased">Куплено</Radio.Button>
                  <Radio.Button value="barter">Бартер</Radio.Button>
                  <Radio.Button value="installment_plan">Рассроч</Radio.Button>
                  <Radio.Button value="cancel">Отмена</Radio.Button>
                  <Radio.Button value="active">Активна</Radio.Button>
                </Radio.Group>
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
export default EditApartment;