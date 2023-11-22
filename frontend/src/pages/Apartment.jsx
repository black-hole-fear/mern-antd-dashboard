import React, { useState } from "react";
import { 
  Table,
  Button,
  Select,
  Dropdown,
  Modal,
  message
} from "antd";

import EditApartment from "@/components/Drawer/EditApartment";

const { confirm } = Modal;

export default function Apartment() {
  const [isClickAddBtn, setClickAddBtn] = useState(false)
  const [isClickEditBtn, setClickEditBtn] = useState(false)

  const [isEdit, setIsEdit] = useState(null)

  const showResultMessage = (isEdit) => {
    if (isEdit) {
      message.success({
        content: 'Менеджер Султан Султанов Б.',
        duration: 34,
        maxCount: 3,
        style: {
          position: 'fixed',
          right: '30px',
          top: '30px'
        }
      })
    } else {
      message.success({
        content: <span className="message-span">Менеджер Султан Султанов Б.<br/><span>удален</span></span>,
        duration: 334,
        maxCount: 3,
        style: {
          position: 'fixed',
          right: '30px',
          top: '30px'
        }
      })
    }
  }

  const showConfirm = () => {
    confirm({
      className: 'confirm-modal',
      icon: <></>,
      content: 'Вы действительно хотите удалить менеджера?',
      onOk() {
        showResultMessage(false);
      },
      onCancel() {
        console.log('Нет');
      },
      okText: 'Да',
      cancelText: 'Нет'
    })
  }

  const items = [
    {
      key: '1',
      label: (
        <a 
          rel="noopener noreferrer" 
          href="#"
          style={{
            color: '#5780EB',
            fontFamily: 'SF Pro Display',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '110%'
          }}
          onClick={()=>setClickEditBtn(true)}
        >
          Изменить
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a 
          rel="noopener noreferrer" 
          href="#"
          style={{
            color: '#F98C8C',
            fontFamily: 'SF Pro Display',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '110%'
          }}
          onClick={showConfirm}
        >
          Удалить
        </a>
      )
    }
  ]
  
  const columns = [
    {
      title: 'квартиры',
      dataIndex: 'apartment',
      sorter: true
    },
    {
      title: 'Объект',
      dataIndex: 'object'
    },
    {
      title: 'Этаж',
      dataIndex: 'floor',
      sorter: true
    },
    {
      title: 'КВ',
      dataIndex: 'KV',
      sorter: true
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      sorter: true
    },
    {
      title: 'Статус',
      dataIndex: 'status_tag'
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      sorter: true
    },
    {
      title: 'Клиент',
      dataIndex: 'customer'
    },
    {
      title: 'Статус',
      dataIndex: 'status'
    },
    {
      render: (_) => 
      <>
        <a 
          style={{
            color: '#5780EB',
            fontFamily: 'SF Pro Display',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '110%',
            marginRight: '10px'
          }}
        >
          Изменить
        </a>
        <Dropdown
          key={_.key}
          menu={{
            items,
          }}
          placement="bottomRight"
          trigger={['click']}
        >
          <svg width="30" height="13" viewBox="0 0 3 13" fill="none">
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="black"/>
            <circle opacity="0.5" cx="1.5" cy="6.5" r="1.5" fill="black"/>
            <circle opacity="0.5" cx="1.5" cy="11.5" r="1.5" fill="black"/>
          </svg>
        </Dropdown>
      </>
    }
  ]
  
  const data = [
    {
      key: '1',
      apartment: '№132',
      object: 'Prime city',
      floor: 4,
      KV: '144,5',
      date: '14.09.2023',
      status_tag: 2,
      price: '2 000 000 c',
      customer: '-',
      status: 'Бронь до 12.05.23 14:00'
    }
  ]
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  
  return (
    <>
      <div className="page-title d-flex p-2 ps-4">
        Менеджеры
      </div>
      <div 
        className="page-sort-select d-flex justify-content-between ps-5 pe-5"
        style={{
          marginBottom: '20px',
          marginTop: '60px'
        }}
      >
        <Select
          defaultValue="Сортировка"
          style={{
            width: 120,
          }}
        />
        <Button 
          className="add-button"
          style={{
            width: '127px',
            height: '35px',
            flexShrink: 0,
            background: '#C2E3DB',
            border: 'none',
            padding: '9px 30px'
          }}
          onClick={() => setClickAddBtn(true)}
        >
          Добавить
        </Button>
      </div>
      <Table 
        className="managers-table ps-5 pe-5"
        rowClassName={() => "rowClassName1"}
        pagination={false}
        columns={columns} 
        dataSource={data} 
        onChange={onChange}
      />
      <EditApartment open={isClickEditBtn} onClose={()=> setClickEditBtn(false)} />
    </>
  );
}
