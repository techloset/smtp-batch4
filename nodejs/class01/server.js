const express = require('express')

const app = express()

const port = 5000

app.get('/', (req, res)=>{
    console.log('hellow world - route /');
    res.send('hello world')
    // everytime call when we invoke get method of server
})

app.get('/users', (req, res)=>{

    // db
    let response = {
        statusCode: 200,
        data:[{id:34,name:'sdf'},{id:34,name:'sdf'},],
        message:'orders successfully fetched'
    }
    res.json(response)

    // everytime call when we invoke get method of server
})

app.post('/user', (req, res)=>{
    console.log('user data add');
    let response = {
        statusCode: 200,
        message:'user added'
    }
    res.json(response)

    // everytime call when we invoke get method of server
})


app.delete('/user', (req, res)=>{
    console.log('user deleted');
    let response = {
        statusCode: 200,
        message:'user user deleted'
    }
    res.json(response)

    // everytime call when we invoke get method of server
})


app.put('/user', (req, res)=>{
    console.log('user updated');
    let response = {
        statusCode: 200,
        message:'user Updated'
    }
    res.json(response)

    // everytime call when we invoke get method of server
})



app.get('/orders', (req, res)=>{
    console.log('order listing');
    let response = {
        statusCode: 200,
        data:[{id:34,title:'sdf'},{id:34,title:'sdf'},],
        message:'orders successfully fetched'
    }
    res.json(response)

    // everytime call when we invoke get method of server
})


app.listen(port, () => {
  console.log(`server running on port ${port}`)
})


//get - 192.168.12.1:5000/

//get - 192.168.12.1:5000/user

//get - 192.168.12.1:5000/orders