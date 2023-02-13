import useAuth from '../../hooks/useAuth';
import { Link } from "react-router-dom";



export default function ProfileForm() {
  const { authenticatedUser } = useAuth();

  return (

    <div className='p-6'>
      <div className='flex mb-5' id='firstname'>
        <p className='w-32'>Firstname</p>
        <p className='text-white w-32'>{authenticatedUser.firstName}</p>
      </div>
      <div className='flex mb-5' id='lastname'>
        <p className='w-32'>Lastname</p>
        <p className='text-white w-32'>{authenticatedUser.lastName}</p>
      </div>
      <div className='flex mb-5' id='email'>
        <p className='w-32'>Email</p>
        <p className='text-white w-32'>{authenticatedUser.email}</p>
      </div>
      <div className='flex mb-5' id='username'>
        <p className='w-32'>Username</p>
        <p className='text-white w-32'>{authenticatedUser.userName}</p>
      </div>
      <div>
        <button
          className='bg-[#FEC601] w-28 text-white p-1 rounded mt-2'
        >
         <Link to="/editprofile"> แก้ไขข้อมูล </Link>
        </button>
      </div>
    </div>
  )
}
