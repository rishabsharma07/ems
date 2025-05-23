import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="absolute top-10 left-100 font-bold text-3xl">
        <h1 className="text-emerald-600">Employee Management System</h1>
        <div className="p-1 text-[10px] leading-[13px] text-sm font-medium">
          <p>For testing: </p>
          <p>Admin: email: admin@me.com  password: 123</p>
          <p>Employee 1: email: e1@employee.com password: 123</p>
          <p>Employee 2: email: e2@employee.com password: 123</p>
          <p>Employee 3: email: e3@employee.com password: 123</p>
          <p>Employee 4: email: e4@employee.com password: 123</p>
          <p>Employee 5: email: e5@employee.com password: 123</p>

        </div>

          
      </div>
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
