import React from 'react';

function SearchPage({ match, location }) {
	console.log(match);
	return (
		<p>
			<strong>Query Params: </strong>
			{location.search}
		</p>
	);
}

export default SearchPage;
