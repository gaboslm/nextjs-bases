import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
	return (
		<nav className='flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
			<Link href="/">Home</Link>
			<ul className='flex gap-3' style={{ listStyle: 'none'}}>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/pricing">Pricing</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	)
}
