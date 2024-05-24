import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null
  });
  console.log(formData, "formData");

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'profileImage' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const register_form = new FormData()

      for (var key in formData) {
        register_form.append(key, formData[key])
      }

      const response = await fetch("http://localhost:8000/api/v1/athentication/register", {
        method: "POST",
        body: register_form
      })

      if (response.ok) {
        navigate("/login")
      }
    } catch (err) {
      console.log("Registration failed", err.message)
    }
  }
  

  return (
    <div className="">
      <form onSubmit={handleSubmit}  className="w-full max-w-md my-10 mx-auto relative z-50 border border-gray-300 bg-white rounded-md p-8">
        <h3 className="text-2xl text-center font-extrabold">Create an account</h3>
        <div className="text-center">
       
          {
            formData.profileImage ? <img  src={URL.createObjectURL(formData.profileImage)} alt="profile" className="w-20 h-20 object-cover rounded-full border border-gray-200 inline-block my-3"  /> :
            <label htmlFor="image">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" className="inline-block my-3" viewBox="0 0 53 53">
              <path fill="#e7eced" d="m18.613 41.552-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z" data-original="#e7eced" />
              <path fill="#556080" d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z" data-original="#556080" />
            </svg>
              <input onChange={handleChange} className='hidden' id="image" type="file" name="profileImage" accept="image/*" required />
            </label>
          }
        </div>
        <div className="space-y-4">
          <div className='flex gap-2'>
            <div>
              <label className="text-sm mb-2 block">First Name</label>
              <input onChange={handleChange} name="firstName" value={formData.firstName} type="text" required className="bg-white border border-gray-300 text-red-500 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter First name" />
            </div>
            <div>
              <label className="text-sm mb-2 block">Last Name</label>
              <input onChange={handleChange} name="lastName" value={formData.lastName} type="text" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter last name" />
            </div>
          </div>
          <div>
            <label className="text-sm mb-2 block">Email</label>
            <input onChange={handleChange} value={formData.email} name="email" type="email" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded outline-blue-500" placeholder="Enter email" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <input onChange={handleChange} value={formData.password} name="password" type="password" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500" placeholder="Enter password" />
          </div>
          <div>
            <label className="text-sm mb-2 block">Confirm Password</label>
            <input onChange={handleChange} value={formData.confirmPassword} name="confirmPassword" type="password" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500" placeholder="Enter password" />
          </div>
        </div>
        <div className="mt-4">
          <button  type="submit" className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Create an account
          </button>
        </div>
        <p className="text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
      </form>
    </div>
  );
}

export default Register;
