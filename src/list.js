import { React, useState } from "react";
import axios from "axios";

const List = () => {
	let books = [
		{
			id: 0,
			name: "The Terminal List",
			author: "Jack Carr",
			pages: 416,
		},
		{
			id: 1,
			name: "The Wim Hof Method",
			author: "Wim Hof",
			pages: 210,
		},
		{
			id: 2,
			name: "Harry Potter and the Sorcerer's Stone",
			author: "J.K. Rowling",
			pages: 336,
		},
	];

	const [title, setTitle] = useState("");
	const [keywords, setKeywords] = useState("");

	const handleSearch = () => {
		setKeywords(keywords);
		const apiUrl = "https://www.googleapis.com/books/v1/volumes";
		const query = `q=intitle:${keywords}`; // replace KEYWORDS with the actual keywords you want to search for
		const url = `${apiUrl}?${query}`;

		axios
			.get(url)
			.then((response) => {
				const title = response.data.items[0].volumeInfo.title;
				setTitle(title);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<input type="text" placeholder="Search for a book" />
			<button onClick={handleSearch}>Search</button>
			{title && <h2>{title}</h2>}
		</div>
	);
};

/* Example API search with Key

https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA4PySPsZegDKj4lyPojWBqSDEARYkCLBQ

*/

export default List;
