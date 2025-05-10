import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
const Header = (props, userData) => {
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload()
    toast.success("Logout successfully! ✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  // console.log(props);
  // console.log(userData)
  return (
    <div className="flex items-end justify-between">
      <ToastContainer />
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold ">
          {props.data?.firstName ? props.data?.firstName : "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
