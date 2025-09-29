import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm';

export async function getData() {
    try {
        const res = await axios.get('https://test.smarto.agency/smarto_complexes_list.json');
        return res.data;
    } catch 
        (error)  { console.log(error) }
         return [];
        
    }

