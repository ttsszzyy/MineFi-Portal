import React from 'react';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';

export default function Features() {

	const component = 'shift-features';

	const data = [
		{
			icon: 'red',
			title: '去中心',
			desc: 'MineFi核心业务全部由合约控制，运行在FVM智能合约链上',
		},
		{
			icon: 'purple',
			title: 'DAO特性',
			desc: 'MineFi核心业务受制DAO的管理，包括后续的业务扩展也将交由DAO决策，绝对保障社区的公平公正',
		},
		{
			icon: 'red',
			title: '透明',
			desc: 'MineFi将完全开源，接受用户和任何机构的审查',
		},
		{
			icon: 'yellow',
			title: '资产保护',
			desc: '用户所购买的云算力，将由MineFi社区保障资源的有效性，任何时候出现了算力节点的故障，我们都将采取有效措施避免资产损失',
		},
		{
			icon: 'green',
			title: '自由性',
			desc: '通过智能合约技术，我们承诺用户可以合理的管理自己的资产交易，可随时变现'
		},
		{
			icon: 'red',
			title: '多样性',
			desc: '社区定期向用户推出新颖的理财方案，帮助用户快速了解掌握金融理财，有效帮助用户提升资产价值。并且社区会不断丰富基于FVM的多样化理财产品以供来自不同需求的用户'
		},
		// {
		// 	icon: 'purple',
		// 	title: 'As responsive as it can get',
		// 	desc: 'Declare breakpoints once, use them everywhere — from media queries to blocks. Override any attribute value for particular breakpoints without breaking a sweat. Need to tweak that width for tablets? Done.',
		// },
		// {
		// 	icon: 'red',
		// 	title: 'Cache busting',
		// 	desc: 'Each time you build assets, we generate a new URL for each asset file. This means you\'ll never see the old cached version while developing or after pushing your code to production.',
		// },
		// {
		// 	icon: 'green',
		// 	title: 'Eightshift Libs',
		// 	desc: 'Library aimed at bringing the modern development tools to your project.',
		// },
		// {
		// 	icon: 'purple',
		// 	title: 'Eightshift Frontend Libs',
		// 	desc: 'A collection of useful front-end utility modules and all the tools you need to start building modern Block Editor dynamic blocks.',
		// },
	];

	const items = data.map((item, index) => {
		const {
			icon,
			title,
			desc,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<div className={`${component}__title ${component}__title--${icon}`}>
					{title}
				</div>
				<div className={`${component}__desc`}>
					{desc}
				</div>
			</div>
		)
	});

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
			>
				<Heading
					componentClass={component}
					title={'MineFi的优势'}
					align={'left'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	)
}
