import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { 
  Table,
  Button,
  Select,
  Dropdown,
  Modal,
  message
} from "antd"

import AddManagerDrawer from "@/components/Drawer/AddManagerDrawer"
import EditManagerDrawer from "@/components/Drawer/EditManagerDrawer"

import { crud } from "@/redux/crud/actions"
import { selectAllList } from "@/redux/crud/selectors"

const { confirm } = Modal;

export default function Admin() {
  const dispatch = useDispatch()
  
  const [isClickAddBtn, setClickAddBtn] = useState(false)
  const [isClickEditBtn, setClickEditBtn] = useState(false)

  const [tableData, setTableData] = useState(null)
  const [editFormData, setEditFormData] = useState([])
  
  useEffect(() => {
    reloadTable()
  }, [])
  
  const showResultMessage = (isEdit) => {
    if (isEdit) {
      message.success({
        content: 'Менеджер Султан Султанов Б.',
        duration: 2,
        maxCount: 3,
        style: {
          position: 'fixed',
          right: '30px',
          top: '30px'
        }
      })
    } else {
      message.success({
        content: 
          <span className="message-span">
            Менеджер Султан Султанов Б.<br/>
            <span>удален</span>
          </span>,
        duration: 2,
        maxCount: 3,
        style: {
          position: 'fixed',
          right: '30px',
          top: '30px'
        }
      })
    }
  }

  const reloadTable = () => {
    dispatch(crud.allList('admin')).then(data => {
      const tableItems = data.map(item => ({
          key     :  item._id,
          name    :  item.name,
          number  :  item.number,
          email   :  item.email,
          dateOfCreation  :  item.createdAt,
          numberOfTransactions: item.numberOfTransactions
      }))

      setTableData(tableItems)
    })
  }

  const showConfirm = (key) => {
    confirm({
      className: 'confirm-modal',
      icon: <></>,
      content: 'Вы действительно хотите удалить менеджера?',
      onOk() {
        dispatch(crud.delete('admin', key)).then(success => {
          if (success) {
            showResultMessage(false);
            reloadTable();
            location.reload()
          }
        })
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
        >
          Удалить
        </a>
      )
    }
  ]
  
  const columns = [
    {
      title: 'ФИО',
      dataIndex: 'name'
    },
    {
      title: 'Телефон',
      dataIndex: 'number'
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
      dataIndex: 'numberOfTransactions',
      width: '120px'
    },
    {
      width: '300px',
      render: (_) => 
      <>
        <Dropdown
          key={_.key}
          menu={{
            items,
            onClick: ({ key }) => {
              if (key === '1') {
                dispatch(crud.read('admin', _.key)).then(res => {
                  setEditFormData(res)
                  setClickEditBtn(true)
                })
              } else if (key === '2') {
                showConfirm(_.key)
              }
            }
          }}
          trigger={['click']}
          placement="bottomRight"
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
  
  const onChangeTable = (pagination, filters, sorter, extra) => {
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
        dataSource={tableData} 
        onChange={onChangeTable}
      />
      <AddManagerDrawer open={isClickAddBtn} onClose={() => setClickAddBtn(false)} />
      <EditManagerDrawer 
        open={isClickEditBtn} 
        onClose={()=> setClickEditBtn(false)} 
        initFormData={editFormData}
      />
    </>
  )
}