import React from 'react';
import RNModal from 'react-native-modal';

export function Modal({ children, isVisible, ...props }) {
	return (
		<RNModal
			isVisible={isVisible}
			hasBackdrop
			backdropColor="black"
			statusBarTranslucent
			animationInTiming={500}
			animationOutTiming={500}
			backdropTransitionInTiming={750}
			backdropTransitionOutTiming={500}
			useNativeDriverForBackdrop
			{...props}>
			{children}
		</RNModal>
	);
}
