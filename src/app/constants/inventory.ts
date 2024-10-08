import benchGif from '@/../public/images/bench.gif';
import chairGif from '@/../public/images/Chair.gif';
import bowlGif from '@/../public/images/bowl.gif';
import planterGif from '@/../public/images/planter.gif';
import stoolGif from '@/../public/images/stool.gif';
import tableGif from '@/../public/images/Table.gif';
import vaseGif from '@/../public/images/Vase.gif';

export const Items = [
  {
    id: '1',
    name: 'Wooden Chair',
    description:
      'Simple minimalistic wooden chair that looks good in every setting',
    modifier: ['black', 'dark', 'oiled', 'red', 'sky'],
    gif: chairGif,
  },
  {
    id: '2',
    name: 'Bench',
    description:
      'A spacious and comfortable bench, perfect for outdoor or indoor settings',
    modifier: ['white', 'grey', 'red'],
    gif: benchGif,
  },
  {
    id: '3',
    name: 'Bowl',
    description:
      'A decorative wooden bowl, ideal for holding fruits or decorative items',
    modifier: ['original', 'rosewood', 'white'],
    gif: bowlGif,
  },
  {
    id: '4',
    name: 'Planter',
    description:
      'A stylish wooden planter, perfect for showcasing indoor plants',
    modifier: ['original', 'red', 'yellow'],
    gif: planterGif,
  },
  {
    id: '5',
    name: 'Stool',
    description:
      'A sleek, sturdy stool with a minimalist design for versatile seating',
    modifier: ['original', 'aqua', 'green', 'red', 'sky'],
    gif: stoolGif,
  },
  {
    id: '6',
    name: 'Table',
    description: 'A sturdy wooden table, perfect for dining or workspaces',
    modifier: ['original', 'red', 'yellow'],
    gif: tableGif,
  },
  {
    id: '7',
    name: 'Vase',
    description:
      'A decorative wooden vase, ideal for showcasing flowers or as a standalone piece',
    modifier: ['original', 'brown', 'cream'],
    gif: vaseGif,
  },
];
