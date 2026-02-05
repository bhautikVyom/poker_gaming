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

const webLogin = async (payload: any) => {
    return await apiPost('/webLogin', payload);
}

const purchaseChips = async () => {
    return await apiPost('/purchaseChips');
}

const ApiService = {
    getWebStore,
    webLogin,
    purchaseChips
};

export default ApiService;