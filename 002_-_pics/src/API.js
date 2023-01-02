import axios from "axios";

const searchImages=async (search)=>{
    const response=await axios.get("https://api.unsplash.com//search/photos", {
        headers: {
            Authorization: 'Client-ID 2rmKzN94eTv1cMrWlJaL9zyNlRTXtb1ry2OH3m1eak0'
        },
        params: {
            query: search
        }
    });

    return response.data.results;
}

export default searchImages;