import { NavigationLayout } from '@/layouts';
import { FetchData, Home } from '@/pages';
import React, { ReactElement } from 'react';
import { AiOutlineCloudServer, AiOutlineHome } from 'react-icons/ai';
import { Route, Routes as AppRoutes } from 'react-router-dom';

const routes: NavigationRoute[] = [
	{
		to: '/',
		label: 'Home',
		icon: <AiOutlineHome />,
	},
	{
		to: '/fetch-data',
		label: 'Fetch Data',
		icon: <AiOutlineCloudServer />,
	},
];

const Routes: React.FC = () => {
	return (
		<AppRoutes>
			<Route
				element={
					<NavigationLayout
						routes={routes}
						applicationName='Vite Redux Template'
						applicationLogo='vite.svg'
					/>
				}>
				<Route index element={<Home />} />
				<Route path='/fetch-data' element={<FetchData />} />
			</Route>
		</AppRoutes>
	);
};

export type NavigationRoute = {
	to: string;
	label: string;
	icon?: ReactElement;
};

export type NavigationProps = {
	routes: NavigationRoute[];
	applicationName?: string;
	applicationLogo?: string;
};

export default Routes;

