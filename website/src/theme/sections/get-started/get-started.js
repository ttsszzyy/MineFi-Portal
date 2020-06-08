import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../../components/heading/heading';
import Container from './../../components/container/container';
import Arrow from './../../components/arrow/arrow';

export default function GetStarted() {

  const component = 'shift-get-started';

  const ThemeBgIcon = () => (
    <svg className={`${component}__icon-bg`} xmlns="http://www.w3.org/2000/svg" width="230" height="200"><path fill="#44AEDE" fillRule="evenodd" d="M225.245 67.358c-5.96-34.252-43.288-94.865-112.527-43.525C39.06 78.45-3.008 97.91 3.697 139.423c15.967 98.854 244.434 59.444 221.548-72.065"/></svg>
  );

  const ThemeIcon = () => (
    <svg className={`${component}__icon-img`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="230" height="200"><defs><path id="a" d="M29.536.119C13.27.119.084 13.288.084 29.533S13.27 58.947 29.536 58.947h78.501c8.84 0 16.005-7.157 16.005-15.984v-26.86c0-8.828-7.166-15.984-16.005-15.984H29.536z"/><path id="c" d="M16.04.46C7.214.46.057 7.592.057 16.39v78.135c0 16.19 13.17 29.314 29.415 29.314 16.245 0 29.414-13.125 29.414-29.314V16.39C58.885 7.592 51.728.46 42.9.46H16.04z"/></defs><g fill="none" fillRule="evenodd" transform="translate(53 38)"><path fill="#E84E4E" d="M.102 94.905c0-16.18 13.157-29.298 29.387-29.298h78.33c8.819 0 15.969 7.129 15.969 15.921v26.755c0 8.792-7.15 15.92-15.97 15.92H29.49c-16.23 0-29.387-13.117-29.387-29.298"/><g transform="translate(0 64.8)"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><path fill="#CB3A3A" d="M124.042 58.947V.119H79.005C83.41 35.495 98.89 31.19 93.658 58.947h30.384z" mask="url(#b)"/></g><path fill="#FFF" d="M93.453 99.012l4.008-.687-3.132-2.607-.876 3.294zm-2.184.387l1.365-5.099-1.35-1.117.574-2.12 8.505 7.076-.489 1.79-10.918 1.89.575-2.133 1.738-.287zm2.715 10.097c.422 0 .79-.124 1.106-.372.316-.248.532-.592.647-1.031a1.83 1.83 0 00.072-.544c0-.42-.127-.788-.381-1.104-.254-.315-.606-.534-1.056-.659a2.04 2.04 0 00-.574-.07 1.73 1.73 0 00-1.114.371c-.311.248-.524.588-.639 1.017-.048.153-.072.34-.072.559 0 .42.127.788.38 1.103.254.315.602.53 1.042.644.201.057.397.086.59.086zm2.845-2.993c.44.544.66 1.155.66 1.833 0 .248-.038.515-.114.802-.202.735-.59 1.308-1.164 1.719-.575.41-1.255.616-2.04.616-.402 0-.828-.058-1.278-.172-.9-.239-1.61-.652-2.127-1.239-.517-.588-.775-1.258-.775-2.013 0-.315.038-.606.115-.873.133-.487.35-.902.646-1.246a2.526 2.526 0 011.106-.745l-.962-.272.488-1.82 9.711 2.594-.488 1.833-3.778-1.017zm-.101 7.454c.498.626.747 1.364.747 2.213 0 .354-.052.74-.158 1.16a4.045 4.045 0 01-.639 1.376c-.292.4-.649.725-1.07.973l-1.193-1.431c.575-.335.948-.803 1.12-1.404.048-.21.073-.392.073-.545 0-.42-.13-.787-.388-1.103-.26-.315-.608-.534-1.05-.659a1.885 1.885 0 00-.559-.07c-.422 0-.793.123-1.114.372-.32.247-.538.587-.653 1.016a2.157 2.157 0 00-.086.602c0 .41.115.816.344 1.217l-1.738.63a3.537 3.537 0 01-.46-1.79c0-.372.053-.759.159-1.16.239-.888.672-1.585 1.3-2.09.626-.507 1.362-.76 2.204-.76.336 0 .704.052 1.107.158.872.238 1.556.67 2.054 1.295m-43.173-3.321h2.104V92.508h-2.104zm-6.218-8.057h2.103V92.508h-2.103zm-15.772 9.933V97.175a4.674 4.674 0 014.68-4.667 4.675 4.675 0 014.682 4.667v15.337c0 2.577-2.096 4.666-4.681 4.666s-4.68-2.089-4.68-4.666"/><path fill="#9973E3" d="M9.827 115.738C-1.753 104.4-1.92 85.85 9.452 74.306L64.338 18.59c6.18-6.273 16.291-6.364 22.584-.203l19.146 18.747c6.292 6.161 6.383 16.242.203 22.515l-54.886 55.715c-11.373 11.544-29.979 11.711-41.558.373"/><path fill="#8963D3" d="M54.441 98.422L27.488 72.031l25.136-25.516 26.952 26.392z"/><path fill="#FFF" d="M64.209 37.636l2.08 2.037 1.622-3.772-3.702 1.735zm1.732 2.86l-2.532-2.478-1.132.536a1.638 1.638 0 00-.444.288c-.333.337-.146.74.337 1.293l-.454.46-2.244-2.197.453-.46c.327.22.582.369.966.204l7.446-3.41.517-1.24 2.388 2.339-3.73 8.793c-.15.357-.014.628.233.97l-.453.46-3.844-3.763.454-.46c.49.442.909.63 1.252.283.1-.103.19-.255.29-.458l.497-1.16zm7.988 7.099c1.369-1.39 1.38-2.382.694-3.054a1.57 1.57 0 00-.562-.37l-2.849 2.892c-.594.603-.883 1.142-.381 1.634.686.672 1.93.084 3.098-1.102zm.296-8.884l.342-.347 2.749 1.787.358.352-3.311 3.361c.71-.188 1.826-.198 2.718.675 1.189 1.164 1.286 2.844-.406 4.56-2.114 2.147-4.564 1.875-6.347.129-.953-.933-1.889-2.17-2.062-3.384l6.23-6.325-.271-.808zM78.8 54.773c.583.572 1.195.81 1.955.671l.096.394c-1.638.987-3.062.696-4.251-.468-1.456-1.425-1.597-3.55.075-5.247 1.721-1.747 4.147-1.92 5.89-.215 1.045 1.024 1.564 2.295.628 3.245-.412.42-.91.434-1.247.305l-1.055-1.033c.272-.215.473-.4.644-.573.604-.613.833-1.173.382-1.614-.574-.562-1.657-.117-2.663.905-1.268 1.288-1.47 2.636-.455 3.63M69.56 73.559L56.31 60.585l1.473-1.496 13.251 12.974zm-8.12.738l-7.207-7.057 1.474-1.496 7.207 7.057z"/><path fill="#CB3A3A" d="M34.45 103.222L23.475 92.475a4.656 4.656 0 01-.06-6.6 4.691 4.691 0 016.62-.058l10.974 10.747a4.654 4.654 0 01.06 6.598 4.69 4.69 0 01-6.619.06"/><path fill="#F99922" d="M29.462 124.294c-16.23 0-29.387-13.117-29.387-29.298V16.903c0-8.793 7.15-15.92 15.97-15.92H42.88c8.82 0 15.969 7.127 15.969 15.92v78.093c0 16.18-13.157 29.298-29.387 29.298"/><path fill="#E08103" d="M29.462 68.756h22.34V39.345h-22.34z"/><mask id="d" fill="#fff"><use xlinkHref="#c"/></mask><path fill="#E08103" d="M.056 30.702h58.829V.46H.056z" mask="url(#d)"/><g><path fill="#E08103" d="M47.993 94.905c0 10.204-8.297 18.475-18.531 18.475-10.234 0-18.53-8.271-18.53-18.475 0-10.203 8.296-18.474 18.53-18.474 10.234 0 18.53 8.271 18.53 18.474"/><path fill="#FFF" d="M45.21 94.905c0 8.672-7.05 15.701-15.748 15.701s-15.748-7.03-15.748-15.7c0-8.672 7.05-15.701 15.748-15.701s15.748 7.03 15.748 15.7"/><path fill="#0C3636" d="M35.419 94.905c0 3.28-2.667 5.94-5.957 5.94s-5.957-2.66-5.957-5.94c0-3.28 2.667-5.938 5.957-5.938s5.957 2.659 5.957 5.938"/><path fill="#FFF" d="M11.35 30.166h2.44l-1.22-3.38-1.222 3.38zm6.535 4.268h-2.557l-.76-2.105h-3.995l-.762 2.105H7.306l3.856-10.026h2.866l3.857 10.026zm3.025-3.516c0 .93.618 1.611 1.5 1.611.905 0 1.509-.694 1.509-1.61 0-.917-.604-1.612-1.508-1.612-.883 0-1.501.68-1.501 1.611m5.322-.007c0 2.076-1.4 3.71-3.283 3.71-.955 0-1.594-.387-2.018-.939v.752h-2.169V24.122h2.24v3.96c.425-.508 1.042-.866 1.947-.866 1.882 0 3.283 1.632 3.283 3.695m7.642-2.156l-1.76 1.225c-.352-.451-.754-.673-1.3-.673-.782 0-1.45.601-1.45 1.611 0 1.017.654 1.611 1.436 1.611.531 0 .977-.236 1.329-.68l1.752 1.246c-.675.952-1.709 1.525-3.016 1.525-2.248 0-3.8-1.554-3.8-3.702 0-2.148 1.552-3.702 3.8-3.702 1.307 0 2.334.58 3.01 1.54M7.259 41.403h18.183v-2.097H7.259zm0 5.43h18.183v-2.097H7.259zm0 6.199H17.36v-2.097H7.259z"/><path fill="#F4F3F0" d="M29.462 84.978c-5.491 0-9.958 4.453-9.958 9.927 0 5.475 4.467 9.929 9.958 9.929 5.491 0 9.958-4.454 9.958-9.929 0-5.474-4.467-9.927-9.958-9.927m0 22.272c-6.828 0-12.382-5.538-12.382-12.345s5.554-12.344 12.382-12.344c6.828 0 12.382 5.537 12.382 12.344 0 6.807-5.554 12.345-12.382 12.345"/><path fill="#E6E7E8" d="M29.462 105c-5.583 0-10.124-4.529-10.124-10.094h4.04c0 3.344 2.73 6.065 6.084 6.065v4.028z"/></g></g></svg>
  );

  const PluginBgIcon = () => (
    <svg className={`${component}__icon-bg`} xmlns="http://www.w3.org/2000/svg" width="230" height="200"><path fill="#E84E4E" fillRule="evenodd" d="M192.864 25.003c26.035 21.887 61.732 83.48-11.392 127.41-77.467 46.539-127.873 53.76-159.12 27.007C-46.375 120.576 92.91-59.028 192.864 25.003"/></svg>
  );

  const PluginIcon = () => (
    <svg className={`${component}__icon-img`} xmlns="http://www.w3.org/2000/svg" width="230" height="200"><g fill="none" fillRule="evenodd"><path fill="#0C3636" d="M95.5 135.507C75.89 124.185 69.171 99.11 80.493 79.5 91.815 59.89 116.89 53.171 136.5 64.493c19.61 11.322 26.329 36.397 15.007 56.007-11.322 19.61-36.397 26.329-56.007 15.007"/><path fill="#FFF" d="M117.637 110.01a5.117 5.117 0 011.081-7.166l9.466-6.952c2.281-1.675 5.495-1.183 7.18 1.099a5.116 5.116 0 01-1.082 7.165l-9.466 6.952c-2.281 1.675-5.495 1.183-7.18-1.099M104.637 93.01a5.117 5.117 0 011.081-7.166l9.466-6.952c2.281-1.675 5.495-1.183 7.18 1.099a5.116 5.116 0 01-1.082 7.165l-9.466 6.952a5.145 5.145 0 01-7.18-1.099"/><path fill="#2D97C8" d="M150.423 61.65l-5.91 4.415 10.057 13.868 5.91-4.415c2.384-1.781 2.92-5.154 1.195-7.533l-3.81-5.254c-1.725-2.379-5.057-2.863-7.442-1.081"/><path fill="#44AEDE" d="M119.014 71.385l8.328-6.152c8.13-6.004 19.55-4.287 25.51 3.838l1.246 1.698c5.96 8.124 4.201 19.577-3.928 25.582l-8.328 6.152-22.828-31.118z"/><path fill="#2D97C8" d="M112.409 70.141a5.151 5.151 0 017.212 1.09l23.074 31.404a5.174 5.174 0 01-1.104 7.224 5.151 5.151 0 01-7.212-1.09l-23.074-31.404a5.174 5.174 0 011.104-7.224m40.902-6.744c11.138-8.173 28.845-14.201 49.95 3.483l-6.568 7.815c-13.026-10.914-25.226-11.915-37.296-3.058l-6.086-8.24zm-9.477 6.46c1.37-1.04 3.267-.78 4.24.582l3.815 5.354c.97 1.363.647 3.31-.723 4.35-1.37 1.042-3.268.78-4.238-.582l-3.817-5.354c-.97-1.362-.647-3.31.723-4.35m-11.159 2.597a2.967 2.967 0 014.133.638l9.133 12.34c.97 1.312.695 3.154-.616 4.114s-3.162.675-4.133-.638l-9.132-12.339a2.931 2.931 0 01.615-4.115"/><path fill="#E08103" d="M34.307 121.305c13.026 10.915 25.225 11.915 37.296 3.058l6.086 8.24c-11.138 8.172-28.845 14.201-49.95-3.483l6.568-7.815zm46.27 14.045l5.91-4.414-10.057-13.869-5.91 4.415c-2.384 1.782-2.92 5.154-1.195 7.533l3.81 5.254c1.725 2.379 5.057 2.863 7.442 1.081"/><path fill="#F99922" d="M110.986 125.615l-8.328 6.152c-8.13 6.004-19.55 4.287-25.51-3.837l-1.246-1.699c-5.96-8.124-4.201-19.577 3.928-25.582l8.328-6.152 22.828 31.118z"/><path fill="#E08103" d="M117.591 127.859a5.151 5.151 0 01-7.212-1.09L87.305 95.365a5.174 5.174 0 011.104-7.224 5.153 5.153 0 017.213 1.09l23.073 31.404a5.174 5.174 0 01-1.104 7.224m-30.425-.715c-1.37 1.04-3.267.779-4.24-.583l-3.815-5.354c-.97-1.363-.647-3.31.723-4.35 1.37-1.042 3.267-.78 4.239.582l3.815 5.354c.972 1.362.648 3.31-.722 4.35m10.159-2.597a2.968 2.968 0 01-4.133-.638l-9.133-12.34c-.971-1.312-.695-3.154.616-4.114s3.162-.675 4.133.638l9.133 12.34a2.931 2.931 0 01-.616 4.114"/></g></svg>
  );

  const itemsData = [
    {
      bg: <ThemeBgIcon />,
      icon: <ThemeIcon />,
      type: 'theme',
      label: `I want a new WordPress <span class="${component}__label-highlight">theme</span>`,
      link: useBaseUrl('/docs/theme'),
    },
    {
      bg: <PluginBgIcon />,
      icon: <PluginIcon />,
      type: 'plugin',
      label: `I want a new WordPress <span class="${component}__label-highlight">plugin</span>`,
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
        <a className={`${component}__link`} href={link}>
          <div className={`${component}__icon`}>
            {bg}
            {icon}
          </div>
          <div className={`${component}__label`} dangerouslySetInnerHTML={{__html: label}}></div>
          <Arrow componentClass={component} />
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
          title={'Choose one of the options to get started'}
          subtitle={'We\'ve built a bot to automate the tedious process of adding project contributors, so you can focus on your project instead of managing your ReadMe.'}
        />
        <div className={`${component}__content`}>
          {items}
        </div>
      </Container>
    </div>
  );
};
