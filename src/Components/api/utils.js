import axios from "axios"

export const imageUpload = async image =>{
    const formData = new FormData()
    formData.append('image', image)

  
      const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, formData)
      console.log(data)
    return data;
}

export const getRole = async (email) =>{
  const {data} = await axios.get(`http://localhost:5000/users/${email}`)
  return data.role;
}