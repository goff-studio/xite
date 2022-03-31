import React from 'react';
import { Text as RNText } from 'react-native';
import theme from '../configs/theme';

export function Text({
	children,
	style,
	color = theme.colors.white,
	fontFamily = theme.fontFamilies.regular,
	fontSize = theme.fontSizes.medium,
	variant,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingVertical,
	paddingHorizontal,
	textAlign,
	...props
}) {
	const styleProp = {
		color,
		fontSize,
		fontFamily,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingBottom,
		paddingVertical,
		paddingHorizontal,
		textAlign,
		...style,
	};

	return (
		<RNText style={[styleProp]} {...props}>
			{children}
		</RNText>
	);
}
