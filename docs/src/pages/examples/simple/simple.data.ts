import { BannerNavBar } from '@pallassystems/website-core';

export const SimpleBannerExamplesData: BannerNavBar = {
  brand: {
    name: 'example project',
  },
  items: [{ text: 'menu1', path: '/path' }],
};

export const GetSimpleBannerExample = (): string => {
  return (
    'const GettingStartedUsagePage: FC = () => {\n' +
    '\treturn (\n' +
    "\t\t<main role={'main'} className={'flex-shrink-0'}>\n" +
    '\t\t\t<BannerNavBar />\n' +
    '\t\t</main>\n' +
    '\t);\n' +
    '};'
  );
};
