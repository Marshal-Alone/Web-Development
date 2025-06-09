
// Get the client
const mysql = require('mysql2');


// Create the connection to database
const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1325',
    database:'delta_app'
});

//                          Simple query
//
// simple_query();
function simple_query(){
    let q="SHOW TABLES";
    try {
        connection.query(q,(err,res)=>{
            if (err) throw err;
            console.log(res);
            console.log(res.length);

        })
    } catch (error) {
        console.log("ERROR : ",error);

    }
    connection.end();
}

//                  INSERT using placeholder
//
// placeholder();
function placeholder(){
    q=`INSERT INTO user (id,username, email, password) VALUES ?`;
    // let values=['123','123_newuser','abc@gmail.com','abc'];

    let values=[        //multiple values
        ['2_123','2_123_newuser','2_abc@gmail.com','2_abc'],
        ['3_123','3_123_newuser','3_abc@gmail.com','3_abc']
    ];

    try {
        connection.query(q,[values],(err,res)=>{
            if(err) throw err;
            console.log(res)
        })
    } catch (err) {
        console.log("ERROR :",err)
    }
    connection.end();
}



//                  INSERT in Bulk
//
bulk();
function bulk(){
    //Faker to generate data -> return [arr] instead of {obj}

    const {faker}=require('@faker-js/faker');

    let  gen_Random_User = () => {
        return [
           faker.string.uuid(),
           faker.internet.username(),
           faker.internet.email(),
           faker.internet.password(),
        ];
    };

    let data=[];        //empty arr that will stor user data
    for(let i=1;i<=100;i++){
        data.push(gen_Random_User());
    }


    //insert data into table
    let q="INSERT INTO user (id,username,email,password) VALUES ?";
    let values=data;
    
    try {
        connection.query(q,[values],(err,result)=>{
            if(err) {
                throw err;
                return;
            }
            console.log("DATA INSERTED SUCCESSFULLY !!");
        })
    } catch (error) {
        console.log(error);
    }

    connection.end();

}