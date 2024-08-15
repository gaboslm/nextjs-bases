import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Page Description",
	keywords: ['Contact']
};

export default function AboutPage () {
	return (
		<>
			<span className='text-5xl'>Contact Page</span>
		</>
	)
}
