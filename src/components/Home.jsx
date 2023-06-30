import { Layout } from 'antd'
import React,{useState} from 'react'
import {MenuFoldOutlined , MenuUnfoldOutlined} from '@ant-design/icons'
import HomeHeader from './Header';
import SideNavigation from './SideNavigation';
import { Route, Routes } from 'react-router-dom';
import Consumption from './DeleteItem';
import AddItems from './AddItems';
import Dashboard     from './Dashboard';

const {Header ,Sider , Content} =Layout ;


const Homepage =() =>{
      const [collapsed , setCollapsed] =useState(false);

    return (
        
        <div className='home-container' span>
            <Layout className='home-layout' style={{overflow:"hidden"}} >
            
            <Sider style={{borderLeft:"5px solid purple",borderRight:"2px solid white"}} className='sider' theme='light' trigger={null} >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined ,{
                className:'trigger' ,
                onClick:() => setCollapsed(!collapsed),
               
            })}
                <SideNavigation/>
                </Sider>
                <Layout>
                <Header className='layout-header'><HomeHeader /></Header>
                    <Content className='layout-content'>
                        <>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard />}></Route>
                            <Route path='/deleteitem' element={<Consumption />}></Route>
                            <Route path='/additem' element={<AddItems />}></Route>

                           
                        </Routes>
                        </>
                    </Content>
                   
                </Layout> 
            </Layout>
            
        </div>
    )
}
export default Homepage