const express = require("express");
const app = express();

const path = require("path");
app.set('view engine', 'ejs')

//set path
app.set('views', path.join(__dirname, '/Views'))
app.use(express.static(path.join(__dirname, '/Public')))

//Middlewares
app.use(express.urlencoded({ extended: true }))


//create UUID
const {v4:uuidv4}=require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'




//demo data
let posts = [
    {
        id:uuidv4(),
        username: "apnacollege",
        content: "I love coding"
    },
    {
        id:uuidv4(),
        username: "shraddha",
        content: "Hardwork is important to achieve success"
    },
    {
        id:uuidv4(),
        username: "rahulkumar",
        content: "I got selected for first internship"
    }
]



//Create API

//      1-> /posts
//      Index route -> To get data for all posts
app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts })

})

//      2->/posts POST

//serve the new form
app.get("/posts/new",(req,res)=>{
    res.render('form')
})

//add new post
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content})
    
    //redirect
    res.redirect('/posts')
})


//      3-> /posts/:id
//      to get one post (using id)
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(p=>id===p.id)
    if(post){
        res.render("show",{id,post})
    }else{
        res.send("Post not found !!")
    }
})


//for patch & del req
const method_ovrride=require("method-override")
app.use(method_ovrride("_method"))

//      4 -> /posts/:id
//      PATCH ->Edit data
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(req.body)
    let new_content=req.body.content;

    //find and update post
    let post=posts.find(p=>id===p.id);
    post.content=new_content;
    console.log(post)
    res.redirect("/posts")
})

//patch using btn

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(p=>id===p.id);
    // console.log(post)
    res.render("edit",{post})
})


//      4 -> DELETE
app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
//  delete post
    posts=posts.filter(p=>id !== p.id)
    res.redirect("/posts")
})

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port : ${port}`)
})