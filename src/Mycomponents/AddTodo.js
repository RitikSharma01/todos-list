import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")


    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title and discription cannot be blank")
        }

        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className='container my-3'>
            <h3>Add a ToDO</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"  />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
