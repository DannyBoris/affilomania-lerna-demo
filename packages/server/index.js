const fs = require("fs");
const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const cors = require("cors");
const { createSample } = require("./data_sample");
const { readData, writeData } = require("./fs-utils");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Start the Socket.IO server
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("socket has connected");
  socket.emit("newConnection", { message: "new connection" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/trace", async (req, res) => {
  // send as json
  const data = await readData();
  res.json(data);
});

app.delete("/trace/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const data = await readData();
    const filteredData = data.filter((trace) => trace.eventId !== eventId);
    fs.writeFile(
      "./data.json",
      JSON.stringify(filteredData, null, 2),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File has been updated");
      }
    );
    io.emit("expiredTrace", eventId);
    res.status(200).send({ message: "Trace deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.post("/trace", async (req, res) => {
  try {
    const body = req.body;
    const newTrace = createSample(body?.message);
    await writeData(newTrace);
    io.emit("newTrace", newTrace);
    res.status(201).send({ message: "Trace created" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Something went wrong" });
  }
});
// Start the Express server
server.listen(9000, () => {
  console.log(`Server listening at http://localhost:9000`);
});
