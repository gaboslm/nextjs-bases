import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page Description",
	keywords: ['About']
};

export default function AboutPage () {
	return (
		<main className=''>
			<span className='text-5xl'>About Page</span>
		</main>
	)
}
