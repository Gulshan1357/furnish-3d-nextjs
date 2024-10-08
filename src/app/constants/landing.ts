import testImg from '@/../public/images/Hero.gif';
import furnitureImg from '@/../public/images/Hero.gif';
import nextjsLogo from '@/../public/logo/nextjs.svg';
import kindeLogo from '@/../public/logo/kinde.svg';
import prismaLogo from '@/../public/logo/prisma-2.svg';
import threejsLogo from '@/../public/logo/ThreeJS.svg';
import typeScriptLogo from '@/../public/logo/typescript.svg';
import vercelLogo from '@/../public/logo/vercel.svg';



export const hero = {
  heading: 'Furnish3D',
  subHeading: 'Furniture in 3D',
  description: "Interact with our products, change textures, and see them from every angle. Customize your furniture in real-time and visualize how it will look in your home before you make a purchase.",
  furnitureImage: furnitureImg,
  testImage: testImg,
};

export const highlights = [
  {
    id: '1',
    heading: 'Explore from Our Large Collection',
    description: 'Our handmade items are crafted with attention to detail, offering you a unique antiqued look. Each piece is designed to bring character and warmth to your home.',
  },
  {
    id: '2',
    heading: 'Interact with Items from All Angles',
    description: 'We give you full control to interact with every piece. Rotate, zoom in, or zoom out to see our furniture from every possible angle, helping you make the right choice.',
  }, {
    id: '3',
    heading: 'Customize and Visualize Your Items',
    description: 'With our real-time customization tools, you can change the textures and materials of each item. Visualize your unique design before purchasing, ensuring it fits your home perfectly.',
  },
];

export const logos = [
  {
    id: 1,
    name: 'Next JS',
    path: nextjsLogo,
  }, {
    id: 2,
    name: 'Kinde',
    path: kindeLogo,
  }, {
    id: 3,
    name: 'Prisma ORM',
    path: prismaLogo,
  }, {
    id: 4,
    name: 'Three JS',
    path: threejsLogo,
  }, {
    id: 5,
    name: 'TypeScript',
    path: typeScriptLogo,
  }, {
    id: 6,
    name: 'Vercel',
    path: vercelLogo,
  },

];

export const models = [
  {
    id: 1,
    title: 'Sofa',
    color: ['red', 'yellow', 'green'],
    // img: { logo },
  },
  {
    id: 2,
    title: 'Chair Basic',
    color: ['red', 'yellow', 'green'],
    // img: { logo },
  },
  {
    id: 3,
    title: 'Chair High-end',
    color: ['red', 'yellow', 'green'],
    // img: { logo },
  },
];
