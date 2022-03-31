import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Modal } from '.';
import theme from '../configs/theme';

export function GenrePicker({ genres, style, onChange }) {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedGenres, setSelectedGenres] = useState([]);
	const openVisible = () => {
		setIsVisible(true);
	};
	const closeVisible = () => {
		setIsVisible(false);
	};

	const handlePress = item => {
		const newData = selectedGenres.some(
			stateItem => stateItem.id === item.id,
		)
			? [...selectedGenres].filter(stateItem => stateItem.id !== item.id)
			: [...selectedGenres, item];
		setSelectedGenres(newData);
		!!onChange && onChange(newData);
	};

	const renderGenre = item => {
		const isSelected = selectedGenres.some(
			selectedGenre => selectedGenre.id === item.id,
		);

		return (
			<TouchableOpacity key={item.id} onPress={() => handlePress(item)}>
				<Text
					color={
						isSelected
							? theme.colors.accentSecondary
							: theme.colors.white
					}>
					{item.name}
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<View style={style}>
			<View center>
				<Text fontSize={theme.fontSizes.small}>Gender</Text>
				<TouchableOpacity
					onPress={openVisible}
					style={defaultStyles.actionButton}>
					<Text
						numberOfLines={2}
						fontFamily={theme.fontFamilies.bold}
						color={theme.colors.black}
						fontSize={theme.fontSizes.small}>
						{(selectedGenres.length === 0 && 'All') ||
							(selectedGenres.length === 1 &&
								selectedGenres[0].name) ||
							`${selectedGenres.length} Genres`}
					</Text>
				</TouchableOpacity>
			</View>
			<Modal onBackdropPress={closeVisible} isVisible={isVisible}>
				<View
					style={defaultStyles.modalContainer}
					backgroundColor={theme.colors.black}
					width="75%">
					{genres.map(renderGenre)}
				</View>
				<TouchableOpacity onPress={closeVisible}>
					<View
						center
						width="75%"
						style={defaultStyles.modalContainer}
						backgroundColor={theme.colors.white}
						paddingVertical={10}
						paddingHorizontal={15}>
						<Text color={theme.colors.black}>OK</Text>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
}
const defaultStyles = StyleSheet.create({
	actionButton: {
		justifyContent: 'center',
		alignItems: 'center',
		width: theme.dimensions.thumbnailWidth / 2 - 5,
		backgroundColor: theme.colors.white,
		height: 40,
	},
	modalContainer: {
		alignSelf: 'center',
	},
});
