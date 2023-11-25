import { useEffect, useState } from "react"
import useAuth from "./useAuth"
import { getRole } from "../api/utils"

const useRole =()=>{
    const {user,loading} = useAuth()

    const [role,setRole] = useState(null)

    useEffect(()=>{
        getRole(user?.email)
        .then(data =>{
            setRole(data)
        })
    },[user,setRole])
    return[role]
}

export default useRole