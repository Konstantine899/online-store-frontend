import type { Meta, StoryObj } from '@storybook/react';
import { KitImage } from './KitImage';

const meta: Meta<typeof KitImage> = {
  title: 'shared/KitImage',
  component: KitImage,
};

export default meta;
type Story = StoryObj<typeof KitImage>;

export const WithAnImage: Story = {
  args: {
    src: 'f7a10dbd-c699-4bc5-a2eb-90c38d9b053a.jpg',
    width: '248px',
    height: '242px',
  },
  render: (args) => <KitImage {...args} />,
  // parameters: { msw: { handlers: [handlers.handlerImage.image] } },
};

export const WithoutAnImage: Story = {
  args: {
    src: '',
    spareImage: (
      <img
        width={248}
        height={242}
        src={'not_found_image.png'}
        alt={'not_found_image'}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
  render: (args) => <KitImage {...args} />,
};
