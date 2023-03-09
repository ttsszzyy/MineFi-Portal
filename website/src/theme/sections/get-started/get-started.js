import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';
import Arrow from './../../components/arrow/arrow';

export default function GetStarted() {

	const component = 'shift-get-started';

	const itemsData = [
		{
			bg: useBaseUrl('img/ic-theme-bg.svg'),
			icon: useBaseUrl('img/ic-theme.svg'),
			type: 'theme',
			// label: `I want a new WordPress <span class="${component}__label-highlight">theme</span>`,
			label: `我是客户`,
			link: useBaseUrl('/docs/theme'),
		},
		{
			bg: useBaseUrl('img/ic-plugin-bg.svg'),
			icon: useBaseUrl('img/ic-plugin.svg'),
			type: 'plugin',
			// label: `I want a new WordPress <span class="${component}__label-highlight">plugin</span>`,
			label: `我是服务商`,
			link: useBaseUrl('/docs/plugin'),
		},
	];

	const items = itemsData.map((item, index) => {
		const {
			bg,
			icon,
			type,
			label,
			link,
		} = item;

		return (
			<div className={`${component}__item ${component}__item--${type}`} key={index}>
				<a className={`${component}__link`} href={link} onClick={e => e.preventDefault()}>
					<div className={`${component}__icon`}>
						<img className={`${component}__icon-bg`} src={bg} />
						<img className={`${component}__icon-img`} src={icon} />
					</div>
					<div className={`${component}__label`} dangerouslySetInnerHTML={{__html: label}}></div>
					{/*<Arrow componentClass={component} />*/}
				</a>
			</div>
		)
	});

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'small'}
			>
				<Heading
					componentClass={component}
					title={'即刻开始收益，轻松快捷'}
					subtitle={'您只需要注册一个小狐狸钱包，即刻可以开启轻松质押挖矿，基于去中心化的云算力挖矿，可以让您更加的放心，收益同样客观。当然，如果您有算力想加入平台销售，我们也非常的欢迎。'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	);
};
