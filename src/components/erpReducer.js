const initialState={
    products:[
        {
          "id":1,
          "name": "iPhone 13",
          "category": "Mobiles",
          "costPrice": 800,
          "sellingPrice": 999,
          "qty":40,
        },
        {
          "id":2,
          "name": "Samsung Galaxy S21",
          "category": "Mobiles",
          "costPrice": 750,
          "sellingPrice": 899,
          "qty":100,
        },
        {
          "id":3,
          "name": "OnePlus 9",
          "category": "Mobiles",
          "costPrice": 700,
          "sellingPrice": 849,
          "qty":0,
        },
        { 
          "id":4,
          "name": "Sony WH-1000XM4",
          "category": "Headsets",
          "costPrice": 250,
          "sellingPrice": 349,
          "qty":20,
        },
        {
          "id":5,
          "name": "AirPods Pro",
          "category": "EarPods",
          "costPrice": 200,
          "sellingPrice": 249,
          "qty":40,
        },
        {
          "id":6,
          "name": "Anker Soundcore Liberty Air 2 Pro",
          "category": "EarPods",
          "costPrice": 150,
          "sellingPrice": 199,
          "qty":0,
        },
        {
            "id":7,
          "name": "Anker PowerPort III Nano",
          "category": "Chargers",
          "costPrice": 20,
          "sellingPrice": 29,
          "qty":50,
        },
        {
            "id":8,
          "name": "Belkin Boost Charge 18W",
          "category": "Chargers",
          "costPrice": 15,
          "sellingPrice": 24,
          "qty":0,
        },
        {
            "id":9,
          "name": "Amazon Basics USB-A to Lightning Cable",
          "category": "Cables",
          "costPrice": 10,
          "sellingPrice": 15,
          "qty":40,
        },
        {
            "id":10,
          "name": "UGREEN USB-C to USB-C Cable",
          "category": "Cables",
          "costPrice": 8,
          "sellingPrice": 12,
          "qty":40,
        },
        {
            "id":11,
          "name": "Bose SoundLink Mini II",
          "category": "Speakers",
          "costPrice": 150,
          "sellingPrice": 199,
          "qty":200,
        },
        {
            "id":12,
          "name": "JBL Flip 5",
          "category": "Speakers",
          "costPrice": 100,
          "sellingPrice": 129,
          "qty":80,
        },
        {
            "id":13,
          "name": "Google Pixel 6",
          "category": "Mobiles",
          "costPrice": 900,
          "sellingPrice": 1099,
          "qty":44,
        },
        {
            "id":14,
          "name": "Sony WF-1000XM4",
          "category": "Headsets",
          "costPrice": 300,
          "sellingPrice": 399,
          "qty":70,
        },
        {
            "id":15,
          "name": "Apple AirPods 3",
          "category": "EarPods",
          "costPrice": 250,
          "sellingPrice": 299,
          "qty":27,
        },
        {
            "id":16,
          "name": "Samsung 45W Super Fast Charging Wall Charger",
          "category": "Chargers",
          "costPrice": 30,
          "sellingPrice": 45,
          "qty":0,
        },
        {
            "id":17,
          "name": "Anker PowerLine USB-C to USB-C 2.0 Cable",
          "category": "Cables",
          "costPrice": 12,
          "sellingPrice": 18,
          "qty":60,
        },
        {
            "id":18,
          "name": "Harman Kardon Onyx Studio 6",
          "category": "Speakers",
          "costPrice": 200,
          "sellingPrice": 249,
          "qty":10,
        },
        {
            "id":19,
          "name": "Xiaomi Redmi Note 11",
          "category": "Mobiles",
          "costPrice": 300,
          "sellingPrice": 349,
          "qty":39,
        },
        {
            "id":20,
          "name": "Sony WH-CH710N",
          "category": "Headsets",
          "costPrice": 100,
          "sellingPrice": 149,
          "qty":83,
        }
      ],

      orders:[
        {
          "orderId": "ORD001",
          "customerName": "John Doe",
          "orderDate": "2024-02-24",
          "status": "Received",
          "orderValue": 1500
        },
        {
          "orderId": "ORD002",
          "customerName": "Jane Smith",
          "orderDate": "2024-02-25",
          "status": "Packed",
          "orderValue": 1200
        },
        {
          "orderId": "ORD003",
          "customerName": "David Brown",
          "orderDate": "2024-02-26",
          "status": "Shipped",
          "orderValue": 1800
        },
        {
          "orderId": "ORD004",
          "customerName": "Emily Johnson",
          "orderDate": "2024-02-27",
          "status": "In-Transit",
          "orderValue": 1300
        },
        {
          "orderId": "ORD005",
          "customerName": "Michael Wilson",
          "orderDate": "2024-02-28",
          "status": "Completed",
          "orderValue": 1500
        },
        {
          "orderId": "ORD006",
          "customerName": "Sophia Martinez",
          "orderDate": "2024-02-29",
          "status": "Cancelled",
          "orderValue": 1600
        },
        {
          "orderId": "ORD007",
          "customerName": "William Taylor",
          "orderDate": "2024-03-01",
          "status": "Returned",
          "orderValue": 1100
        },
        {
          "orderId": "ORD008",
          "customerName": "Olivia Anderson",
          "orderDate": "2024-03-02",
          "status": "Received",
          "orderValue": 1800
        },
        {
          "orderId": "ORD009",
          "customerName": "James Garcia",
          "orderDate": "2024-03-03",
          "status": "Packed",
          "orderValue": 1300
        },
        {
          "orderId": "ORD010",
          "customerName": "Isabella Martinez",
          "orderDate": "2024-03-04",
          "status": "Shipped",
          "orderValue": 1200
        },
        {
          "orderId": "ORD011",
          "customerName": "Noah Brown",
          "orderDate": "2024-03-05",
          "status": "In-Transit",
          "orderValue": 1500
        },
        {
          "orderId": "ORD012",
          "customerName": "Emma Johnson",
          "orderDate": "2024-03-06",
          "status": "Completed",
          "orderValue": 1600
        },
        {
          "orderId": "ORD013",
          "customerName": "Liam Wilson",
          "orderDate": "2024-03-07",
          "status": "Cancelled",
          "orderValue": 1400
        },
        {
          "orderId": "ORD014",
          "customerName": "Ava Taylor",
          "orderDate": "2024-03-08",
          "status": "Returned",
          "orderValue": 1100
        },
        {
          "orderId": "ORD015",
          "customerName": "Alexander Smith",
          "orderDate": "2024-03-09",
          "status": "Received",
          "orderValue": 1700
        },
        {
          "orderId": "ORD016",
          "customerName": "Mia Brown",
          "orderDate": "2024-03-10",
          "status": "Packed",
          "orderValue": 1200
        },
        {
          "orderId": "ORD017",
          "customerName": "Ethan Garcia",
          "orderDate": "2024-03-11",
          "status": "Shipped",
          "orderValue": 1600
        },
        {
          "orderId": "ORD018",
          "customerName": "Amelia Martinez",
          "orderDate": "2024-03-12",
          "status": "In-Transit",
          "orderValue": 1800
        },
        {
          "orderId": "ORD019",
          "customerName": "Benjamin Wilson",
          "orderDate": "2024-03-13",
          "status": "Completed",
          "orderValue": 1500
        },
        {
          "orderId": "ORD020",
          "customerName": "Charlotte Taylor",
          "orderDate": "2024-03-14",
          "status": "Cancelled",
          "orderValue": 1700
        }
      ],
      
      
      categories:["Mobiles","Headsets","Earpods","Chargers","Cables","Speakers"],
}
const erpReducer=(state=initialState,action)=>{

    if(action.type==="SUBMIT"){
        const {products} = state;
        let prod=[...products,action.payload.product]
        return{...state,products:prod}
    }

    else if (action.type==="UPDATE"){
        console.log("In update");
        const {products} = state;
        return {...state, products: products.map((pr)=> pr.id===action.payload.id ? action.payload.product : pr )}

    }
    else if(action.type==="DELETE"){
       console.log("In deletion"); 
        const {products} = state;
        console.log(action.payload.id);
        let prod = products.filter((pr)=> pr.id !== action.payload.id);
        console.log(prod);
        return{...state, products:prod}
    }
    else if (action.type==="UPDATESTATUS"){
        const {orders} = state;
        return {
            ...state,
            orders: orders.map(order =>
              order.orderId === action.payload.id
                ? { ...order, status: action.payload.status1 }
                : order
            )
          };

    }
    else if(action.type==="DELETESTATUS"){
         const {orders} = state;
         let order = orders.filter((pr)=> pr.orderId !== action.payload.id);
         
         return{...state, orders:order}
     }
    return state;
}

export default erpReducer