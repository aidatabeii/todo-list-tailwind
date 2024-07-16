//contact list
import TodoItem from "./TodoItem";
function Todos({todos, deleteHandler}) {
    return(
<div className={styles.container}> 
    <h3> List of information </h3>
    {todos.length ?
     (   <ul className={styles.todo}>
        {todos.map((contact)=>(
           <TodoItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
        ))}
    </ul>):(<p className={styles.message}> You have not entered anything!!! 🙄</p>)}
</div>
    );
};
export default Todos;