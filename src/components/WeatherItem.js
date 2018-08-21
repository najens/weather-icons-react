import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 200px;
	margin: 0px 8px;
`

const IconName = styled.p`
	font-size: 14px;
	padding: 4px 8px;
	width: 100%;
	text-align: center;
`


const WeatherItem = (props) => {
	const {item } = props
	const Icon = item[item.name]
	return (
		<Item>
			<Icon size={40} color='#045d8d' />
			<IconName>{item.name}</IconName>
		</Item>
	)
}

export default WeatherItem
