import { Table } from "antd"
import { useEffect, useState } from "react"

const Dashboard = () => {

  
    const [columns, setColumns] =useState([
        
        {
            title : "Item Name",
            dataIndex: "item_name"
        },
        {
            title : "Quantity",
            dataIndex: "quantity"
        },
        {
            title : "Units",
            dataIndex: "units"
        },
    ])
    const [dataSource, setDataSource] =useState([])

    useEffect(() => {
        fetch("http://localhost:4000/InventoryItem")
            .then((response) => response.json())
            .then((result) => {
                setDataSource(result)
            })
    })
    return(
        <div className="dashboard">
                {/* <Button onClick={handleEvent}>Click for data</Button> */}
                <Table columns={columns} dataSource={dataSource} style={{marginRight: "250px", marginTop: "1000 px"}} scroll = {{ y: 600}}></Table>
        </div>
        
    )
}

export default Dashboard