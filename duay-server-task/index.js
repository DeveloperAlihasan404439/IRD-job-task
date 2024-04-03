const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 5000;
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://duay.vercel.app"
    ],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  res.send("start the duay server site job task");
});

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.wjgws1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const CategoriesCollection = client
      .db("dua_job-task")
      .collection("categories");
    const DuayTitleCollection = client
      .db("dua_job-task")
      .collection("dua_title");

    app.get("/categories", async (req, res) => {
      const result = await CategoriesCollection.find().toArray();
      res.send(result);
    });
    app.get("/duay", async (req, res) => {
      const result = await DuayTitleCollection.find().toArray();
      res.send(result);
    });
    app.get("/duay/title", async (req, res) => {
      const { duay } = req.query;
      console.log(duay);
      const fileter = { categories_title: duay };
      const result = await DuayTitleCollection.findOne(fileter);
      res.send(result);
    });
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server runing the port : ${port}`);
});
