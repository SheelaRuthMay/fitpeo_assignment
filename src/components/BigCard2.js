import { Card, Table, Tag, Space } from 'antd';
import { Column } from '@ant-design/plots';
const BigCard2 = ()=>{

    const data = [
        { year: '1991', value: 13 },
        { year: '1992', value: 14 },
        { year: '1993', value: 9.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 14.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 11 },
        { year: '1999', value: 13 },
        { year: '2000', value: 15 }
      ];
    const config = {
        data,
        yField: 'value',
        xField: 'year',
        label: {
          position: 'middle',
          // 'top', 'bottom', 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        columnStyle: {
            radius: [20, 20, 20, 20],
            marginBottom: "10px"
          },
        minColumnWidth: 30,
        maxColumnWidth: 30,
        // xAxis: false
        
      };
    return(
        <Card className='big-card-2'>
            <h2>Activity</h2>
            <Column {...config} style={{maxHeight: 157}} />
        </Card>
    )
}

export default BigCard2;