import React from "react";

const List = () => {
	const books = [
		{
			name: "Terminal List",
			author: "Jack Carr",
			pages: 235,
		},
		{
			name: "Wimhoff Method",
			author: "Wimhoff",
			pages: 170,
		},
	];

	return books.map((books) => (
		<li>
			{books.name} - Author: {books.author}
		</li>
	));
};

export default List;
