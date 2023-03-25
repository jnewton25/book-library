import React from "react";
import axios from "axios";

const List = () => {
	const books = [
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

	const apiUrl = "https://www.googleapis.com/books/v1/volumes";
	const query = "q=intitle:Harry Potter"; // replace KEYWORDS with the actual keywords you want to search for
	const url = `${apiUrl}?${query}`;

	axios
		.get(url)
		.then((response) => {
			const title = response.data.items[0].volumeInfo.title;
			console.log(title); // or update state with the title
			alert(title);
		})
		.catch((error) => {
			console.error(error);
		});

	return books.map((books) => (
		<li>
			{books.name} - Author: {books.author} - Pages: {books.pages}
		</li>
	));
};

/* Example API search with Key
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA4PySPsZegDKj4lyPojWBqSDEARYkCLBQ
*/

export default List;
