import { useState } from "react";
import axios from "axios";

const SearchList = () => {
	const [query, setQuery] = useState("");
	const [title, setTitle] = useState("");

	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};

	const handleSearch = () => {
		const apiUrl = "https://www.googleapis.com/books/v1/volumes";
		const queryString = `q=intitle:${query}`;
		const url = `${apiUrl}?${queryString}`;

		axios
			.get(url)
			.then((response) => {
				const book = response.data.items[0];
				if (book) {
					setTitle(book.volumeInfo.title);
				} else {
					setTitle(`No results found for "${query}"`);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Search for a book"
				onChange={handleInputChange}
				value={query}
			/>
			<button onClick={handleSearch}>Search</button>
			{title && <h2>{title}</h2>}
		</div>
	);
};

/* Example API search with Key
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA4PySPsZegDKj4lyPojWBqSDEARYkCLBQ
*/

export default SearchList;
