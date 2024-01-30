'use client';

import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export default function Providers({ children }: NextUIProviderProps) {
	return (
		<SessionProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</SessionProvider>
	);
}
