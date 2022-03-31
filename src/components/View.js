import React, { useEffect, useRef } from 'react';
import { Animated, View as RNView } from 'react-native';

export function View({
	children,
	flex,
	center,
	backgroundColor,
	row,
	style,
	justifyContent,
	alignItems,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingVertical,
	paddingHorizontal,
	width,
	height,
	borderRadius,
	...props
}) {
	const styleProp = {
		justifyContent: (!!center && 'center') || justifyContent || undefined,
		alignItems: (!!center && 'center') || alignItems || undefined,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingVertical,
		paddingHorizontal,
		width,
		height,
		borderRadius,
		backgroundColor,
		flex: flex ? 1 : undefined,
		flexDirection: row ? 'row' : undefined,
		...style,
	};

	return (
		<RNView style={styleProp} {...props}>
			{children}
		</RNView>
	);
}

export function AnimatedView({
	children,
	duration = 1000,
	visible = true,
	delay = 10,
	...props
}) {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: visible === false ? 0 : 1,
			duration,
			useNativeDriver: true,
			delay: delay || 0,
		}).start();
	}, [delay, duration, fadeAnim, visible]);

	return (
		<Animated.View
			style={{
				opacity: fadeAnim, // Bind opacity to animated value
			}}>
			<View {...props}>{children}</View>
		</Animated.View>
	);
}
