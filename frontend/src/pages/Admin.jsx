import React, { useState } from "react";
import { 
  Table,
  Button,
  Select
} from "antd";

import AddManagerDrawer from "@/components/Drawer/AddManagerDrawer";

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    width: '250px'
  },
  {
    title: 'Телефон',
    dataIndex: 'telephone'
  },
  {
    title: 'Почта',
    dataIndex: 'email'
  },
  {
    title: 'Дата создания',
    dataIndex: 'dateOfCreation',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  },
  {
    title: 'Кол-во сделок',
    dataIndex: 'numberOfTransactions'
  },
  {
    width: '300px',
    render: () => <></>
  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    telephone: 98,
    email: 60,
    dateOfCreation: 70,
    numberOfTransactions: 20
  },
  {
    key: '2',
    name: 'Jim Green',
    telephone: 98,
    email: 66,
    dateOfCreation: 89,
    numberOfTransactions: 20
  },
  {
    key: '3',
    name: 'Joe Black',
    telephone: 98,
    email: 90,
    dateOfCreation: 70,
    numberOfTransactions: 20
  },
  {
    key: '4',
    name: 'Jim Red',
    telephone: 88,
    email: 99,
    dateOfCreation: 89,
    numberOfTransactions: 20
  }
]

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}


export default function Admin() {
  const [isClickAddBtn, setClickAddBtn] = useState(false);

  return (
    <>
      <div className="page-title d-flex p-2 ps-4">
        Менеджеры
      </div>
      <div className="page-sort-select d-flex justify-content-between mt-5 mb-5 ms-4">
        <Select
          defaultValue="Сортировка"
          style={{
            width: 120,
          }}
        />
        <Button 
          style={{
            width: '127px',
            height: '35px',
            marginRight: '40px',
            background: '#C2E3DB',
            border: 'none'
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
      <AddManagerDrawer open={isClickAddBtn} onClose={() => setClickAddBtn(false)} />
    </>
  );
}
