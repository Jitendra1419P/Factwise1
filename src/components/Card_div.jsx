
import user from '../assets/images/User.png'
import { GoChevronDown } from "react-icons/go";
import { TfiPencil } from "react-icons/tfi";
import { RiDeleteBin5Line } from "react-icons/ri";
import './Card_div.css'
import { IoMdSearch } from "react-icons/io";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card_div = () => {
  
  const [selected, setSelected] = useState(null)
  const [data, setData] = useState([])
  const [search,setSearch] = useState('');
 

  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])


    
    const toggle = (i) =>{
      if(selected === i){
        return setSelected(null)
      }
      setSelected(i)
    }



  return (
    <div >

      <div className="flex relative items-center text-slate-600 search_input">
        <IoMdSearch className="ml-1 text-3xl absolute text-neutral-500"/>
        <input type="text" placeholder="Search user" id="searchInput"
        className="flex-grow h-10 bg-transparent border border-gray-400 rounded-md pl-10" 
        onChange={
          (event)=>{
            setSearch(event.target.value)
          }
        }
        />
      </div>

        {
          data.filter((val)=>{
            if(search === ""){
              return val;
            }
            else if(val.first.toLowerCase().includes(search.toLocaleLowerCase())){
              return val;
            }
          })
          .map((list,i)=> 
          (
            <div key={i} className='className="flex flex-col mt-2 p-3 border rounded-lg relative border-gray-300"'> 

            <div className='heder_dev flex items-center  w-full justify-start '>
        <img src={user} alt="" className='w-11
         rounded-full overflow-hidden border border-gray-500'/>

         <span className='user_name flex text-base ml-5 items-center justify-center'>
            {list.first} {list.last}
         </span>
         
         <span className='absolute icon flex justify-center font-semibold text-lg right-2 top-6' onClick={()=>toggle(i)}>
         <GoChevronDown className={selected === i ? 'icon' : 'icon font-semibold' }/>
         </span>
        </div>  


        <div className={selected === i ? 'body_div activ' : 'body_div' } >
           <div className="info_div flex-row grid grid-cols-3 justify-center items-center mt-2">
                <div className="age">
                    <span>Age</span>
                    <p>{list.dob}</p>
                </div>
                <div className="gender">
                    <span>Gender</span>
                    <p>{list.gender}</p>
                </div>
                <div className="country">
                    <span>Country</span>
                    <p>{list.country}</p>
                </div>
           </div>
           <div className='description mt-2'>
                 <span>
                    Description
                 </span>
                 <p>{list.description}</p>
           </div>
           
           <div className="mt-2 flex items-center justify-end gap-x-1">
        <Link
        to={`/delete/${list.id}`}
        className="rounded-md  px-1 py-1 text-sm font-semibold text-white ">
          <RiDeleteBin5Line className="text-red-600 text-2xl"/>
        </Link>
        <Link
          to={`/model/${list.id}`} 
          className="rounded-md  px-1 py-1 text-sm font-semibold text-white "
        >
          <TfiPencil className="text-emerald-600 text-2xl"/>
        </Link>
      </div>

        </div>
          
            </div>
          ))}  
 

    </div>
    
  )
}

export default Card_div