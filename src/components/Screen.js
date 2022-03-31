import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from '.';
import theme from '../configs/theme';

export function Screen({
	preset,
	style,
	backgroundColor,
	unsafe = true,
	barBackgroundColor = 'transparent',
	barStyle = 'light-content',
	children,
	translucent = true,
	...props
}) {
	const insets = useSafeAreaInsets();
	const styleProp = {
		paddingTop: unsafe ? 0 : insets.top,
		...defaultStyles.outer,
		...style,
	};

	return (
		<View
			backgroundColor={backgroundColor || theme.colors.black}
			style={styleProp}
			{...props}>
			<StatusBar
				barStyle={barStyle}
				backgroundColor={barBackgroundColor}
				translucent={translucent}
			/>
			<View style={defaultStyles.inner}>{children}</View>
		</View>
	);
}

const defaultStyles = StyleSheet.create({
	outer: {
		flex: 1,
		height: '100%',
	},
	inner: {
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		height: '100%',
		width: '100%',
	},
});
