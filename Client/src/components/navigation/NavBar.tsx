import { NavigationProps } from '@/app/Routes';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { drawerId } from './Drawer';

interface Props extends NavigationProps {
	showRoutes?: boolean;
}

const NavBar: React.FC<Props> = ({ routes, applicationName, showRoutes }) => {
	const navbarRoutes = routes.map(({ to, label, icon }, index) => (
		<li key={index}>
			<NavLink to={to} end>
				{icon}
				<span>{label}</span>
			</NavLink>
		</li>
	));

	return (
		<div className='navbar w-full bg-base-300'>
			<div className='flex-none lg:hidden'>
				<label htmlFor={drawerId} className='btn-ghost btn-square btn'>
					<AiOutlineMenu />
				</label>
			</div>
			<div className='mx-2 flex-1 px-2'>{applicationName}</div>
			<div className='hidden flex-none lg:block'>
				{showRoutes && <ul className='menu menu-horizontal hidden md:block'>{navbarRoutes}</ul>}
			</div>
		</div>
	);
};

export default NavBar;
