'use client';

import { useEffect, useState } from 'react';

import AuthModal from '@/components/AuthModal';
// import SubscribeModal from '@/components/SubscribeModal';
import { ProductWithPrice } from '@/types';
import UploadModal from '@/components/UploadModal';

interface ModalProviderProps {
	// products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<AuthModal />
			{/* <SubscribeModal products={products} /> */}
			<UploadModal />
		</>
	);
};

export default ModalProvider;
