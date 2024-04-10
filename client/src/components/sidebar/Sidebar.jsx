import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sidebar() {
    const[cats,setCats]=useState([]);
    useEffect(()=>{
         const getCats=async()=>{
            const res= await axios.get("/categories")
            setCats(res.data)
         }
         getCats()
    },[])
    return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">About ME</span>
                <img src="https://images.pexels.com/photos/14760616/pexels-photo-14760616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <br />
                <p style={{margin: "30px"}}>Welcome to UncoverTheWorld.com, your go-to destination for immersive travel experiences, destination insights, and inspiration to quench your wanderlust. We are passionate explorers, writers, and photographers with a shared goal: to inspire and empower fellow travelers on their journeys of discovery.</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">Categories</span>
            <ul className="sidebarlist">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`}className="link"><li className="sidebarlistitem">{c.name}</li></Link>

                ))}
                

            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">Follow Us</span>
            
        </div>
    </div>
  )
}
