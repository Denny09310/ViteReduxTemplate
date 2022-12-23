import { NavigationProps } from '@/app/Routes';
import React, { PropsWithChildren, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const Drawer: React.FC<PropsWithChildren<NavigationProps>> = ({ children, ...rest }) => {
	const [open, setOpen] = useState(false);

	const { routes, applicationLogo, applicationName } = rest;

	const drawerRoutes = routes.map(({ to, label, icon }, index) => (
		<li key={index}>
			<NavLink to={to} onClick={() => setOpen(false)} end>
				{icon}
				<span>{label}</span>
			</NavLink>
		</li>
	));

	return (
		<div className='drawer-mobile drawer'>
			<input
				id={drawerId}
				type='checkbox'
				className='drawer-toggle'
				checked={open}
				onChange={(e) => setOpen(e.target.checked)}
			/>
			<div className='drawer-content flex flex-col'>
				<NavBar {...rest} />
				{children}
			</div>
			<div className='drawer-side'>
				<label htmlFor={drawerId} className='drawer-overlay' />
				<div className='w-80 space-y-4 bg-base-300 p-4 text-base-content'>
					<Link to='/' className='btn-ghost btn w-full'>
						<img src={applicationLogo} alt='Application Logo' />
					</Link>
					<ul className='menu gap-2'>{drawerRoutes}</ul>
				</div>
			</div>
		</div>
	);
};

export const drawerId = 'application-drawer-id';

export default Drawer;
