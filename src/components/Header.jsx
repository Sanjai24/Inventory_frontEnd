import { Row , Col } from 'antd'
import React from 'react' 

const HomeHeader=() =>{
    return(
        <div>
            <Row>
                <Col span={8} className='header-task-management' style={{textAlign:"center",fontWeight:"bolder"}}> Inventory Management System</Col>
                <Col span={4} className='header-task-management'></Col>
            </Row>
        </div>
    )
}
export default HomeHeader