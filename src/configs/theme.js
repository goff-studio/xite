import { Dimensions } from 'react-native';

const fontFamilies = {
	light: 'RobotoCondensed-Light',
	regular: 'RobotoCondensed-Regular',
	bold: 'RobotoCondensed-Bold',
};

const fontSizes = {
	large: 40,
	medium: 20,
	small: 14,
	xSmall: 12,
};

const colors = {
	black: '#000',
	white: '#fff',
	accentPrimary: '#FF50F8',
	accentSecondary: '#5DFCF2',
	transparent: 'transparent',
};

const dimensions = {
	windowWidth: Dimensions.get('window').width,
	windowHeight: Dimensions.get('window').height,
	thumbnailWidth: Dimensions.get('window').width / 3.5,
	thumbnailHeight: Dimensions.get('window').width / 3.5,
};

const theme = {
	fontFamilies,
	fontSizes,
	colors,
	dimensions,
};

export default theme;
