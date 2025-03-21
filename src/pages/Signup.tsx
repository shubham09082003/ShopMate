import { useState } from "react";
import { API_URL } from "../api";
import axios from "axios";

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone_number, setPhone_number] = useState('');

    const handleSubmit = async () => {

        await axios.post(`${API_URL}/auth/register`, {        
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phone: phone_number
        },
        {
            headers: {
                'Content-Type': 'application/json', 
            }
        });
        window.location.href = '/login';
    }
  return (
        <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-100vh lg:py-0 mt-10 ">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Create an account
                      </h1>
                      <div className="space-y-4 md:space-y-6">
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true}/>
                          </div>
                          <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                          </div>
                          <div>
                              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FirstName</label>
                              <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" placeholder="Jhon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                          </div>
                          <div>
                              <label htmlFor="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
                              <input onChange={(e) => setLastName(e.target.value)} type="text" name="LastName" id="LastName" placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                          </div>
                          <div>
                              <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                              <input onChange={(e) => setPhone_number(e.target.value)} type="text" minLength={10} maxLength={10} name="phone_number" id="phone_number" placeholder="8XX8X7XX2X" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true}/>
                          </div>
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true}/>
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                              </div>
                          </div>
                          <button onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </section>
  )
}

export default Signup;