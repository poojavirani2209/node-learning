const express = require("express"); //import express package
const path = require("path"); //import path core module for file paths methods

app = express(); //initialize express application that will handle the requests and response.

/**
 * last middleware, when no routes match.
 */
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000); //start server and listen request that are hit on port 3000
