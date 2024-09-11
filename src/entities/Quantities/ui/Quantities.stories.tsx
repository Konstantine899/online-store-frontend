import type { Meta, StoryObj } from '@storybook/react';
import { Quantities } from './Quantities';

const meta: Meta<typeof Quantities> = {
  title: 'entities/Quantities',
  component: Quantities,
};

export default meta;
type Story = StoryObj<typeof Quantities>;

export const InflectionsOne: Story = {
  args: {
    search: 'xia',
    products: {
      rows: [
        {
          id: 1,
          rating: 5,
          brand_id: 1,
          category_id: 1,
          price: 100,
          name: '',
          image: '',
        },
      ],
      metaData: {
        limit: 5,
        totalCount: 100,
        currentPage: 1,
        lastPage: 10,
        nextPage: 2,
        previousPage: 0,
      },
      search: '',
      sortOrder: 'asc',
      count: 1,
    },
    isSuccess: true,
  },
  render: (args) => <Quantities {...args} />,
};

export const InflectionsTwo: Story = {
  args: {
    search: 'xia',
    products: {
      rows: [
        {
          id: 1,
          rating: 5,
          brand_id: 1,
          category_id: 1,
          price: 100,
          name: '',
          image: '',
        },
      ],
      metaData: {
        limit: 5,
        totalCount: 100,
        currentPage: 1,
        lastPage: 10,
        nextPage: 2,
        previousPage: 0,
      },
      search: '',
      sortOrder: 'asc',
      count: 4,
    },
    isSuccess: true,
  },
  render: (args) => <Quantities {...args} />,
};

export const InflectionsThree: Story = {
  args: {
    search: 'xia',
    products: {
      rows: [
        {
          id: 1,
          rating: 5,
          brand_id: 1,
          category_id: 1,
          price: 100,
          name: '',
          image: '',
        },
      ],
      metaData: {
        limit: 5,
        totalCount: 100,
        currentPage: 1,
        lastPage: 10,
        nextPage: 2,
        previousPage: 0,
      },
      search: '',
      sortOrder: 'asc',
      count: 5,
    },
    isSuccess: true,
  },
  render: (args) => <Quantities {...args} />,
};
