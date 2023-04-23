const express = require("express");

const app = express();
app.get("/hom", (req, res) => {
  //res.contentType("application/html");
  res.status(200).send("<h1>Hello Word<h1>");
});
app.get('/users', (req, res) => {
  const users = [
   {name: "Jane Doe",
  email: "jane@email.com",
  },
  {
    name: "John Doe",
    email: "john@email.com",
  },
  ];
  res.status(200).json(users);
});
const port = 8080;
app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
