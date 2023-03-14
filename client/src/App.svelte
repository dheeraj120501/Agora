<script lang="ts">
  import {io} from "socket.io-client";
  const socket = io("http://localhost:8080");
  let id = undefined;
  socket.on("connect", ()=>{
    id = socket.id
    console.log("connected to server", socket.id)
  })
</script>

<main class="bg-red-500">
  Hello World {id}

</main>

<style>

</style>