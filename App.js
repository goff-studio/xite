import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import { useApi } from './src/utils/apis';
import FullArchive from './src/screens/FullArchive';

const queryClient = new QueryClient();

function App() {
	const { data, isLoading } = useApi();
	const { genres, videos } = data || {};
	const years =
		videos
			?.map(video => video.release_year)
			.filter(
				(year, index, inputArray) => inputArray.indexOf(year) === index,
			)
			.sort() || [];
	const [isFullArchiveEnabled, setIsFullArchiveEnable] = useState(false);
	const enableFullArchive = () => {
		setIsFullArchiveEnable(true);
	};
	return isFullArchiveEnabled ? (
		<FullArchive years={years} genres={genres} videos={videos} />
	) : (
		<Home
			data={data}
			isLoading={isLoading}
			onDiscoverMorePressed={enableFullArchive}
		/>
	);
}

export default function Providers() {
	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}
