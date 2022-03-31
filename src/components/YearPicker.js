import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Modal } from '.';
import theme from '../configs/theme';

export function YearPicker({ years, onChange }) {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedYears, setSelectedYears] = useState('');

	const openModal = () => {
		setIsVisible(true);
	};
	const closeModal = () => {
		setIsVisible(false);
	};

	const handlePress = item => {
		setSelectedYears(item === 'All' ? '' : item);
		!!onChange && onChange(item === 'All' ? '' : item);
		closeModal();
	};

	const renderYear = ({ item }) => {
		const isSelected = selectedYears === item;

		return (
			<TouchableOpacity key={item} onPress={() => handlePress(item)}>
				<Text
					paddingHorizontal={10}
					paddingVertical={5}
					color={
						isSelected
							? theme.colors.accentSecondary
							: theme.colors.white
					}>
					{item}
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<>
			<View center>
				<Text fontSize={theme.fontSizes.small}>Year</Text>
				<TouchableOpacity
					onPress={openModal}
					style={defaultStyles.actionButton}>
					<Text
						fontFamily={theme.fontFamilies.bold}
						color={theme.colors.black}
						fontSize={theme.fontSizes.small}>
						{selectedYears || 'All'}
					</Text>
				</TouchableOpacity>
			</View>
			<Modal isVisible={isVisible}>
				<View backgroundColor={theme.colors.black}>
					<FlatList
						columnWrapperStyle={{ justifyContent: 'space-around' }}
						data={[...years, 'All']}
						renderItem={renderYear}
						numColumns={4}
					/>
				</View>
			</Modal>
		</>
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
});
