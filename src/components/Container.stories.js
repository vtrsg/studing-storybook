import React from "react";

import Container from "./Container";


import  { nike1 } from "../helpers/imgs.js"

export default {
  component: Container,
  title: "Container",
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});

Default.args = {
  container: {
    id: "1",
    title: "Nike Air Max 90",
    brand: "Nike",
    price: 195.80.toFixed(2),
    state: "white",
    image: nike1.image,
    alt: nike1.name
  },
};

export const Selected = Template.bind({});

Selected.args = {
  container: {
    ...Default.args.container,
    state: "beige",
  },
};
