import React from 'react';
import { Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from './View';
import { Text } from './Text';

export function HomeNewsItem({ newsItem, colors, height }) {
	return (
		<View height={height} center>
			<Image
				source={{ uri: newsItem.image }}
				style={[defaultStyles.image, { height }]}
			/>
			<LinearGradient
				colors={colors}
				style={[defaultStyles.image, { height }]}
			/>
			<Text>{newsItem.title}</Text>
		</View>
	);
}

const defaultStyles = StyleSheet.create({
	image: {
		width: '100%',
		position: 'absolute',
	},
});
