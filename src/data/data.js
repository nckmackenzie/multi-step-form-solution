import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';
export const plans = [
  { name: 'Arcade', monthly: '$9/mo', yearly: '$90/yr', icon: arcade },
  {
    name: 'Advanced',
    monthly: '$12/mo',
    yearly: '$120/yr',
    icon: advanced,
  },
  { name: 'Pro', monthly: '$15/mo', yearly: '$150/yr', icon: pro },
];

export const addons = [
  {
    name: 'Online service',
    monthly: '$10/mo',
    yearly: '$100/yr',
    description: 'Access to multiplayer games',
  },
  {
    name: 'Larger storage',
    monthly: '$20/mo',
    yearly: '$200/yr',
    description: 'Extra 1TB of cloud save',
  },
  {
    name: 'Customizable profile',
    monthly: '$20/mo',
    yearly: '$200/yr',
    description: 'Custom theme on your profile',
  },
];
