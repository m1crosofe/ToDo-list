<script>
    import ToDoControls from "./ToDoControls.svelte";
    import ToDoItem from "./ToDoItem.svelte";
    import {onMount} from "svelte";
let items = []
let id = 0;
onMount(()=>{
    if(localStorage.key('items')){
        items = JSON.parse(localStorage.getItem('items'))
    }
    if (items.length){
        items.forEach((i)=>{
            if (id <i.id){
                id = i.id;
            }
        });
    id++;
    }
});
function onChangeStatus(event){
    const item = items.find((i) => i.id === event.detail.id)
    item.isDone = !item.isDone;
    items = items;
    localStorage.setItem('items', JSON.stringify(items));
}
function onAddItem(event){
    const item = {
        id: id++,
        text: event.detail.text,
        isDone: false
    };
    items.push(item);
    items = items;
    localStorage.setItem('items', JSON.stringify(items));
}
function onDeleteItem(event){
    const idx = items.findIndex(i=>i.id === event.detail.id);
    items.splice(idx, 1);
    items = items;
    localStorage.setItem('items', JSON.stringify(items));
}
</script>
<div class="todo-app">
    <ToDoControls on:add={onAddItem}/>
    <div class="todo-app__field">
        {#each items as item}
            <ToDoItem 
            id={item.id} 
            text={item.text} 
            isDone={item.isDone} 
            on:change={onChangeStatus} 
            on:remove={onDeleteItem}/>
        {/each}
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
    .todo-field{
        background: white;
        flex-grow: 1;
        border-radius: 15px;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>