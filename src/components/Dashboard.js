import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  * as Wi from 'weather-icons-react'
import styled from 'styled-components'
import WeatherList from './WeatherList'
import Searchbar from './Searchbar'

const Code = styled.pre`
	display: inline;
	background-color: #273338;
	padding: 6px 12px;
	margin: 0;
	border: 1px solid #fff;
	border-radius: 8px;
	overflow-x: auto;
`
const Description = styled.p`
	font-size: 22px;
	color: #9fc1ed;
`
const Heading = styled.article`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	margin: 16px 0px;
`
const Title = styled.h3`
	margin: 0 24px 0px 0px;
	min-width: 150px;
`
const Header = styled.header`
	background: #045d8d;
	padding: 1rem 2rem;
	color: #fff;
`
const AppName = styled.h1`
	margin: 0;
`
const Wrapper = styled.div``

class Dashboard extends Component {
	state = {
		query: ''
	}
	updateQuery = (query) => {
    this.setState({
      query,
    })
  }
  clearQuery = () => {
    this.updateQuery('')
  }
	render () {
		const { query } = this.state
		const WiItems = Object.keys(Wi).map(key => ({ [key]: Wi[key], name: key }))
		const install = 'npm install weather-icons-react --save;'
		const usage = `import { WiDaySunny } from "weather-icons-react";

class Weather extends React.Component {
    render() {
        return <WiDaySunny size={24} color='#000' />
    }
}`
		const weatherIcons = 'http://www.weathericons.io'
		const filteredItems = query === ''
			? WiItems
			: WiItems.filter((i) => (
				i.name.toLowerCase().includes(query.toLowerCase())
			))
		return (
			<Wrapper>
				<Header>
					<AppName>Weather Icons React</AppName>
					<Description>Include Weather Icons in your react project easily with 'weather-icons-react', which utilizes ES6 imports so that you only need to include the icons that your project is using.</Description>
					<Heading>
						<Title>Project Library</Title>
						<a href='http://www.weathericons.io'>
							{weatherIcons}
						</a>
					</Heading>
					<Heading>
						<Title>Project License</Title>
						<a href='https://creativecommons.org/licenses/by/3.0/'>
							CC BY 3.0
						</a>
					</Heading>
					<Heading>
						<Title>Installation</Title>
							<Code>{install}</Code>
					</Heading>
					<Heading>
						<Title>Usage</Title>
						<Code>{usage}</Code>
					</Heading>
					<Heading>
						<Title>Icons</Title>
						<Searchbar
							query={query}
							updateQuery={this.updateQuery}
						/>
					</Heading>
				</Header>
				<main>
					<WeatherList items={filteredItems} />
				</main>
			</Wrapper>
		)
	}
}

export default Dashboard
