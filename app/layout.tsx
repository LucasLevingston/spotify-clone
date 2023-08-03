import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';

const inter = Figtree({ subsets: ['latin'] });

export const metadata = {
	title: 'Spotify Clone',
	description: 'Liste to music',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SupabaseProvider>
					<Sidebar>{children}</Sidebar>
				</SupabaseProvider>
			</body>
		</html>
	);
}
