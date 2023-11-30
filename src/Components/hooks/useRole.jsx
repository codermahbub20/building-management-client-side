
import useAuth from "./useAuth"
import { getRole } from "../api/utils"
import { useQuery } from "@tanstack/react-query"

const useRole = () => {
    const { user, loading} = useAuth()

    const { data: roles,isLoading } = useQuery({
        enabled: !!user,
        queryFn: async () => await getRole(user?.email),
        queryKey: ['roles'],
    })

    return [roles,isLoading]
}

export default useRole