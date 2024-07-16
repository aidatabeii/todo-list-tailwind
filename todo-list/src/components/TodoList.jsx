import { useState } from "react";
import { useSelector} from "react-redux";
import Todos from "./Todos";
import { v4 } from "uuid";
function TodoList(){
    const store= useSelector((store)=>(store.todo.todoValue));
    const [todos,setTodos]=useState([]);
    const [alert,setAlert]=useState("");
    const [contact,setContact]=useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:"",
    });
    const changeHandler=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setContact( (contact)=>({...contact , [name]:value}));
    };
    const addHandler=()=>{
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("Please enter your information dear💚");
            return;
        };
            setAlert("");
            const newContact = {...contact , id:v4()};
        setTodos(todos=>([...todos,newContact]))
        setContact(
            { name:"",
                lastName:"",
                email:"",
               phone:"",});
            };
            const deleteHandler= id =>{
                const newTodos = todos.filter((contact) => contact.id !== id);
                setTodos(newTodos);
            }
    return(
         <div className={styles.container}>
        <div className={styles.form}>
            <input type="text" placeholder="Name" name="name" value={contact.name } onChange={changeHandler}/>
            <input type="text" placeholder="Last-name" name="lastName"  value={contact.lastName }onChange={changeHandler}/>
            <input type="email" placeholder="Email" name="email" value={contact.email }onChange={changeHandler} />
            <input type="number" placeholder="Phone" name="phone" value={contact.phone }onChange={changeHandler} />
            <button onClick={addHandler}>ADD CONTACT</button>
        </div>
        <div className={styles.alert}>{alert && <p> {alert} </p>}</div>
        <Todos todos={todos} deleteHandler={deleteHandler}/>
    </div>)
};
export default TodoList;