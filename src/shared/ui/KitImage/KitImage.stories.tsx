import type { Meta, StoryObj } from '@storybook/react';
import { KitImage } from './KitImage';

const meta: Meta<typeof KitImage> = {
  title: 'shared/KitImage',
  tags: ['autodocs'],
  component: KitImage,
  args: {},
};

export default meta;
type Story = StoryObj<typeof KitImage>;

export const MainImage: Story = {
  args: {},
  render: () => (
    <KitImage
      mainImage={
        <img
          width={200}
          height={200}
          src={
            'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-noutbuk-na-prozrachnom-fone-6.png'
          }
          alt={'Ноут'}
        />
      }
    />
  ),
};

export const SpareImage: Story = {
  args: {},
  render: () => (
    <KitImage
      width={200}
      height={200}
      spareImage={
        <img
          src={
            'https://img.freepik.com/premium-vector/error-404-not-found-glitch-effect_8024-4.jpg?w=1800'
          }
          alt={'not_found_image'}
        />
      }
    />
  ),
};
