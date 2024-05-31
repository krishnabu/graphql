import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
const port=1207;
const data=[
    {
        id:1,
        name:"shiva"
    },
    {
        id:2,
        name:"bunny"
    },
]
app.get("/",(req,res)=>{
    res.json(data);
})
app.post("/user",(req,res)=>{
    const newdata=req.body;
    console.log(req.body);
    data.push(newdata);
    res.json({
        status:200
    })
})
app.put("/user/:id",(req,res)=>{
    const id=Number(req.params.id);
    const newdata=req.body;
    console.log(newdata);
    const findIndex=data.findIndex(item=> item.id===id);
    if(findIndex!==-1)
    {
        data[findIndex]={
            ...newdata
        }
    }
    else{
        res.send("id not found");
    }
})
app.delete("/user/:id",(req,res)=>{
    const id=Number(req.params.id);
    const findIndex=data.findIndex(item=> item.id===id);
    if(findIndex!==-1)
    {
        data.splice(findIndex,1);
    }
    else{
        res.send("id not found");
    }
})
app.listen(port,()=>{
    console.log(`server as started on ${port}`);
})