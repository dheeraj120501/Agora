<script lang="ts">
  import {io} from "socket.io-client";
	import {Button} from "./lib";

  const socket = io("http://localhost:8080");

  socket.on("connect", ()=>{
    console.log("connected to server", socket.id)
  })

  socket.on("room_created", (id)=>{
    console.log("Got room id:",id)
  })

</script>

<main class="flex flex-col justify-center items-center h-screen w-screen bg-red-100">
  <div class="w-2/6 flex justify-around">
    <Button value="Join Room" onClick={() => {
      socket.emit("join_room", "room_id")}} />
    <Button value="Create Room" onClick={() => {
      socket.emit("create_room")}} />
  </div>
</main>

<style>

</style>