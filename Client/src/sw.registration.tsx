import { Toast, toast } from 'react-hot-toast';
import { AiOutlineAlert } from 'react-icons/ai';
import { registerSW } from 'virtual:pwa-register';

// Change this number to control the periodic update of the service worker
const intervalMS = 60 * 60 * 1000;

const updateSW = registerSW({
	onNeedRefresh() {
		toast(<UpdateNotification />, {
			duration: 0,
		});
	},
	onRegisteredSW(swUrl, r) {
		r &&
			setInterval(async () => {
				if (!(!r.installing && navigator)) return;

				if ('connection' in navigator && !navigator.onLine) return;

				const resp = await fetch(swUrl, {
					cache: 'no-store',
					headers: {
						cache: 'no-store',
						'cache-control': 'no-cache',
					},
				});

				if (resp?.status === 200) await r.update();
			}, intervalMS);
	},
});

const UpdateNotification: React.FC<Partial<Toast>> = ({ id }) => {
	const closeToast = () => {
		updateSW();
		toast.dismiss(id);
	};

	return (
		<div className='flex flex-col gap-4'>
			<div>
				<AiOutlineAlert />
				<h3 className='font-bold'>New update!</h3>
				<div className='text-xs'>Click to get all the new featuers and patch</div>
			</div>
			<div className='flex flex-none justify-end'>
				<button onClick={closeToast} className='btn-sm btn'>
					Update
				</button>
			</div>
		</div>
	);
};

