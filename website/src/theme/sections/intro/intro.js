import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from './../../components/container/container';
import Button from './../../components/button/button';

export default function Intro() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	const component = 'shift-intro';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
				bgColor={'light'}
			>
				<div className={`${component}__title`} dangerouslySetInnerHTML={{__html: 'Minning Finance<br/>Decentralized<br/>'}}></div>
				<div className={`${component}__image`}>
					<img className={`${component}__image-bg`} style={{opacity:0}} src={useBaseUrl('img/ic-intro.svg')} />
					{/*<img className={`${component}__image-img`} src={useBaseUrl('img/img-boilerplate-intro@2x.png')} />*/}
					<img className={`${component}__image-img`} src={useBaseUrl('img/miner.png')} />
				</div>
				<div className={`${component}__content`}>
					{/*{siteConfig.tagline}*/}
					{' Minefi是一个基于FVM的智能合约项目，旨在解决挖矿投资人投资任意金额，参与Filecoin挖矿获得高年化回报的问题。该项目的主要优势在于其去中心化、简单、可信和资产更加安全的特点。'}
				</div>
				<Button 
					componentClass={component}
					label={'Get Started'}
					href={useBaseUrl('/get-started')}
				/>
			</Container>
		</div>
	);
}
