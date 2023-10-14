<script>
    import ToDoControls from "./ToDoControls.svelte";
    import ToDoItem from "./ToDoItem.svelte";
const items = [
    {
        id: 1,
        text: 'Some text2',
        isDone: false
    },
    {
        id: 2,
        text: 'Some text2',
        isDone: false
    }

];
</script>
<div class="todo-app">
    <ToDoControls />
    <div class="todo-app__field">
        <ToDoItem/>
    </div>
</div>

<style>
    .todo-app{
        width: 700px;
        height: 80%;
        background: #E6E6E6;
        padding: 40px 60px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>