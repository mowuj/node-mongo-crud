const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//user :dbuser92
// password:inEYnQ0UacdFULxz



const uri = "mongodb+srv://dbuser92:inEYnQ0UacdFULxz@cluster0.jhijo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');

        app.post('/user', async(req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result)
        })
    }
    finally {
        
    }
}

run().catch(console.dir);
//midleware
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Running my node crud server')
});
app.listen(port, () => {
    console.log('CRUD server is running');
})