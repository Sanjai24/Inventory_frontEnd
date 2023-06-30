import React  from 'react'
import { Menu} from 'antd' 
import {useNavigate} from 'react-router-dom'
import {
        TeamOutlined ,
        DeleteOutlined,
        FileAddOutlined} from '@ant-design/icons'




const SideNavigation = () =>{
    const navigate = useNavigate();
    return(
        <div  style={{marginTop:"40px"}}>
            
                <Menu 
                    onClick={({key})=>{
                        {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            className:'sider-label',
                            key:'/dashboard' ,
                            label :'DashBoard',
                            icon: <TeamOutlined className='sider-icon'/>
                            
                            
                        },
                        {
                            className:'sider-label',
                            key:'/additem' ,
                            label :'Add Items',
                            icon: <FileAddOutlined className='sider-icon'/>
                        },
                        {
                            className:'sider-label',
                            key:'/deleteitem' ,
                            label :'Delete Items',
                            icon: <DeleteOutlined className='sider-icon'/>
                        } ,
                       
                    ]}
                />
        </div>
    )
}
export default SideNavigation