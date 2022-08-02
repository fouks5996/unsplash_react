import React, { useState, useEffect } from "react";

function Tags() {
	const [topicSubject, setTopicSubject] = useState("");
	const [showNotif, setShowNotif] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			await fetch(
				`https://api.unsplash.com/collections/?client_id=mDQNEdbOnhiJunqzmP9ZK-FNuTJtVdJttERkiPRtKes`
			)
				.then((res) => res.json())
				.then((data) => {
					setTopicSubject(data);
				});
		};
		fetchData();
	});

	function CopyContent(e) {
		let value = e.target.textContent;
		value = value.replace(/\s/g, "-");
		value = value.toLowerCase();
		navigator.clipboard.writeText(value);
		setShowNotif(true);
		setTimeout(() => {
			setShowNotif(false);
		}, 2000);
	}

	return (
		<div>
			<h1 className='mt-8 mb-2 font-semibold'> Examples : </h1>
			<div className='flex gap-3 mb-8 '>
				{topicSubject &&
					topicSubject.map((item, index) => (
						<p
							key={index}
							onClick={CopyContent}
							className='bg-slate-300 rounded-3xl py-2 px-4 cursor-pointer hover:bg-slate-400'>
							{item.title}
						</p>
					))}
			</div>
			{showNotif ? (
				<span className='flex text-lime-700 text-bold'> copié ✅ </span>
			) : (
				<span className='hidden'> copié </span>
			)}
		</div>
	);
}

export default Tags;
