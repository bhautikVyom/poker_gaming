import { apiGet } from "@/lib/api";



interface WebStoreItem {
    type: string;
    name: string;
    description: string;
    data: {
        image: string;
        title: string;
        price: string;
        vip: string;
        coins: string;
    }[];
}

const getWebStore = async () => {
    return await apiGet<WebStoreItem[]>('/getWebStore');
}

const ApiService = {
    getWebStore
};

export default ApiService;