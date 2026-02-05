import { apiGet, apiPost } from "@/lib/api";

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

const webLogin = async (payload: string) => {
    return await apiPost('/webLogin', payload);
}

const purchaseChips = async (payload) => {
    return await apiPost('/purchaseChips', payload);
}

const ApiService = {
    getWebStore,
    webLogin,
    purchaseChips
};

export default ApiService;