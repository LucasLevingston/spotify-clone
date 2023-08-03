import { Subscription, UserDetails } from '@/types';
import { User } from '@supabase/auth-helpers-nextjs';
import { useSessionContext, useUser as useSupaUser } from '@supabase/auth-helpers-react';
import { createContext } from 'react';

type UserContextType = {
	acessToken: string | null;
	user: User | null;
	userDetails: UserDetails | null;
	subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export interface Props {
	[propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
	const {
		session,
		isLoading: isLoadingUser,
		supabaseClient: supabase,
	} = useSessionContext();
	const user = useSupaUser();
	const acessToken = session?.access_token;
};
