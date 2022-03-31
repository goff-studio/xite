import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import {
	AnimatedView,
	ClickableLogo,
	HomeNewsItem,
	HorizontalListHeader,
	MusicListItem,
	MusicListSeparator,
	View,
} from '../components';
import { Screen } from '../components/Screen';
import theme from '../configs/theme';

const YEAR = 2016;
const GENRE_ID = 5;
export default function Home({ data, onDiscoverMorePressed, isLoading }) {
	const sampleListMusicsOfTheYear = data?.videos?.filter(
		item => item.release_year === YEAR,
	);

	const sampleListMusicsOfTheGenre = data?.videos?.filter(
		item => item.genre_id === GENRE_ID,
	);

	const sampleNews = [
		{
			image: 'https://xite.nl/uploads/media/600/2022-03-24/600%20ohmy.png',
			title: 'News Title',
		},
		{
			image: 'https://xite.nl/img/ArianaGrande_XITE.jpg',
			title: 'Some other news',
		},
	];

	const renderThumbnails = ({ item, index }) => (
		<MusicListItem index={index} item={item} />
	);

	const renderSeparator = () => <MusicListSeparator />;

	const renderMusicInGenreListHeader = () => (
		<HorizontalListHeader
			inverted
			style={defaultStyles.genreListHeader}
			title={data?.genres.find(item => item.id === GENRE_ID).name}
		/>
	);

	const renderMusicInYearListHeader = () => (
		<HorizontalListHeader
			style={defaultStyles.yearListHeader}
			title={YEAR}
		/>
	);

	return (
		<Screen translucent barBackgroundColor="transparent" unsafe>
			<View flex>
				<HomeNewsItem
					height={theme.dimensions.windowHeight / 3}
					newsItem={sampleNews[0]}
					colors={[theme.colors.transparent, theme.colors.black]}
				/>
				<View flex />

				<HomeNewsItem
					height={theme.dimensions.windowHeight / 3}
					newsItem={sampleNews[1]}
					colors={[theme.colors.black, theme.colors.transparent]}
				/>
				<View center flex style={defaultStyles.content}>
					<AnimatedView
						visible={data?.videos?.length}
						style={defaultStyles.listContainer}>
						<FlatList
							ListHeaderComponentStyle={
								defaultStyles.listSeparator
							}
							showsHorizontalScrollIndicator={false}
							ListHeaderComponent={renderMusicInYearListHeader}
							ItemSeparatorComponent={renderSeparator}
							horizontal
							data={sampleListMusicsOfTheYear}
							renderItem={renderThumbnails}
						/>
					</AnimatedView>
					<ClickableLogo
						onPress={onDiscoverMorePressed}
						loading={isLoading}
					/>
					<AnimatedView
						visible={data?.videos?.length}
						style={defaultStyles.listContainer}>
						<FlatList
							ListHeaderComponentStyle={
								defaultStyles.listSeparator
							}
							showsHorizontalScrollIndicator={false}
							ListHeaderComponent={renderMusicInGenreListHeader}
							inverted
							ItemSeparatorComponent={renderSeparator}
							horizontal
							data={sampleListMusicsOfTheGenre}
							renderItem={renderThumbnails}
						/>
					</AnimatedView>
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
});
