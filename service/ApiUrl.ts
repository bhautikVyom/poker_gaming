import { apiGet, apiPost } from "@/lib/api";

interface MoneyItem {
    type: string;
    title: string;
    price: string;
    amount: string;
    priceId?: string;
    plan_id?: string;
    active?: boolean;
}

interface MoneyCardProps {
    list?: MoneyItem[];
    uid?: string;
}

interface profile {
    userName: string;
    pp: string;
    chips: number;
    uData: {
        userName: string;
        uniqueId: string;
        chips: number;
    };
}

interface FaqItem {
    que: string
    ans: string[]
}

interface FaqApiResponse {
    chipsStore: FaqItem[]
}


const getWebStore = async () => {
    return await apiGet('/getWebStore');
}

const webLogin = async (payload: { uid: string }): Promise<profile> => {
    return await apiPost('/webLogin', payload);
}

const purchaseChips = async (payload: MoneyCardProps): Promise<{ url: string }> => {
    return await apiPost('/purchaseChips', payload);
}

const getFAQ = async (): Promise<FaqApiResponse> => {
    return await apiGet('/getFAQ');
}

const ApiService = {
    getWebStore,
    webLogin,
    purchaseChips,
    getFAQ
};

export default ApiService;