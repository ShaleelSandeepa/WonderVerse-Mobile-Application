import axios from "axios";

export const generateImage = async (details) => {
    const axios = require('axios');

    const options = {
    method: 'POST',
    url: 'https://ai-image-generator10.p.rapidapi.com/image_gen_pixle_art',
    headers: {
        'x-rapidapi-key': '7ede6fe8cfmsh4b644f77fb35057p129202jsn538cde296c6c',
        'x-rapidapi-host': 'ai-image-generator10.p.rapidapi.com',
        'Content-Type': 'application/json'
    },
    data: {
        query: 'a beautiful sunset'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}