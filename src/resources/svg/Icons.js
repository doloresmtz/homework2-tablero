import * as React from 'react';

export const IconQuit = (props) => {
	const { className } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
			<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
		</svg>
	);
};

export const IconAdd = (props) => {
	const { className } = props;
	return (

		<svg xmlns="http://www.w3.org/2000/svg" className={className}  viewBox="0 0 24 24">
			<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
		</svg>
	);
};