const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name: "Saiem Saeed",
    //     age: 21,
    //     location: "Islamabad"
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert data', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //deleteOne
    //deleteMany

    db.collection('Users').findOneAndDelete({
        name: "Mike"
    }).then((data) => {
        console.log(data);
    });

    client.close();
});