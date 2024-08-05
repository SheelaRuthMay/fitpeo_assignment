import { Card, Table, Tag, Space } from 'antd';
import User from '../assets/images/user.jpg';
const BigCard4 = ()=>{
    const columns = [
        {
          title: 'Customer',
          dataIndex: 'customer',
          key: 'customer',
          render: (text) => <Space><img width="30" className='m-0 header-icon-img-mobile vertical-align-middle' src={User} alt="user" />{text}</Space>,
        },
        {
          title: 'Order No.',
          dataIndex: 'order',
          key: 'order',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: (_, { status }) => (
            <>
             
                  <Tag color={status==='Delivered' ? 'green' : 'red'} key={status}>
                    {status}
                  </Tag>
                
            </>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          customer: 'John Brown',
          order: 15476258,
          amount: '$176.54',
          status: 'Delivered',
        },
        {
          key: '2',
          customer: 'Jim Green',
          order: 48976542,
          amount: '$89.67',
          status: 'Cancelled',
        },
        {
          key: '3',
          customer: 'Joe Black',
          order: 26794683,
          amount: '$45.98',
          status: 'Pending',
        },
      ];
    return(
        <Card className='big-card-4'>
            <h2>Recent Orders</h2>
            <Table columns={columns} dataSource={data} pagination={false} />
        </Card>
    )
}

export default BigCard4;