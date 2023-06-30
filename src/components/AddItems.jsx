import React, {useEffect, useState} from 'react'
import { Button, Form,Input ,message} from 'antd'
import axios from 'axios'

const AddItems = () =>{
    
    const [messageApi ,contextHolder] = message.useMessage();
    const formItemLayout = {
        labelCol: {
          xs: {span: 20,},
          sm: {span: 8,},
        },
        
        wrapperCol: {
          xs: {span: 24,},
          sm: {span: 16,},
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {span: 24,offset: 0,},
          sm: {span: 16,offset: 8,},
        },
      };
    const [productName, setProductName] =useState("");
    const[quantity , setQuantity] =useState("");


    const payload ={
        "item_name": productName,
        "quantity": quantity,
        "units": "kg"
        }
    

      const onFinish =() =>{
        console.log("handleFinish")
        messageApi.open({
            type:'success',
            content:'successfully registered'
        })
        console.log(payload);
     
      }
   
      
    const handleClick = () =>{
      console.log("handling"); 
      axios.put("http://localhost:4000/InventoryAddition" , payload)
      .then( (response)=>console.log(response))
      .catch(e =>{console.log("e" ,e)})
       
    }
      
    return(
        <div className='add-items'style={{
            paddingTop: 150,
          }}>
         
           <Form name='register' {...formItemLayout}  onFinish={onFinish} scrollToFirstError  >
            <Form.Item
                name="item_name"
                label="Item Name"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please input the Item Name!',
                    },
                ]}
                >
                 <Input className='register-form-input1' value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>
            </Form.Item>
            <Form.Item
            name='quantity'
            label='Quantity'
            hasFeedback
            rules={[
                {
                    required:true ,
                    message:'Please enter the Quantity'
                }
            ]}>
                <Input className='register-form-input2' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} style={{marginLeft: "20px"}}/>
            </Form.Item>
           
         
    
            <Form.Item>
                {contextHolder}
                <Button onClick={handleClick} htmlType='submit' type='primary' className='register-form-submit-button' style={{marginLeft:"400px"}}>Add</Button>
                
            </Form.Item>
        </Form>
            
        </div>
    )    
}
export default AddItems