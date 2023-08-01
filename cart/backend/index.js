const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const Stripe = require('stripe');



const app=express();
app.use(cors());
app.use(express.json({limit:"10mb"}));

const PORT=process.env.PORT||8080;
//mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connect to Database"))
.catch((err)=>console.log(err))

//schema
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        unique:true,
    },
    password:String,
    confirmPassword:String,
    image:String,
});

//
const userModel=mongoose.model("user",userSchema)


//api
app.get("/",(req,res)=>{
    res.send("Server is running")
});
//signup
app.post("/signup",async(req,res)=>{
    console.log(req.body)
    const {email} =req.body

    userModel.findOne({email:email},(err,result)=>{
       console.log(result)
       console.log(err);
       if(result){
        res.send({message:"Email id is already register",alert:false})

       }
       else{
        const data=userModel(req.body)
        data.save();
        res.send({message:"successfully sign up ",alert:true})
       }
    });
});

//api login

app.post("/login",(req,res)=>{
    console.log(req.body)
    const {email}=req.body
    userModel.findOne({email:email},(err,result)=>{
        if(result){
                const dataSend={
                _id:result._id,
                firstName:result.firstName,
                lastName:result.lastName,
                email:result.email,
                image:result.image,
            };
            console.log(dataSend);
            res.send({message:"Login is successfully",alert:true,data:dataSend});
        }
        else{
             res.send({message:"Email is not available,please sign up",alert:false});
        }
    });
});

//-------Admin---------------
//---------------------------

//api admin_login

app.post("/admin_login",(req,res)=>{
    console.log(req.body)
    const {email}=req.body
    userModel.findOne({email:email},(err,result)=>{
        if(result){
                const dataSend={
                _id:result._id,
                firstName:result.firstName,
                lastName:result.lastName,
                email:result.email,
                image:result.image,
            };
            console.log(dataSend);
            res.send({message:"Login is successfully",alert:true,data:dataSend});
        }
        else{
             res.send({message:"Email is not available,please sign up",alert:false});
        }
    });
});





//---------------------------




//product section

const schemaProduct = mongoose.Schema({
   name:String,
    category:String,
    image:String,
    price:String,
    description:String

});
const productModel=mongoose.model("product",schemaProduct)
//save product in data 
//api

app.post("/uploadProduct",async(req,res)=>{
    console.log(req.body)
    const data= await productModel(req.body)
    data.save();
    res.send({message:"upload successfully"})
})

//
app.get("/product",async(req,res)=>{
  const data = await productModel.find({})
  res.send(JSON.stringify(data))
})

 //Payment gateway-----


 const schemaOrder = mongoose.Schema({
   userid:String,
   email:String,
   totalQuantity:String,
   totalPrice:String
  
    

});
const orderModel=mongoose.model("order",schemaOrder)

console.log(process.env.STRIPE_SECRET_KEY)

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

app.post("/checkout-payment",async(req,res)=>
{
    console.log(req.body)
    

    try{
        const data= await orderModel(req.body)
        data.save(); 


        const params={

            submit_type:'pay',
            mode:"payment",
            payment_method_types:['card'],
            billing_address_collection:"auto",
            shipping_options:[{shipping_rate:"shr_1NJWQnSJzaS8WWMB4BtFe0RI"}],

            line_items:req.body.map((item)=>{
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name:item.name,
                          //  images:(item.image)
                        },
                        unit_amount:item.price *100,
                    },
                    adjustable_quantity:{
                        enabled:true,
                        minimum:1,
                    },
                    quantity:item.qty
                }
            }),

             success_url:`${process.env.CLIENT_URL}/success`,
             cancel_url:`${process.env.CLIENT_URL}/cancel`,
       
}
    
    const session=await stripe.checkout.sessions.create(params)
    res.status(200).json(session.id) 
    }
    catch(err){
        res.status(err.statusCode || 500).json(err.message)
    } 
})
//----------------payment status---------------


//save payment status in data 
//api

// app.post("/paymentStatus",async(req,res)=>{
//     console.log(req.body)
//     const data= await orderModel(req.body)
//     data.save();
//    // res.send({message:"upload successfully"})
// })


//--------------------------
// app.post("/delete/:productId",async(req,res)=>{
//     const productId=req.params.productId;
//     try{
//         await 
//         db.collection("products")
//         .doc(`/${productId}`)
//         .delete()
//         .then((result)=>{
//             return res.status(200).send({success:true,data:result});
//         });
//       }
//     catch(err){
//        return res.send({success:false,msg:`Error:${err}`});

//     }
// })
app.get("/getdata",async(req,res)=>{
    const data=await productModel.find({})
    res.json({success:true,data:data})
})
app.put("/update",async(req,res)=>{
    console.log(req.body);
    const {_id,...rest}=req.body

    console.log(rest);
    const data=await productModel.updateOne({_id:_id},rest)
    res.send({success:true,message:"data updated successfully",data:data})
})
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const data=await productModel.deleteOne({_id:id})
     res.send({success:true,message:"data deleted successfully",data:data})
    
})
app.get("/userdata",async(req,res)=>{
    const data=await userModel.find({})
    res.json({success:true,data:data})
})



app.listen(PORT,()=>console.log("server is running at port:" + PORT))