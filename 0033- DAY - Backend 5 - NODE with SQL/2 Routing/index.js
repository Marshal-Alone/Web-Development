// Setting Express App
const express=require('express');
const app=express();

const port=3000;
app.listen(port,()=>{
    console.log("App listening on port -> ",port);
})

//Setting up Template
const path=require('path');
const ejs=require('ejs');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"/Views"))


//Setup SQL COnnection
const mysql = require("mysql2");

// Create the connection to database
const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1325',
    database:'delta_app'
});


//Fetch & Show total number of users on our app

app.get('/',(req,res)=>{
    let q="SELECT COUNT(*) FROM user";
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;

            console.log("/  -> Data fetch successful")

            let count=result[0]["COUNT(*)"];
            res.render('home.ejs',{count});
        });
    } catch (error) {
        res.send(`Error -> ${error}`);
    }
    
})

//Fetch and show (userid,username,email) of all users
app.get('/user',(req,res)=>{

    //select user based on id
    let q=`SELECT * FROM user`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.render('show_user',{users:result});
        })
    } catch (error) {
        console.log("ERROR -> ",error)
    }
})

//Edit username
{
app.get('/user/:id/edit',(req,res)=>{
    let {id}=req.params;

    //select user based on id
    let q=`SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.render('edit',{user:result[0]});
        })
    } catch (error) {
        console.log("ERROR -> ",error);
    }

})
}
//UPDATE username
{
const methodOverride=require('method-override');
app.use(methodOverride("_method"));
    //to parse data
app.use(express.urlencoded({extended:true}));

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;

    //get username,pass from fotm so we can validate pass here but we'll do it in js
    let {username:new_username,password:form_password}=req.body;

    //select user based on id from db
    let q=`SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];

            //nested query -> update username in db
            let q=`UPDATE user SET username='${new_username}' where id='${id}'`;
            try {
                connection.query(q,(err,result)=>{
                    if(err) throw err;

                    res.status(200).redirect('/user');
                })
            } catch (error) {
                res.status(404).send(error);
            }
        })
       
    } catch (error) {
        res.status(404).send(error);
    }

})
}

//ADD new user 
{
    //redirect to add user form
    app.get('/user/add',(req,res)=>{

        res.render("add_user")
    })

    //add new user to db
    app.post('/user/add',(req,res)=>{
        //gen random id
        const { v4: uuidv4 } = require('uuid');
        let id=uuidv4();

        let {username,email,password}=req.body;

        //write & execute query
        let q=`INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)`;
        let values=[id,username,email,password];

        try {
            connection.query(q,values,(err,result)=>{
                console.log(username,"-> added successfully");
                res.redirect('/user');
            })
        } catch (error) {
            
        }
    })
}


//DELETE user
app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;

    //select user based on id
    let q=`SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            res.render('delete_user',{user})
        })
    } catch (error) {
        console.log("ERROR -> ",error);
    }
    
   
})


app.delete("/user/:id",(req,res)=>{
    let {id}=req.params;
    q=`DELETE FROM user WHERE id = "${id}"`;

    try {
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/user");
        })
    } catch (error) {
        res.send("Error -> ",error)
    }
})





//Generate and insert data in database
// gen_and_inser_data();
function gen_and_inser_data(){
    // Generate fake data 

    

    //Generate data about random 100 users
    const {faker}=require("@faker-js/faker");
    let gen_users=()=>{
        return [
            faker.string.uuid(),
            faker.internet.username(),
            faker.internet.email(),
            faker.internet.password()
        ];
    }
    
    let data=[];
    for(let i=1;i<=100;i++){
        data.push(gen_users());
    }


    //Query to insert data
    let q="INSERT INTO user (id,username,email,password) VALUES ?";
    let values=data;

    //INSERT INTO Table 
    try {
        connection.query(q,[values],(err,result)=>{
            if(err){
                throw err;
                return;
            }
            console.log("Data inserted successfully");
        });
    } catch (error) {
        console.log("ERROR -> ",error);
    }

    //end connection
    connection.end();
}


