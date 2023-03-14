import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors);
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection estd.", socket.id);

  socket.on("create_room", () => {
    const id = 123;
    console.log("Creating room with room id:", id);
    socket.emit("room_created", id);
  });

  socket.on("join_room", (id) => {
    console.log("Joining room with id:", id);
  });

  socket.on("disconnect", (reason, desc) =>
    console.log("disconnected", reason, desc)
  );
});

httpServer.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
