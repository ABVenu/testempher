const express = require("express");
const connectToDb = require("./db_configs/mongo.config");
const UserRouter = require("./routes/user.route");
const AdminRoutes = require("./routes/admin.route");
require("dotenv").config();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");

const app = express();
app.use(express.json()); /// mw to senses/parses json req
app.use(express.urlencoded({extended:true}))  //MW to pasre, body sent by HTML form whenever you are using form served by express 
app.use(cors())
let PORT = process.env.SERVER_PORT;
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


/**
 * @swagger
 * /:
 *   get:
 *     summary: Test Route
 *     description: Returns a test message.
 *     tags:
 *     - Test
 *     responses:
 *       200:
 *         description: Success message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: This is test route
 */


/// test route
app.get("/", (req, res) => {
  try{
    res.status(200).json({msg:"This is test route"});
  }catch(err){
    res.status(500).json({msg:"Something went wrong"})
  }
});


/**
 * @swagger
 * /home:
 *   get:
 *     summary: Test Route
 *     description: Returns a test message.
 *     tags:
 *     - Test
 *     responses:
 *       200:
 *         description: Success message
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: This is test route
 */


app.get("/home", (req, res) => {
  try{
    res.status(200).json({msg:"This is Home Route"});
  }catch(err){
    res.status(500).json({msg:"Something went wrong"})
  }
});
/// other routes below

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get user routes
 *     description: Handles user-related operations.
 *     tags:
 *     - User
 *     responses:
 *       200:
 *         description: User route is accessible
 */
app.use("/users", UserRouter);


/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Get admin routes
 *     description: Handles admin-related operations.
 *     tags:
 *     - Admin
 *     responses:
 *       200:
 *         description: Admin route is accessible
 */


app.use("/admin", AdminRoutes)


app.listen(PORT, () => {
  connectToDb();
  console.log("server started");
});
