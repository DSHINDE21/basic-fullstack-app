import express from "express";
// const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//get a list of investors
app.get("/api/investors", (req, res) => {
  const investors = [
    { id: 1, name: "John Doe", city: "New York" },
    { id: 2, name: "Alice Smith", city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", city: "Chicago" },
    { id: 4, name: "Emily Davis", city: "San Francisco" },
    { id: 5, name: "Michael Wilson", city: "Miami" },
  ];

  res.send(investors);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
