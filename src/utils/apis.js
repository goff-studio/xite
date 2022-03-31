import axios from 'axios';
import { useQuery } from 'react-query';

// let's keep it as simple as it is
export function useApi() {
	return useQuery('mainData', () =>
		axios
			.get(
				'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json',
			)
			.then(res => res.data),
	);
}
