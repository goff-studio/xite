import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../configs/theme';
import { AnimatedView, View } from './View';
import { Text } from './Text';

export function MusicListItem({ item, index, onPress }) {
	return (
		<AnimatedView delay={index * 20}>
			<TouchableOpacity
				onPress={() => onPress(item, index)}
				disabled={!onPress}>
				<Image
					source={{ uri: item?.image_url }}
					style={{
						width: theme.dimensions.thumbnailWidth,
						height: theme.dimensions.thumbnailHeight,
					}}
				/>
				<Text
					paddingTop={5}
					fontFamily={theme.fontFamilies.bold}
					fontSize={theme.fontSizes.xSmall}
					numberOfLines={1}
					style={defaultStyles.details}>
					{item.title}
				</Text>
				<Text
					fontFamily={theme.fontFamilies.light}
					fontSize={theme.fontSizes.xSmall}
					numberOfLines={1}
					style={defaultStyles.details}>
					{item.artist}
				</Text>
			</TouchableOpacity>
		</AnimatedView>
	);
}

export function MusicListSeparator() {
	return <View style={{ width: 15, height: 15 }} />;
}

export function MusicEmptyState() {
	return (
		<View width="100%" center>
			<Text fontSize={theme.fontSizes.medium}>
				We did not found anything in our database.
			</Text>
		</View>
	);
}

export function HorizontalListHeader({ title, style }) {
	return (
		<View
			style={{ ...defaultStyles.horizontalListHeaderContainer, ...style }}
			center>
			<Text
				numberOfLines={2}
				style={defaultStyles.verticalHeader}
				fontFamily={theme.fontFamilies.bold}
				fontSize={theme.fontSizes.medium}>
				{title}
			</Text>
		</View>
	);
}

const defaultStyles = StyleSheet.create({
	horizontalListHeaderContainer: {
		height: theme.dimensions.thumbnailHeight,
		width: theme.dimensions.thumbnailWidth / 2,
		backgroundColor: theme.colors.white,
	},
	verticalHeader: {
		transform: [{ rotate: '90deg' }],
		color: theme.colors.black,
	},
	details: {
		width: theme.dimensions.thumbnailWidth,
	},
});
