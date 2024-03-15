import React,{Component} from "react";
import Dashboard from "./dashboard";
import {Switch,Route,Redirect} from 'react-router-dom';
import Products from "./products";
import Orders from "./orders"
import AddProduct from "./AddProd";
class MainDash extends Component{

    state={

    }

    render(){

        return(
            <div className="container-fluid">
            <Switch>
            <Route exact path="/products" render={(props)=> <Products {...props}/>}   />
            <Route exact path="/products/edit/:id" render={(props)=> <AddProduct {...props}/> } />
                <Route exact path="/dashboard" render={(props)=> <Dashboard {...props}/>} />
                <Route exact path="/addNew" render={(props)=> <AddProduct {...props}/> }/>
                <Route exact path="/orders" render={(props)=> <Orders {...props}/>}  />
                <Redirect to="/dashboard" from="/"/>
            </Switch>
            </div> 
        )
    }


}
export default MainDash;