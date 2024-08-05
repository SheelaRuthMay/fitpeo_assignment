import { Row, Col, Card, Progress } from 'antd';
import { RingProgress } from '@ant-design/plots';
import SmallCard from '../components/SmallCard';
import BigCard2 from '../components/BigCard2';
import BigCard3 from '../components/BigCard3';
import BigCard4 from '../components/BigCard4';
import BigCard5 from '../components/BigCard5';
import { useState } from 'react';
import { CaretUpOutlined } from '@ant-design/icons';

const Dashboard = () => {

    const [cardItems, setCardItems] = useState([
        { id: 1, text: "Total Orders", total: 75, status: true, percentage: 3, color: "#0685f8", backgroundColor: "rgba(0, 102, 136, 0.2)" },
        { id: 2, text: "Total Delivered", total: 70, status: false, percentage: 3, color: "#009933", backgroundColor: "rgba(0, 153, 51, 0.2)" },
        { id: 3, text: "Total Cancelled", total: 0o5, status: true, percentage: 3, color: "#ff0000", backgroundColor: "rgba(255, 0, 0, 0.2)" },
        { id: 4, text: "Total Revenue", total: "$12K", status: false, percentage: 3, color: "#cc3399", backgroundColor: "rgba(204, 51, 153, 0.2)" }
    ]);

    const percent = 0.7;
    const config = {
        percent,
        width: 105,
        height: 100,
        color: ['#000066', '#3399ff'],
        annotations: [
            {
                type: 'text',
                style: {
                    text: `${percent * 100}%`,
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 20,
                    textColor: '#ffffff',
                    color: '#ffffff',
                    fontStyle: 'bold',
                },
            },
        ],
    };

    return (
        <>
            <h2 className="page-title">Dashboard</h2>
            {/* Row 1 */}
            <Row type="flex" align="middle" className='content-row' gutter={16}>

                {cardItems && cardItems.map(el => {
                    return (
                        <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                            <SmallCard item={el} />
                        </Col>

                    )
                })}
                <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                    <Card className='big-card-1'>
                        <Row type="flex" align="middle">
                            <Col span={12}>
                                <p className='m-0'>Net Profit</p>
                                <h1 className='mt-15'><strong>$ 6759.25</strong></h1>
                                <div className='mt-15'>
                                    <CaretUpOutlined style={{ color: "#007904" }} /> 3%
                                </div>
                            </Col>
                            <Col span={12} className='text-right'>
                                {/* <RingProgress {...config} /> */}
                                <Progress type="circle" percent={70} format={(percent)=> <p className='ring-text'><b>{percent}%</b><br/>Goal<br/>Completed</p>} />
                                <p className='m-0 graph-text'>* The values here has been rounded off.</p>
                            </Col>

                        </Row>
                    </Card>
                </Col>
            </Row>
            {/* Row 2 */}
            <Row type="flex" align="middle" className='content-row' gutter={16}>

            <Col lg={{ span: 16 }} md={{ span: 24 }} sm={{ span: 12 }} xs={{ span: 24 }}>
            <BigCard2/>
            </Col>
            <Col lg={{ span: 8 }} md={{ span: 24 }} sm={{ span: 12 }} xs={{ span: 24 }}>
            <BigCard3/>
            </Col>

            </Row>
            {/* Row 3 */}
            <Row type="flex" align="middle" className='content-row' gutter={16}>

            <Col lg={{ span: 16 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
              <BigCard4/>
            </Col>
            <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
            <BigCard5/>
            </Col>

            </Row>
        </>
    )
}

export default Dashboard;