import { useRef, useState, useEffect } from "react";
import Tags from "./components/Tags";
import Unsplash from "./components/Unsplash";

function App() {
	const [topic, setTopic] = useState("javascript");
	const [width, setWidth] = useState(0);
	const inputRef = useRef(null);
	const inputWidth = useRef(null);

	function handleClick(event) {
		event.preventDefault();
		setTopic(inputRef.current.value);
		setWidth(inputWidth.current.value);
	}

	return (
		<div className='flex flex-col justify-center items-center h-full'>
			<form className='my-12'>
				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='last-name'
						className='text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl block text-indigo-400 xl:inline'>
						Bienvenue sur Unsplash !
					</label>
					<Tags />
					<div className='mt-1 flex mb-4  rounded-md '>
						<span className='inline-flex items-center px-3 rounded-l-md border   bg-gray-50 text-gray-500 text-sm'>
							Thème
						</span>

						<input
							type='text'
							ref={inputRef}
							id='message'
							name='message'
							autoComplete='off'
							placeholder='Choisir le thème'
							className=' focus:ring-indigo-500  bg-slate-100 py-5 px-8 focus:border-indigo-500 block w-full  sm:text-sm'
						/>
					</div>
					<div className='mt-1 flex  rounded-md '>
						<span className='inline-flex items-center px-3 rounded-l-md border   bg-gray-50 text-gray-500 text-sm'>
							Largeur
						</span>
						<input
							type='text'
							ref={inputWidth}
							id='message'
							name='message'
							autoComplete='off'
							placeholder='Choisir la largeur de la photo'
							className='focus:ring-indigo-500  bg-slate-100 py-5 px-8 focus:border-indigo-500 block w-full  sm:text-sm'
						/>
					</div>
				</div>
				<input
					className='mt-8 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
					onClick={handleClick}
					type='submit'
				/>
			</form>

			<Unsplash topic={topic} size={width} />
		</div>
	);
}

export default App;
