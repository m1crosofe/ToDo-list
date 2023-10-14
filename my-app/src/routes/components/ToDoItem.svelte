<script>
    export let id;
    export let text;
    export let isDone;
</script>

<div class="todo-item">
    <input class="todo-item__check" type="checkbox">
    <p class="todo-item__text">Some text</p>
    <button class="todo-item__btn">Del</button>
</div>

<style>
    .todo-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: #ffebeb;
        border-radius: 15px;
    }
    .todo-item__check{

    }
    .todo-item__text{
        flex-grow: 1;
    }
    .todo-item_done{
        text-decoration: line-through;
    }
    .todo-item_done .todo-item__text{
        background: #EBFFED;
    }
    .todo-item__btn{
        border: none;
        border-radius: 10px;
        background-color: #791dbc;
        padding: 10px;
        min-width: 100px;
    }
</style>