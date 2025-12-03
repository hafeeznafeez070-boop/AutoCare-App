import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is our home page");
});

app.get("/api/person", (req, res) => {
  const data = [
    {
      id: 1,
      name: "person-1",
      age: 10,
    },
    {
      id: 2,
      name: "person-2",
      age: 11,
    },
    {
      id: 3,
      name: "person-3",
      age: 12,
    },
    {
      id: 4,
      name: "person-4",
      age: 13,
    },
    {
      id: 5,
      name: "person-5",
      age: 14,
    },
    {
      id: 6,
      name: "person-6",
      age: 15,
    },
  ];

  res.send(data);
});

const port = process.env.PORT || 3000;
// there should be a port number from .env for production

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
