import React,{Component} from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

const styles={
    sales:{
       backgroundColor:"#F5F7F8" ,
        width:"180px" ,
        borderRadius:"10px"
    },
    hgt:{
        maxHeight:"100vh"
    },
    link:{
        textDecoration:"none",
        color:"black"
    }
}

class Orders extends Component{
   
    state={
        id:"",
        status1:"",
        ord:""
    }

   modal=(id,order)=>{
    let s1={...this.state};
    s1.id=id;
    s1.ord=order
    this.setState(s1);
   }

   handleChange=(e)=>{
    let { currentTarget : input } =e;
    let s1={...this.state};
    console.log(s1.ord);
    s1[input.name]=input.value;
    this.setState(s1)
   }

   handleStatus=()=>{
    let {status1,id} = this.state;
    this.props.dispatch(updateStatus(id,status1));
    this.setState({id:"",status1:""})
   }
   handleDelete=()=>{
    let {id} = this.state;
    this.props.dispatch(deleteOrder(id));
    this.setState({id:"",status1:""})
   }

    render(){
        let {orders,categories,status1}=this.props;
        let {id} = this.state
        const status=["Received", "Shipped" , "Packed" , "In-Transit"]
        let retCan=["Returned","Cancelled"]
        let ddStatus=["Received", "Shipped" , "Packed" , "In-Transit","Returned","Cancelled","Completed"]
        let live= orders.reduce((acc,curr)=> (status.find((st)=> st===curr.status) ? acc= acc + 1 : acc),0  )
        let complete = orders.reduce((acc,curr)=> curr.status==="Completed" ? acc = acc + 1 : acc ,0);
        let ret = orders.reduce((acc,curr)=> curr.status==="Returned" ? acc = acc + 1 : acc ,0);
        let cancel = orders.reduce((acc,curr)=> curr.status==="Cancelled" ? acc = acc + 1 : acc ,0);

        let ord = orders.find((ord)=> ord.orderId===id ) 
        let order = ord ? ord : ""
        console.log(order);
        

        return (
            <div className="row">
                {/* Left Pannel */}
                <div className="col-2" style={{backgroundColor:"#FFFFFF"}}>
                    <div className="row">
                        <h4>ENTNT Technical Assignment</h4>
                    </div>
                    <div className="row px-3 my-4">
                        <div className="my-2">
                            <i class="fa-solid fa-gauge"></i>
                            <Link to="/dashboard" className="mx-3" style={styles.link}>Dashboard</Link>
                        </div>
                        <div className="my-2">
                            <i className="fa-solid fa-layer-group " ></i>
                            <Link to="/products" className="mx-3" style={styles.link}>Products</Link>
                        </div>
                        <div className="my-2">
                            <i class="fa-solid fa-clipboard"></i>
                            <Link to="/orders" className="mx-3" style={styles.link}>Orders</Link>
                        </div>
                    </div>
                    
                    
                </div>
                {/* Right Pannel */}

                <div className="col-10 border border-danger px-3" style={{backgroundColor:"#F5F7F8"}}>
                    <div className="row border" >
                        <div className="col-3 py-3">
                            <div class="input-box">
                                <input type="text" class="form-control" placeholder="Search.."/>
                                <i className="fa fa-search"></i>                    
                            </div>
                        </div>
                        <div className="col-6"></div>
                        <div className="col-3">
                            <h5 className="py-3">Aditya Garg</h5> 
                        </div>
                        
                    </div>
                    {/* Oders overview */}
                    <div className="row" style={{backgroundColor:"#F5F7F8"}}>
                        <div className="col-8 px-3 py-3" >
                            <div className="row justify-content-evenly rounded-2 py-3 px-1" style={{backgroundColor:"#FFFFFF"}}>
                            <h3>Orders Overview</h3>
                                <div className="sales col-3 text-center " style={styles.sales}> 
                                    <img src="https://cdn.hugeicons.com/icons/summation-01-stroke-rounded.svg" alt="summation-01" width="24" height="24" />
                                    <h6>Total Orders</h6>
                                    <h5>{orders.length}</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                    <i class="fa-solid fa-circle" style={{color: "#f21a02"}}></i>
                                   <h6>Live Orders</h6>
                                   <h5>{live}</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                 <i class="fa-solid fa-rotate-left"></i>
                                   <h6>Returned Orders</h6>
                                   <h5>{ret}</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                    <i class="fa-solid fa-circle-xmark" style={{color: "#ed0c0c"}}></i>
                                    <h6>Cancelled Orders</h6>
                                    <h5>₹{cancel}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 px-3 py-3">
                            <div className="row justify-content-evenly rounded-2 py-3" style={{backgroundColor:"#FFFFFF"}}>
                                <h3>Orders Summary</h3>
                                <div className="col-6 text-center" style={styles.sales}>
                                <i class="fa-solid fa-check-to-slot fa-lg" style={{color: "#05fa9c"}}></i>
                                    <h5>{complete}</h5>
                                    <h6>Completed Order</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* order list */}
                    <div className="col-12 px-5 py-2" style={{backgroundColor:"#FFFFFF"}}>
                        <div className=" px-3 py-2 border-bottom"> 
                            <h4>Orders</h4>
                        </div>
                        <div className="row border-bottom py-1 text-center">
                            <div className="col-2 fw-bold">Order ID</div>
                            <div className="col-3 fw-bold">Customer Name</div>
                            <div className="col-2 fw-bold">Order Date</div>
                            <div className="col-2 fw-bold">Order Value</div>
                            <div className="col-3 fw-bold">Status</div>
                        </div>
                        
                            {orders.map((pr)=>
                            <div className="row border-bottom py-1 text-center" onClick={()=>this.modal(pr.orderId,order)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{cursor:"pointer"}}>
                                <div className="col-2">{pr.orderId}</div>
                                <div className="col-3">{pr.customerName}</div>
                                <div className="col-2">{pr.orderDate}</div>
                                <div className="col-2">{pr.orderValue}</div>
                                <div className={` col-3 ${pr.status==="Completed" 
                                ? " text-success " 
                                : retCan.find((rt)=>rt===pr.status) 
                                ? " text-danger "
                                : status.find((st)=>st===pr.status) ? " text-warning" : ""
                                    }`}>
                                        {pr.status}
                                </div>
                                
                            </div>
                            )}
                       
                    </div>
                </div>
                        {/* Order Modal for changing status and deletion of order*/}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Order Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                           <h6>Order Id : {order.orderId}</h6>
                           <h6>Customer Name : {order.customerName}</h6>
                           <h6>Order Date : {order.orderDate}</h6>
                           <h6>Order Status : <select className="form-select" aria-label="Default select example" name="status1" value={status1} onChange={this.handleChange}>
                                {/* <option value="">Open this select menu</option> */}
                                {ddStatus.map((st)=>
                                    <option value={st}>{st}</option>
                                )}
                            </select></h6>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>this.handleDelete()}>Delete Order</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={()=>this.handleStatus()}>Change Status</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        orders:state.orders,
        categories: state.categories
    }
}
const updateStatus=(id,status1)=>{
    return{
        type:"UPDATESTATUS",
        payload:{id:id,status1:status1}
    }
}
const deleteOrder=(id)=>{
    return{
        type:"DELETESTATUS",
        payload:{id:id}
    }
}
export default connect(mapStateToProps)(Orders);