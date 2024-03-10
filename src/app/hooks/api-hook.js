"use client"

///не используеться(пока что)

import { useEffect, useState } from 'react';
import { getNormalizedGamesDataByCategory } from '../utils/api/api-utils';

export const useGetDataByCategory = (endpoint, category) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const data = await getNormalizedGamesDataByCategory(endpoint, category);
			setData(data);
		}
		fetchData();
	}, []);
	return data;
};
