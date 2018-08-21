import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Search = styled.input`
	flex: 1;
	border: 1px solid #045d8d;
	border-radius: 8px;
	padding: 6px 12px;
	font-size: 1.15em;
`

const Searchbar = (props) => {
	const { query, updateQuery } = props
	return (
		<Search
			autoFocus
			type='text'
			placeholder='search'
			value={query}
			onChange={(e) => updateQuery(e.target.value)}
		/>
	)
}

export default Searchbar
