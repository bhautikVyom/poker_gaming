import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { title } from 'process'
import React from 'react'

const Faqs = () => {

    const faqs = [
        {
            question: "What is the Zynga Poker Store?",
            answer: ["The Zynga Poker Store is the official online marketplace for Zynga Poker mobile game."]
        },
        {
            question: "How do I connect to make a purchase? I'm having trouble.",
            answer: [
                "To make a purchase in the store, you must first sign in to your player account. To do this, access the store on the device you use to play the game, from your mobile device's default web browser. (Private/incognito mode is not supported.) Click the Connect banner at the top of the page, or start purchasing an item. This should open your game, then return you to the store. When you are signed in, you will see your username on the store page. If the game does not return you to the store, you may be on an older version of the game, the game might need to be restarted, or you might have an old cookie in your browser history.",
                "Please make sure your version is up-to-date; you can check this at the Play Store or iOS App Store. You can clear your browser history from your browser's history tab. If your game version is up-to-date, you can restart your game by closing and opening the game itself.",
                "For iOS: To quit the game, open the App Switcher, swipe right to find the game, then swipe up. To reopen the app, go to the Home Screen (or App Library), then tap the app.",
                "For Android: Force stop the game and open it again."
            ]
        },
        {
            question: "How long does it take Zynga Poker Store purchases to show up in my game?",
            answer: ["Purchases made in the Zynga Poker Store should appear in your game almost immediately. In some rare instances, a game restart may be required."]
        },
        {
            question: "How do I request a refund?",
            answer: [
                "If you have a Billing-related issue with your purchase from the Zynga Poker Store, please contact our Billing Support Team. Make sure to provide the following information about your purchase to further our investigation:",
                "1. The exact amount of the items you purchased, the approximate time of your purchase, and receipt confirmation numbers.",
                "2. Your player ID/UID or ZID:",
                "a. Locate the 'Settings' menu towards the bottom right of your game. b. Open the menu and select 'Account Info'. c. You should be able to locate your ZID and Device ID on the next screen.",
                "3. A screenshot of your purchase receipt which is not in pending status with your payment provider or the error you're receiving."
            ]
        },
    ]

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
                    {faqs?.map((list, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={index}>
                            <AccordionTrigger className='text-xl'>{list?.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-lg">
                                {list?.answer?.map((ans) => (
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