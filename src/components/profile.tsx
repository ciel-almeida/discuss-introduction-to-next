'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
	const session = useSession();

	if (session.data?.user) {
		return (
			<div>
				<p>Getting session through Session Provider</p>
				<p>Logged User: {session.data.user.name}</p>
			</div>
		);
	}

	return (
		<div>
			<p>Getting session through Session Provider</p>
			<p>Not logged</p>
		</div>
	);
}
