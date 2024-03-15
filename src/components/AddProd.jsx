import React, { Component } from "react";
import { Formik,Form,Field,FieldArray,ErrorMessage } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";

const ValidateSchema=yup.object().shape({
    name : yup.string().required("Product Name is required")
    .min(6,"Name should have minimum 6 characters"),

    category : yup.string().required("Category is required"),

    sellingPrice:yup
        .number()
        .min(1,"Selling Price cannot be less than 0")
        .required("Selling Price is required"),
        

    costPrice:yup
        .number()
        .min(1,"Cost Price cannot be less than 0")
        .required("Cost Price is required"),
        
        
                
    qty:yup
        .number()
        .min(1,"Age cannot be less than 0")
        .required("Quantity is required")
        
            

})


class AddProduct extends Component{

    state={
        category:this.props,
        products:this.props.products
    }

    onSubmit=(values)=>{
        let { id } = this.props.match.params
        this.props.dispatch(id ?  update( +id,values) :  submit(values));
        this.props.history.push("/products")
    }

    render(){
        const {category,products} = this.state;
        console.log(products);
         let { id } = this.props.match.params
         let prod1=products.find((pr)=> pr.id=== +id )
        let prod= prod1 ? prod1 : {}

        console.log(id);
        return (
            <Formik initialValues={{
                name: prod.name || "",
                category: prod.category || "",
                costPrice : prod.costPrice || "",
                sellingPrice : prod.sellingPrice || "",
                qty : prod.qty || "",
            }}
            validationSchema={ValidateSchema}
            enableReinitialize
            onSubmit={(values)=>{
                this.onSubmit(values);
                console.log(values);
                // this.props.history.push("/products")
            }}
            >
                {({values,handleChange,errors})=>{ console.log(values); console.log(errors);
                    return(
                        <Form>
                            <div className="row px-4 py-2 ">
                                <h4>Product Form</h4>
                                <div className="row my-3">
                                    <label className="col-sm-2 text-center">Product Name</label>
                                    <div className="col-sm-10">
                                    <Field type="text" className="form-control" name="name"/>
                                    <div className="text-danger">
                                        <ErrorMessage name="name"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <label className="col-sm-2 text-center">Category</label>
                                    <div className="col-sm-10">
                                    <Field name="category" as="select" className="form-control" onChange={(e)=>{
                                        values.category=e.currentTarget.value;
                                        handleChange(e)
                                    }} >
                                        <option value="">Select the Category</option>
                                        {category.category.map((c1)=>
                                            <option value={c1} key={c1}>{c1}</option>
                                        )}
                                    </Field>
                                    <div className="text-danger">
                                        <ErrorMessage name="category"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <label className="col-sm-2 text-center">Selling Price</label>
                                    <div className="col-sm-10">
                                    <Field type="number" className="form-control" name="sellingPrice" />
                                    <div className="text-danger">
                                        <ErrorMessage name="sellingPrice"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <label className="col-sm-2 text-center">Cost Price</label>
                                    <div className="col-sm-10">
                                    <Field type="number" className="form-control" name="costPrice" />
                                    <div className="text-danger">
                                        <ErrorMessage name="costPrice"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <label className="col-sm-2 text-center">Quantity</label>
                                    <div className="col-sm-10">
                                    <Field type="number" className="form-control" name="qty" />
                                    <div className="text-danger">
                                        <ErrorMessage name="qty"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                 <button type="submit" class="btn btn-primary">{prod1 ? "Update" : "Add"}</button>
                                </div>
                            </div>
                            
                            
                        </Form>
                    )
                } }
            </Formik>
        )
    }

}

const submit=(value)=>{
    return{
        type:"SUBMIT",
        payload:{product:value}
    }
}
const update=(id,value)=>{
    return{
        type:"UPDATE",
        payload:{product:value,id:id}
    }
}

const mapStateToProps=(state)=>{
    return{
        category:state.categories,
        products:state.products
    }
}

export default connect(mapStateToProps)(AddProduct);