'use client';


import {useEffect} from 'react';

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import {useStore} from "@/app/store/app-store";
export const App = ({children}) => {

    const store =useStore()

    useEffect(() => {

        store.checkIsAuth();
    }, []);

    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
};