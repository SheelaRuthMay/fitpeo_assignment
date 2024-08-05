import { Row, Col, Card, Rate, Tag, Space } from 'antd';
import User from '../assets/images/user.jpg';
import { ShoppingCartOutlined, ShoppingOutlined, CloseCircleOutlined, DollarOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
const BigCard5 = ()=>{
    
      const data = [
        {
          key: '1',
          name: 'Jenny Wilson',
          rating: 4,
          feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluter-free) which was also very good'
        },
        {
          key: '2',
          name: 'Dianne Russell',
          rating: 5,
          feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
        },
        {
          key: '3',
          name: 'Devon Lane',
          rating: 4,
          feedback: 'Normally wings are wings. But theirs are lean meaty and tender.'
        },
      ];
    return(
        <Card className='big-card-5'>
            <h2>Customer's Feedback</h2>
            <div className='feedbacks-list'>
            {data && data.map(x=>{
                return(
                    <div className='feedback'>
                      <Space>
                      <img width="30" className='m-0 header-icon-img-mobile vertical-align-middle' src={User} alt="user" />{x.name}
                      </Space>
                      <br/>
                      <Rate disabled defaultValue={x.rating} />
                      <p>{x.feedback}</p>
                    </div>
                )
            })}
          </div>
        </Card>
    )
}

export default BigCard5;