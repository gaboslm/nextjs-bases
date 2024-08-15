import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing Page Description",
	keywords: ['Pricing']
};

export default function AboutPage () {
	return (
		<>
			<span className='text-5xl'>Pricing Page</span>
		</>
	)
}
