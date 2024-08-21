import "./Model.css";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";
import user from '../../assets/images/User.png'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Model = () => {
  // const [data, setData] = useState([])
  const {id} = useParams();
  const [values, setValues] = useState({
    first:"",
    dob:"",
    gender:"",
    country:"",
    description:""
  })
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3000/users'+ id)
    .then(res => {
      setValues(res.data);
    })
    .catch(err => console.log(err));
  },[])

  const handleUpdate = (event) =>{
    event.preventDefault();
    axios.put('http://localhost:3001/users/' + id, values)
    .then(res =>{
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err));
  } 


  return (
    
    <div className="model-container" >
    
    <div className="model">
      <form onSubmit={handleUpdate}>
      <div className="space-y-12">

        <div className=" pb-5">
         
          <div className="mt-10 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-6">

            <div className="sm:col-span-2">
            <div className="mt-2 flex justify-center items-center">
            <img src={user} alt="" className='w-12 justify-center items-center
         rounded-full overflow-hidden border border-gray-500'/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"                
                   value={values.first}
                   onChange={e => setValues({...values, first: e.target.value})}
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   
                  placeholder:text-gray-900
                   placeholder:font-semibold
                  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
             
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="age" className="block text-sm font-semibold leading-6 text-gray-400">
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="text"
                  value={values.dob}
                  onChange={e => setValues({...values, dob: e.target.value})}
                  autoComplete="age"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900
                   placeholder:font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm font-semibold leading-6 text-gray-400">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  type="text"
                  value={values.gender}
                  onChange={e => setValues({...values, gender: e.target.value})}
                  autoComplete="gender"
                  className="block w-full bg-white h-10 p-2 rounded-md border-0  
                  font-semibold
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-400">
                Country
              </label>
              <div className="mt-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={values.country}
                  onChange={e => setValues({...values, country: e.target.value})}
                  autoComplete="country"
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-900
                   placeholder:font-semibold ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-400">
               Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={values.description}
                  onChange={e => setValues({...values, description: e.target.value})}
                  className="resize-none block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900
                   placeholder:font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
                  "
                  defaultValue={''}
                />
              </div>
            </div>
 
          </div>
        </div>

      </div>

      <div className="mt-2 flex items-center justify-end gap-x-1">
        <Link to="/" className="rounded-md  px-1 py-1 text-sm font-semibold text-white ">
          <RxCrossCircled className="text-red-600 text-3xl"/>
        </Link>
        <button
          type="submit"
          className="rounded-md  px-1 py-1 text-sm font-semibold text-white "
        >
          <FaRegCircleCheck className="text-emerald-600 text-3xl"/>
        </button>
      </div>
      </form>

      </div>
    </div>
  )
}

export default Model