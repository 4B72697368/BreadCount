"use client";
import React, { useState } from 'react';
import App from './components/simulation';

export default function Page() {
	const [showContent, setShowContent] = useState(true);

	return (
		<div className="bg-gray-100 flex justify-center items-center h-screen">
			{showContent ? (
				<div className="bg-gray-900 p-6 rounded-lg border-4 border-yellow-500 text-center w-[60%] min-w-[300px] max-w-[550px] bg-red-500">
					<div className="text-yellow-500 text-4xl mb-4">
						<span role="img" aria-label="Important">⚠️</span>
					</div>
					<h2 className="text-white text-2xl font-bold mb-2">READ FOR MAXIMUM APPRECIATION!</h2>
					<p className="text-white text-sm mb-4">
						Breadcount is designed to resemble a simple base-10 adder/counter, with simulated latches and logic gates.
						<br/>
						<span className="font-bold text-lg"> Even though it appears to be a simple calculator, each addition is cascading through several bit operators. </span>
						<br/>
						Some of this is, such as the current memory, is exposed through the Data tab, but to understand how it works fully, we heavily recommend glancing at the code for a couple minutes on <a className='text-blue-300 underline' href='https://github.com/4B72697368/BreadCount/blob/main/website/app/components/logic/bcdConversion.ts'>Github</a>.
					</p>
					<div className="flex justify-end">
						<button
							className="bg-blue-600 text-white rounded p-2 hover:bg-blue-500 transition-colors"
							onClick={() => setShowContent(!showContent)}
						>
							Continue
						</button>
					</div>
				</div>
			) : (
				<App />
			)}
		</div>
	);
}
