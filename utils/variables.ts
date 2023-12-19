import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'NEBK (Turkish)',
    description: 'NEBK HTML tabanlı bir eczane bilgi sitesidir.',
    link: 'https://eczaneler.works',
    iconURL: 'https://yda.heytr.me/projeler/eczane/icon/icon.svg',
  },
  {
    name: 'Mail Contact',
    description: 'Click to contact us via e-mail.',
    link: 'mailto:xrqu@sdevs.org',
    iconURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/OOjs_UI_icon_message-invert.svg',
  },
];

export const githubUsername = 'heyturkiye204';
export const discordId = '718374283642011728';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/users/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/xrqu.live',
    iconURL: BsInstagram,
  },
  {
    name: 'X',
    link: 'https://twitter.com/HayatDrubunu',
    iconURL: BsTwitterX,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Typescript',
    iconURL: SiTypescript,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
];
