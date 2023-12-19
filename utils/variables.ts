import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Proje 1',
    description: 'Metin',
    link: 'https://link.heytr.live/proje1',
    iconURL: 'https://heyteknik.works/heytr-live/proje1.jpg',
  },
  {
    name: 'Proje 2',
    description: 'Metin',
    link: 'https://link.heytr.live/proje2',
    iconURL: 'https://heyteknik.works/heytr-live/proje2.jpg',
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
