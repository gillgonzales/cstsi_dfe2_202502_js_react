import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";

export const NavLinks = ({ user }) => {
  const {logOut} = useAuthContext()
  const navigate = useNavigate()
  return <div className="flex w-3/4 justify-around text-center sm:w-[30%] md:w-1/4 lg:w-1/5 xl:w-[15%] 3xl:w-[10%] 4xl:w-[8%]">
    {user?.name ? (
      <><Link
        to="#dashboard"
        className="mt-4 mx-1 text-sm text-gray-400 underline hover:text-gray-100"
      >
        Dashboard
      </Link>
      <Link onClick={()=>{logOut(); navigate('/')}}
          to="#"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Logout
        </Link>
      </>
    ) : (
      <>
        <Link
          to="/login"
          className="mt-4 text-sm text-gray-400 underline hover:text-gray-100"
        >
          Log in
        </Link>
      </>
    )}
  </div>
}