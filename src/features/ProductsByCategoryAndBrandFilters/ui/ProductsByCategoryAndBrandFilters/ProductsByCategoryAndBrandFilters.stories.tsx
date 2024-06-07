
  import type { Meta, StoryObj } from '@storybook/react';
  import { ProductsByCategoryAndBrandFilters } from './ProductsByCategoryAndBrandFilters';
  
  const meta: Meta<typeof ProductsByCategoryAndBrandFilters> = {
  title: 'features/ProductsByCategoryAndBrandFilters',   
  component: ProductsByCategoryAndBrandFilters,
};
  
  export default meta;
  type Story = StoryObj<typeof ProductsByCategoryAndBrandFilters>;
  
  export const Primary: Story = {
  args: {},
  render: (args) => <ProductsByCategoryAndBrandFilters {...args}/>,
};
  