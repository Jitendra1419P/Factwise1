import { Link, useParams,} from "react-router-dom";
import "./Delete.css";
import { RxCross2 } from "react-icons/rx"; 
import { useEffect, useState } from "react";
import axios from "axios";


const Delete = () => {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    axios.get('http://localhost:3000/users'+ id)
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err));
  },[])

  const hendleDelete =(targetIndex) =>{
    setData(data.filter((_,i) => i !== targetIndex))
  }


  return (
    <div className="delete-container" >
        
        <div className="delete_box">
        <div className="cancel_div">
            <Link to="/" className="but_cancel">
            <RxCross2 />
            </Link>
         </div>
         <p>Are you sure you want to delete ?</p>

         <div className="button_div mt-2 flex items-center justify-end gap-x-2 ">
          
          <Link to="/" className="but cancel_but p-2 ">Cancel</Link> 
          <button onClick={() => hendleDelete(data.i)} className="but delete_but">Delete</button>  
         </div>       

        </div>
    </div>
  )

}

export default Delete