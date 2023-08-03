'use client'
import Navbar from "../components/navbar"
import AdminToolBar from "../components/toolbar"
import { Suspense, useEffect, useState } from "react"
import Loading from "@/app/loading"
import { useSession } from "next-auth/react"

const Layout = ({children})=>{  
    const {status,data} = useSession()
    const [isLoading,setLoading] = useState(true)
    useEffect(()=>{
        if(status === "unauthenticated"){
            setLoading(false)
           // redirect('/login')
        }
        if(status==="authenticated"){
            const {role,isVerified} = data.user
            setLoading(false)
            if(role==="user"){
              //  redirect("/requeststore")
            }
            
        }
       
    },[status])
    if(isLoading) return<Suspense fallback={<Loading/>}/>
    return <><Suspense fallback={<Loading/>}>
    <AdminToolBar/>
    <div className="grid basis-full mobile:my-[90px] my-[65px] grid-cols-1 mobile:grid-cols-[208px,auto] fixed w-full">
    <Navbar/>
    {children}
    </div>
    </Suspense>
    </>
}

export default Layout