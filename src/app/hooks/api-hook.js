"use client"

import {useEffect, useState} from 'react'
import {normalizeDataByCategory} from "@/app/utils/api/api-utils";


const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const data = await normalizeDataByCategory(endpoint, category)
            setData(data)
        }

        fetchData()
    }, [])
    return data
}
export default useGetDataByCategory;
