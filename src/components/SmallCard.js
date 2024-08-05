import { Row, Col, Card } from 'antd';
import { ShoppingCartOutlined, ShoppingOutlined, CloseCircleOutlined, DollarOutlined, CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
const SmallCard = ({item})=>{
    
    return(
        <Card className='small-card'>
            <div className='small-card-icon'>
                {
                    item.id===1 ? <ShoppingCartOutlined style={{color: item.color, backgroundColor: item.backgroundColor}}/>:
                    (
                        item.id === 2 ? <ShoppingOutlined style={{color: item.color, backgroundColor: item.backgroundColor}}/> : (
                            item.id === 3 ? <CloseCircleOutlined style={{color: item.color, backgroundColor: item.backgroundColor}}/> : 
                            <DollarOutlined style={{color: item.color, backgroundColor: item.backgroundColor}}/>
                        )
                    )
                }
          
          </div>
          <p>{item.text}</p>
          <Row>
            <Col span={12}>
             <h1><strong>{item.total}</strong></h1>
            </Col>
            <Col span={12} className='pos-neg' style={{color: item.status ? "#007904" : "#c20000"}}>
               {item.status ? <CaretUpOutlined/> : <CaretDownOutlined/>} {item.percentage}%
            </Col>
          </Row>
        </Card>
    )
}

export default SmallCard;