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
class Products extends Component{

    state={
        id:""
    }

    handleAddNew=()=>{
        this.props.history.push("/addNew")
    }

    edit=(id)=>{
        this.props.history.push(`/products/edit/${id}`)
    }

    handleDelete=(id)=>{
        let s1={...this.state};
        s1.id=id;
        this.setState(s1)
    }

    delete=()=>{
        let {id} = this.state;
        this.props.dispatch(delete1(+id));
        this.props.history.push("/products")
    }

    render(){
        const {products,categories}=this.props;
        let sumProd= products.reduce((acc,curr) => acc= acc+curr.costPrice,0 )
        let inQty = products.reduce((acc,curr) => curr.qty > 0 ? acc= acc + 1 : acc ,0 );
        let outQty = products.reduce((acc,curr) => curr.qty === 0 ? acc= acc+ 1 : acc ,0 );
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
                    <div className="row" style={{backgroundColor:"#F5F7F8"}}>
                        <div className="col-8 px-3 py-3" >
                            <div className="row justify-content-evenly rounded-2 py-3 px-1" style={{backgroundColor:"#FFFFFF"}}>
                            <h3>Products Overview</h3>
                                <div className="sales col-4 text-center " style={styles.sales}> 
                                    <i class="fa-solid fa-table-list"></i>
                                    <h6>Categories</h6>
                                    <h5>{categories.length}</h5>
                                </div>
                                <div className="sales col-4 text-center" style={styles.sales}>
                                   <i class="fa-solid fa-percent"></i>
                                   <h6>Total Products</h6>
                                   <h5>{products.length}</h5>
                                </div>
                                <div className="sales col-4 text-center" style={styles.sales}>
                                <img src="https://cdn.hugeicons.com/icons/summation-01-stroke-rounded.svg" alt="summation-01" width="24" height="24" />
                                    <h6>Stock Value</h6>
                                    <h5>₹{sumProd}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 px-3 py-3">
                            <div className="row justify-content-evenly rounded-2 py-3" style={{backgroundColor:"#FFFFFF"}}>
                                <h3>Inventary Summary</h3>
                                <div className="col-6 text-center" style={styles.sales}>
                                <img src="https://cdn.hugeicons.com/icons/package-out-of-stock-stroke-rounded.svg" alt="package-out-of-stock" width="24" height="24" />
                                    <h5>{inQty}</h5>
                                    <h6>In-Stock</h6>
                                </div>
                                <div className="col-6 text-center" style={styles.sales}>
                                <img src="https://cdn.hugeicons.com/icons/package-out-of-stock-stroke-rounded.svg" alt="package-out-of-stock" width="24" height="24" />
                                    <h5>{outQty}</h5>
                                    <h6>Out-Of-Stock</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Products list */}
                    <div className="col-12 px-5 py-2" style={{backgroundColor:"#FFFFFF"}}>
                        <div className="d-flex justify-content-between px-3 py-2 border-bottom"> 
                            <h4>Products</h4>
                            <button className="btn btn-primary" onClick={()=>this.handleAddNew()}>Add Product</button>
                        </div>
                        <div className="row border-bottom py-1 text-center">
                            <div className="col-3 fw-bold">Product Name</div>
                            <div className="col-2 fw-bold">Category</div>
                            <div className="col-1 fw-bold">Cost Price</div>
                            <div className="col-2 fw-bold">Selling Price</div>
                            <div className="col-1 fw-bold">Quantity</div>
                            <div className="col-2 fw-bold">Available Stock</div>
                            <div className="col-1"></div>
                        </div>
                        
                            {products.map((pr)=>
                            <div className="row border-bottom py-1  text-center ">
                                <div className="col-3">{pr.name}</div>
                                <div className="col-2">{pr.category}</div>
                                <div className="col-1">{pr.costPrice}</div>
                                <div className="col-2">{pr.sellingPrice}</div>
                                <div className="col-1">{pr.qty}</div>
                                <div className={`col-2 ${pr.qty > 0 ? `text-success` : `text-danger`}`} >{pr.qty>0 ? "In Stock" : "Out Of Stock"}</div>
                                <div className="col-1 ">
                                <i class="fa-regular fa-pen-to-square px-4" onClick={()=> this.edit(pr.id)} ></i>
                                <i class="fa-solid fa-trash-can" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.handleDelete(pr.id)} style={{color: "#da1010"}} ></i>
                                </div>
                                
                            </div>
                            )}
                       
                    </div>
                </div>
                {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to Delete ?
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>this.delete()}>Delete</button>
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
        products:state.products,
        categories: state.categories
    }
}
const delete1=(id)=>{
    return{
        type:"DELETE",
        payload:{id:id}
    }
}
export default connect(mapStateToProps)(Products);