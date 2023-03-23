import React from "react";

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

	return books.map((books) => (
		<li>
			{books.name} - Author: {books.author} - Pages: {books.pages}
		</li>
	));
};

export default List;
