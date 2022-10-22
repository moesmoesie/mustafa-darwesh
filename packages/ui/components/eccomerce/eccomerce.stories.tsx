import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Eccomerce as Component } from "..";

export default {
  title: "Components/Ecommerce",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <div className="">
      <Component {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  initialsItems: [
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        filename: "https://via.placeholder.com/80x120",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        filename: "https://via.placeholder.com/80x120",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "2",
      color: "#ffffff",
      discountPercentage: 30,
      price: 89.95,
      title: "Title 2",
      image: {
        filename: "https://via.placeholder.com/100x120",
        type: "normal",
        width: 80,
      },
    },
  ],
  items: [
    {
      id: "1",
      color: "#893AD8",
      discountPercentage: 30,
      price: 99.95,
      title: "Title",
      image: {
        filename: "https://via.placeholder.com/80x120",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "2",
      color: "#ffffff",
      discountPercentage: 30,
      price: 89.95,
      title: "Title 2",
      image: {
        filename: "https://via.placeholder.com/100x120",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "3",
      color: "#333333",
      discountPercentage: 30,
      price: 100.95,
      title: "Title 3",
      image: {
        filename: "https://via.placeholder.com/200x300",
        type: "normal",
        width: 80,
      },
    },
    {
      id: "4",
      color: "#e6e6e6",
      discountPercentage: 30,
      price: 79.95,
      title: "Title 4",
      image: {
        filename: "https://via.placeholder.com/120x120",
        type: "normal",
        width: 80,
      },
    },
  ],
};