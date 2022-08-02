import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function Unsplash(props) {
	const [photo, setPhoto] = useState([]);
	const [show, setShow] = useState("");
	const [allow, setAllow] = useState(false);

	const { topic, size } = props;
	let url1 = `https://api.unsplash.com/search/photos?per_page=200&query=${topic}&client_id=mDQNEdbOnhiJunqzmP9ZK-FNuTJtVdJttERkiPRtKes`;

	useEffect(() => {
		const fetchData = async () => {
			await fetch(url1)
				.then((res) => res.json())
				.then((data) => setPhoto(data.results));
		};
		fetchData();
	});

	function AllowData(idToGet) {
		const fetchData = async () => {
			await fetch(
				`https://api.unsplash.com/photos/${idToGet}?client_id=mDQNEdbOnhiJunqzmP9ZK-FNuTJtVdJttERkiPRtKes`
			)
				.then((res) => res.json())
				.then((data) => {
					setShow(data);
					setAllow(true);
				});
		};
		console.log(allow);
		setAllow(false);
		fetchData();
	}

	return (
		<div className='grid grid-cols-2 grid-rows-1	 gap-6'>
			{!allow ? (
				<h1 className='hidden'> no result </h1>
			) : (
				<Modal source={show.urls.small} />
			)}

			{photo.map((item, index) => (
				<div
					id={item.id}
					onClick={() => AllowData(item.id)}
					key={index}
					className={`flex flex-col ${
						item.width < size ? "hidden" : "flex"
					} cursor-pointer`}>
					<img
						alt='ok'
						className='max-h-80 max-w-md rounded-xl h-80 object-cover'
						src={item.urls.small}></img>
					<p className='font-bold'>
						{" "}
						{item.user.first_name} {item.user.last_name}{" "}
					</p>
					<p className='w-96'> {item.description} </p>
				</div>
			))}
		</div>
	);
}

export default Unsplash;
