<script lang="ts">    
    export let value;
    export let onClick;
</script>

<button class="bg-blue-400 px-4 py-2 text-white rounded-lg hover:bg-blue-500 transition-all text-lg" on:click={onClick}>{value}</button>
