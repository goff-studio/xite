import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AnimatedView, View } from './View';
import { Text } from './Text';
import theme from '../configs/theme';

export function ClickableLogo({ onPress, loading, hideSlogan }) {
	return (
		<TouchableOpacity onPress={onPress} disabled={!onPress || loading}>
			<View center paddingVertical={20}>
				<Text
					fontSize={theme.fontSizes.large}
					fontFamily={theme.fontFamilies.bold}>
					XITE
				</Text>
				{!hideSlogan && (
					<AnimatedView visible={!loading}>
						<Text
							fontSize={theme.fontSizes.xSmall}
							fontFamily={theme.fontFamilies.bold}>
							DISCOVER{' '}
							<Text
								fontSize={theme.fontSizes.xSmall}
								fontFamily={theme.fontFamilies.light}>
								MORE
							</Text>
						</Text>
					</AnimatedView>
				)}
			</View>
		</TouchableOpacity>
	);
}
