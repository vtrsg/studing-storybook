import React from 'react';

import ListItems from './ListItems';
import * as ContainerStories from './Container.stories';

import  { nike1, nike2, nike3 } from "../helpers/imgs.js"

export default {
    component: ListItems,
    title: 'ListItems',
};

const Template = args => <ListItems {...args} />;

export const Default = Template.bind({});
Default.args = {
    container: [
        {
            ...ContainerStories.Default.args.container, id: "1",
            title: "Nike Air Max 270",
            brand: "Nike",
            price: 195.80.toFixed(2),
            state: "white",
            image: nike2.image,
            alt: nike2.name
          },
        {
            ...ContainerStories.Default.args.container, id: "2",
            title: "Nike Air Max 90",
            brand: "Nike",
            price: 195.80.toFixed(2),
            state: "white",
            image: nike1.image,
            alt: nike1.name
          },
        {
            ...ContainerStories.Default.args.container, id: "3",
            title: "Nike Air Max Plus",
            brand: "Nike",
            price: 195.80.toFixed(2),
            state: "white",
            image: nike3.image,
            alt: nike3.name
          },
    ],
};
export const PinnedList = Template.bind({});
PinnedList.args = {
    container: [
        ...Default.args.container.slice(0, 2),
        { id: "3",
        title: "Nike Air Max Plus",
        brand: "Nike",
        price: 195.80.toFixed(2),
        state: "beige",
        image: nike3.image,
        alt: nike3.name
      },
    ],
};