
import React  from 'react';
import {useState} from "react";
import "./todolist.css";

const TodoList = () => {
    const [activity, setActivity] = useState("");
    const[listData, setlistData] = useState([]);
    function addActivity(){
       // setlistData([...listData, activity])
        //console.log(listData);
        setlistData((listData) =>{
            const updatedList =[...listData, activity]
            console.log(updatedList);
            setActivity("");
            return updatedList
        })

    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return id=id;
        })
        setlistData(updatedListData);

    }
    function removeAll(){
        setlistData([]);
    }
  return (
    <>
    <div className="container">
   <div className="header"><marquee direction ="right">TODO LIST</marquee> </div>

   <input type = "text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value) }/>
   <button onClick={addActivity}>Add</button>
   <p className="list-heading"><marquee direction="left">Here is your List</marquee></p>
{listData!=[] && listData.map((data, i)=>{
    return(
        <p key={i} >
            <div className='listdata'>{data}</div>
            <div className='btn-position'><button onClick={() =>removeActivity(i)}>Remove</button></div>
        </p>
    )
})}
{listData.length <=1 && 
<button onClick={()=>removeAll()}>Remove All</button>}

    </div>
    </>
  )
}

export default TodoList