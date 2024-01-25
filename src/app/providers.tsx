'use client';

import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';

export default function Providers({ children }: NextUIProviderProps) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
