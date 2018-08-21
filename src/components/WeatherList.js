import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WeatherItem from './WeatherItem'

const IconList = styled.ul`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 450px) {
		justify-content: center;
  }
`

const WeatherList = (props) => {
	const WiItems = props.items
	return (
		<IconList>
			{WiItems.map((i, key) => (
				<WeatherItem key={key} item={i} />
			))}
		</IconList>
	)
}

export default WeatherList
