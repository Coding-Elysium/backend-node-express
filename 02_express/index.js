import express from "express";
const app = express();
const port = 3000;
let users = [];
let userId = 1;

app.use(express.json());

app.get("/allUser", (req, res) => {
  res.status(200).send(users);
});

app.get("/user/:id", (req, res) => {
  const user = users.find((singleUser) => {
    return (singleUser.id = req.params.id);
  });
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Not Found");
  }
});

app.post("/addUser", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: userId++,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).send(newUser);
});

app.put("/updateUser/:id", (req, res) => {
  const { name, email } = req.body;
  const user = users.find((person) => {
    return (person.id = req.params.id);
  });
  if (user) {
    user.id = user.id;
    user.name = name;
    user.email = email;
    res.status(200).send(user);
  } else {
    res.status(404).send("Not found");
  }
});

app.delete("/deleteUser/:id", (req, res) => {
  const user = users.find((person) => {
    return (person.id = req.params.id);
  });
  if (user) {
    res.status(200).send(`User with an id of ${user.id} has been deleted`);
    users.splice(user, 1);
  } else {
    res.status(404).send("404 Not Found");
  }
});

app.listen(port, () => {
  console.log("Server is Running");
});

// import express from "express";

// const app = express();

// const port = 3000;

// app.use(express.json());

// let teaData = [];

// let nextId = 1;

// app.post("/teas", (req, res) => {
//   const { name, price } = req.body;
//   const newTea = {
//     id: nextId++,
//     name,
//     price,
//   };
//   teaData.push(newTea);
//   res.status(201).send(newTea);
// });

// app.get("/teas", (req, res) => {
//   res.status(200).send(teaData);
// });

// app.get("/teas/:id", (req, res) => {
//   const tea = teaData.find((t) => t.id === parseInt(req.params.id));
//   if (!tea) {
//     return res.status(404).send("404 not found");
//   } else {
//     return res.status(200).send(tea);
//   }
// });

// app.put("/teas/:id", (req, res) => {
//   const tea = teaData.find((t) => t.id === parseInt(req.params.id));
//   if (!tea) {
//     return res.status(404).send("Tea not found");
//   }
//   const { name, price } = req.body;
//   tea.name = name;
//   tea.price = price;
//   res.status(200).send(tea);
// });

// app.delete("/teas/:id", (req, res) => {
//   const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
//   if (index === -1) {
//     return res.status(404).send("Tea not found");
//   }
//   teaData.splice(index, 1);
//   return res.status(204).send();
// });

// app.listen(port, () => {
//   console.log("Server is running");
// });
