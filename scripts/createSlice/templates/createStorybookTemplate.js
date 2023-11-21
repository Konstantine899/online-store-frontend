module.exports = function (layer, componentName) {
  return `
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    
    export default {
    title: '${layer}/${componentName}',
    component: ${componentName},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};`;
};
