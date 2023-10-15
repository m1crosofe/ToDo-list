<script>
	import { createEventDispatcher } from "svelte";
    export let id;
    export let text;
    export let isDone;
    const dispatch = createEventDispatcher();
</script>

<div class="todo-item" class:todo-item_done={isDone}>
    <input 
    class="todo-item__check" 
    type="checkbox"
    on:change={dispatch('change', {id})}
    checked={isDone}
    />
    <p class="todo-item__text">{text}</p>
    <button class="todo-item__btn" on:click={dispatch('remove', {id})}>Del</button>
</div>

<style>
    .todo-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        margin: 5px;
        background: #ffebeb;
        border-radius: 15px;
    }
    .todo-item__check{

    }
    .todo-item__text{
        flex-grow: 1;
    }
    .todo-item_done{
        background: #EBFFED;
        
    }
    .todo-item_done .todo-item__text{
        text-decoration: line-through;
    }
    .todo-item__btn{
        border: none;
        border-radius: 10px;
        background-color: #791dbc;
        padding: 10px;
        min-width: 100px;
    }
</style>