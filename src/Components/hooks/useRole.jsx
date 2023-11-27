
import useAuth from "./useAuth"
import { getRole } from "../api/utils"
import { useQuery } from "@tanstack/react-query"

const useRole = () => {
    const { user, loading } = useAuth()

    const { data: role } = useQuery({
        queryFn: async () => await getRole(user?.email),
        queryKey: ['role'],
    })

    return [role]
}

export default useRole