import React,{Component} from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { connect } from "react-redux";
import "./style.css";
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
class Dashboard extends Component{

render(){
    const status = ["Cancelled","Returned"]
    let status1=["Received", "Shipped" , "Packed" , "In-Transit"]
    const {products,orders} = this.props;
    let revenueDone = orders.reduce((acc,curr)=> curr.status==="Completed" ? acc = curr.orderValue + acc : acc, 0 );
    let revenueLost = orders.reduce((acc,curr)=> status.find((st)=> curr.status===st ) ? acc = curr.orderValue + acc : acc, 0 );
    let orderDone=orders.reduce((acc,curr) => curr.status==="Completed" ? acc= acc + 1 : acc ,0 );
    let orderLost=orders.reduce((acc,curr)=> status.find((st)=> curr.status===st ) ? acc = acc + 1 : acc, 0 );
    const inventoryValue = products.reduce((acc,curr)=> acc= curr.costPrice + acc ,0 );

    const sortedProducts = orders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
    // Selecting the last five products
    const lastFiveProducts = sortedProducts.slice(0, 5);

    console.log(lastFiveProducts);

    console.log(revenueDone)
    console.log(revenueLost);
    console.log(orderDone);
    console.log(orderLost);
    console.log(inventoryValue);
    return(
        <React.Fragment>
            <div className="row " >
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
                <div className="col-10 border " >
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
                    <div className="row " style={{backgroundColor:"#F5F7F8"}}>
                        <div className="col-8 px-3 py-3" >
                            <div className="row justify-content-evenly rounded-2 py-3 px-1" style={{backgroundColor:"#FFFFFF"}}>
                            <h3>Sales Overview</h3>
                                <div className="sales col-3 text-center " style={styles.sales}> 
                                    <i class="fa-solid fa-money-bill fa-lg" style={{color: "#0baf08"}}></i>
                                    <h6>Revenue Done</h6>
                                    <h5>₹{revenueDone}</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                     <i class="fa-solid fa-arrow-trend-down fa-lg" style={{color: "#f20707"}}></i>
                                   <h6>Revenue Lost</h6>
                                   <h5>₹{revenueLost}</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                    <i class="fa-solid fa-circle-check fa-lg" style={{color: "#63E6BE"}}></i>
                                    <h6>Order Done</h6>
                                    <h5>{orderDone}</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                    <i class="fa-solid fa-circle-xmark fa-lg" style={{color: "#ed0707"}}></i>
                                    <h6>Order Lost</h6>
                                    <h5>{orderLost}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 px-3 py-3">
                            <div className="row justify-content-evenly text-center rounded-2 py-3" style={{backgroundColor:"#FFFFFF"}}>
                                <h3>Inventary Summary</h3>
                                <div className="col-6 " style={styles.sales}>
                                <i class="fa-solid fa-indian-rupee-sign fa-lg"></i>
                                    <h5>{inventoryValue}</h5>
                                    <h6>Inventery Value</h6>
                                </div>
                                <div className="col-6 " style={styles.sales}>
                                <i class="fa-solid fa-warehouse fa-lg" style={{color: "#1276b5"}}></i>
                                    <h5>{products.length}</h5>
                                    <h6>Total Products</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* purchase overview */}
                    <div className="row " style={{backgroundColor:"#F5F7F8"}}>
                        <div className="col-12 px-3 py-3" >
                            <div className="row justify-content-evenly rounded-2 py-3 px-1" style={{backgroundColor:"#FFFFFF"}}>
                            <h3>Sales Overview</h3>
                                <div className="sales col-3 text-center " style={styles.sales}> 
                                    <i class="fa-solid fa-percent"></i>
                                    <h6>Sales</h6>
                                    <h5>₹ 200000</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                   <i class="fa-solid fa-percent"></i>
                                   <h6>Revenue</h6>
                                   <h5>₹ 1000000</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                    <i class="fa-solid fa-percent"></i>
                                    <h6>Profit</h6>
                                    <h5>₹ 50000</h5>
                                </div>
                                <div className="sales col-3 text-center" style={styles.sales}>
                                    <i class="fa-solid fa-percent"></i>
                                    <h6>Cost</h6>
                                    <h5>₹ 10000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 px-5 py-2" style={{backgroundColor:"#FFFFFF"}}>
                        <div className=" px-3 py-2 border-bottom"> 
                            <h4>Last Five Orders</h4>
                        </div>
                        <div className="row border-bottom py-1 text-center">
                            <div className="col-2 fw-bold">Order ID</div>
                            <div className="col-3 fw-bold">Customer Name</div>
                            <div className="col-2 fw-bold">Order Date</div>
                            <div className="col-2 fw-bold">Order Value</div>
                            <div className="col-3 fw-bold">Status</div>
                        </div>
                        
                            {lastFiveProducts.map((pr)=>
                            <div className="row border-bottom py-1 text-center ">
                                <div className="col-2">{pr.orderId}</div>
                                <div className="col-3">{pr.customerName}</div>
                                <div className="col-2">{pr.orderDate}</div>
                                <div className="col-2">{pr.orderValue}</div>
                                <div className={` col-3 ${pr.status==="Completed" 
                                ? " text-success " 
                                : status.find((rt)=>rt===pr.status) 
                                ? " text-danger "
                                : status1.find((st)=>st===pr.status) ? " text-warning" : ""
                                    }`}>
                                        {pr.status}
                                </div>
                                
                            </div>
                            )}
                       
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

}

const mapStateToProps=(state)=>{
    return{
        products:state.products,
        orders:state.orders
    }
}

export default connect(mapStateToProps)(Dashboard);
