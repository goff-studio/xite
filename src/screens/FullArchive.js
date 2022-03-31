import React, { useRef, useState } from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
	ClickableLogo,
	MusicListItem,
	MusicListSeparator,
	View,
	Text,
	YearPicker,
	MusicEmptyState,
} from '../components';
import { Screen } from '../components/Screen';
import theme from '../configs/theme';
import { GenrePicker } from '../components/GenrePicker';

export default function FullArchive({ videos, genres, years }) {
	const [selectedIndex, setSelectedIndex] = useState(
		Math.floor(Math.random() * videos.length),
	);

	const [filteredData, setFilteredData] = useState(videos);
	const selectedGenres = useRef([]);
	const selectedYear = useRef('');
	const searchInput = useRef('');
	const setSearchInput = value => (searchInput.current = value);
	const setSelectedYear = value => (selectedYear.current = value);
	const setSelectedGenres = value => (selectedGenres.current = value);

	const filterByYear = data =>
		selectedYear.current.length === 0
			? data
			: data.filter(video => video.release_year === selectedYear.current);

	const filterByGenre = data =>
		selectedGenres.current.length === 0
			? data
			: data.filter(video =>
				selectedGenres.current.some(
					genre => video.genre_id === genre.id,
				),
			  );

	const filterBySearch = data =>
		searchInput.current === ''
			? data
			: data.filter(
				video =>
					video?.artist
						.toString()
						.toLowerCase()
						.includes(searchInput.current.toLowerCase()) ||
						video?.title
							.toString()
							.toLowerCase()
							.includes(searchInput.current.toLowerCase()),
			  );

	const filterData = () => {
		const newFilteredData = filterByGenre(
			filterByYear(filterBySearch([...videos])),
		);
		setFilteredData(newFilteredData);
	};

	const handleSelectIndex = (item, index) => {
		setSelectedIndex(index);
	};

	const renderThumbnails = ({ item, index }) => (
		<MusicListItem onPress={handleSelectIndex} index={index} item={item} />
	);

	const renderSeparator = () => <MusicListSeparator />;

	const renderEmptyState = () => <MusicEmptyState />;

	return (
		<Screen>
			<Image
				style={defaultStyles.backgroundGradient}
				blurRadius={150}
				source={{ uri: videos[selectedIndex].image_url }}
			/>
			<LinearGradient
				colors={[theme.colors.black, 'transparent', 'transparent']}
				style={defaultStyles.backgroundGradient}
			/>
			<View flex paddingHorizontal={15} paddingTop={10}>
				<View paddingVertical={20}>
					<ClickableLogo hideSlogan />
				</View>
				<FlatList
					ListEmptyComponent={renderEmptyState}
					columnWrapperStyle={{ justifyContent: 'space-between' }}
					numColumns={3}
					ListHeaderComponentStyle={defaultStyles.listSeparator}
					showsHorizontalScrollIndicator={false}
					ItemSeparatorComponent={renderSeparator}
					data={filteredData}
					renderItem={renderThumbnails}
				/>
				<View
					row
					paddingBottom={30}
					paddingTop={20}
					alignItems="flex-end">
					<YearPicker years={years} onChange={setSelectedYear} />
					<GenrePicker
						onChange={setSelectedGenres}
						style={defaultStyles.genderPicker}
						genres={genres}
					/>
					<View center paddingLeft={15} flex>
						<Text fontSize={theme.fontSizes.small}>Search</Text>
						<TextInput
							onChangeText={setSearchInput}
							style={defaultStyles.searchBox}
							placeholder="Gimme more"
						/>
					</View>
					<TouchableOpacity onPress={filterData}>
						<View
							backgroundColor={theme.colors.accentSecondary}
							width={40}
							height={40}
							center>
							<Text
								fontSize={theme.fontSizes.small}
								color={theme.colors.black}
								fontFamily={theme.fontFamilies.bold}>
								Filter
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</Screen>
	);
}
const defaultStyles = StyleSheet.create({
	content: {
		position: 'absolute',
		top: theme.dimensions.windowHeight / 3 - 60,
		left: 0,
		right: 0,
	},
	genreListHeader: { marginLeft: 15 },
	yearListHeader: { marginRight: 15 },
	listContainer: {
		height: theme.dimensions.thumbnailHeight,
	},
	backgroundGradient: {
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	searchBox: {
		fontFamily: theme.fontFamilies.light,
		height: 40,
		backgroundColor: theme.colors.white,
		width: '100%',
		paddingHorizontal: 10,
	},
	genderPicker: {
		marginLeft: 10,
	},
});
