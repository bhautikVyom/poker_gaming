import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import ApiService from '@/service/ApiUrl'
import React, { useEffect, useState } from 'react'

interface FaqItem {
    que: string;
    ans: string[];
}

const Faqs = () => {
    const [data, setData] = useState<FaqItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiService.getFAQ();
            setData(result?.chipsStore);
        }

        fetchData();
    }, [])


    return (
        <div className='pb-10 lg:pb-24'>
            <div className='container text-primary'>
                <h2 className="text-[40px] font-bold mb-4">FAQ</h2>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {data?.map((list, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={index}>
                            <AccordionTrigger className='text-xl'>{list?.que}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-lg">
                                {list?.ans?.map((ans) => (
                                    <p key={ans}>{ans}</p>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Faqs