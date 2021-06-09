const express=require("express");
const app=express();
const path=require("path");

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));
if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));}  //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
const users=[{
    id:1,
    name:'kuldeep',
    role:'fronvtend'
},
{
    id:2,
    name:'jhone doe',
    role:'frontend'
},
{
    id:3,
    name:'prem',
    role:'backend'
},
{
    id:4,
    name:'nickName',
    role:'frontend'
},
{
    id:5,
    name:'doe',
    role:'frontend'
},
{
    id:6,
    name:'virendra',
    role:'backend'
},
{
    id:7,
    name:'nickName',
    role:'frontend'
},
{
    id:8,
    name:'doe',
    role:'frontend'
},
{
    id:9,
    name:'virendra',
    role:'backend'
}
,
{
    id:10,
    name:'nickName',
    role:'frontend'
},
{
    id:11,
    name:'doe',
    role:'frontend'
},
{
    id:12,
    name:'virendra',
    role:'backend'
}
]

app.get("/api/users",(req,res)=>{
    res.send(users);
})

app.listen(port,()=>{
    console.log("sucess");
})