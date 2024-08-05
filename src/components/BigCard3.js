import { Card, Row, Col, Space } from 'antd';
import { CoffeeOutlined, AimOutlined, RightOutlined, SnippetsOutlined } from '@ant-design/icons';
const BigCard3 = ()=>{
   
    return(
        <Card className='big-card-3'>
            <Row type="flex" align="middle">
                <Col className='m-0' span={20}><AimOutlined className='main-icon main-icon-1' /> <span className='big-card-3-text'>Goals</span></Col>
                <Col className='m-0' span={4}><div className='right-icon'><RightOutlined/></div></Col>
            </Row>
            <Row type="flex" align="middle">
                <Col className='m-0' span={20}><CoffeeOutlined className='main-icon main-icon-2' /> <span className='big-card-3-text'>Popular Dishes</span></Col>
                <Col className='m-0' span={4}><div className='right-icon'><RightOutlined/></div></Col>
            </Row>
            <Row type="flex" align="middle">
                <Col className='m-0' span={20}><SnippetsOutlined className='main-icon main-icon-3' /> <span className='big-card-3-text'>Menus</span></Col>
                <Col className='m-0' span={4}><div className='right-icon'><RightOutlined/></div></Col>
            </Row>
        </Card>
    )
}

export default BigCard3;