import { NavigationProps } from '@/app/Routes';
import { Drawer } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';

const NavigationLayout: React.FC<NavigationProps> = (props) => {
	return (
		<Drawer {...props}>
			<Outlet />
		</Drawer>
	);
};

export default NavigationLayout;

