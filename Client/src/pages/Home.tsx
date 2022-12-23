import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { increment } from '@/reducers/counter/counterSlice';
import React from 'react';

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const counter = useAppSelector((state) => state.counter.value);

	return (
		<div className='mx-auto my-auto flex flex-col items-center gap-4 p-4'>
			<a href='https://vitejs.dev' target={'_blank'}>
				<img className='h-24' src='vite.svg' />
			</a>

			<h1 className='text-xl'>Counter:</h1>
			<p className='text-4xl'>{counter}</p>
			<button className='bnt-primary btn' onClick={() => dispatch(increment())}>
				Increment
			</button>

			<p>
				Edit <span className='link-hover link-primary link'>Home.tsx</span> to see HRM in action
			</p>
		</div>
	);
};

export default Home;

