"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const AddBook=()=>{
    const router=useRouter()

    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    const[genre,setGenre]=useState("")
    const[price,setPrice]=useState(0)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newBook={title,author,genre,price}
        axios.post("http://localhost:8000/books",newBook)
        .then(res=>{
            alert('Saved')
            router.push("/booklist")
        })
        .catch(err=>console.log(err))
    }
    return(
       <div  class="container-xl">
        <h2 class="container-sm">Add New Book</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
                <label  className="form-label">Title</label>
                <input className="form-control"  type='text'  name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            </div>  
             <div className="mb-3 mt-3">
                <label  className="form-label">Author</label>
                <input className="form-control"  type='text'  name='author' value={author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
            </div>  
             <div className="mb-3 mt-3">
                <label  className="form-label">Genre</label>
                <input className="form-control"  type='text'  name='genre' value={genre} onChange={(e)=>{setGenre(e.target.value)}}></input>
            </div>  
             <div className="mb-3 mt-3">
                <label  className="form-label">Price</label>
                <input className="form-control"  type='number'  name='price' value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
            </div>  
            <div className="mb-3 mt-3" align="center">
                <button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;
                <Link className="btn btn-primary" href="/booklist">Home</Link>
            </div>
        </form>

    </div>

    )
}
export default AddBook