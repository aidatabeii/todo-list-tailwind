
function TodoItem({data:{id , name , lastName , email , phone  } ,deleteHandler,}) {
    
    return(
        <li className={styles.item} key={id}>
        <p>{name} {lastName}</p>
        <p><span>📫</span>{email}
        </p>
        <p><span>☎</span> {phone}
        </p>
        <button onClick={()=>deleteHandler(id)}>❌</button>
        
    </li>
    );
}
export default TodoItem;