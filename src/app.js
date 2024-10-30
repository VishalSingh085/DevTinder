const express = require("express");
const { AuthData, AuthUser } = require("./Middleware/auth");
const app = express();

// Middleware for authentication on specific routes
app.use("/admin", AuthData);
app.use("/user", AuthUser);

// Route to add data
app.get("/admin/addData", (req, res) => {
    res.status(200).send("Data sent successfully !!");
});

// User login route
app.get("/user/login", (req, res) => {
    res.status(200).send("Login data successful");
});

// User data route with authentication
app.get("/user/userData", AuthUser, (req, res) => {
    res.status(200).send("User data sent successfully...");
});

// Route to delete data
app.get("/admin/deleteData", (req, res) => {
    res.status(200).send("Deleted data");
});

// Correctly defining a POST route with regex
app.post(/.*fly$/, (req, res) => {
    res.status(201).send("Data successfully saved to database");
});

// Route to delete user
app.delete("/user", (req, res) => {
    res.status(200).send("Deleted successfully");
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
