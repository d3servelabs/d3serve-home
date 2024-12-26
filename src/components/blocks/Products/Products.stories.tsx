import type { Meta, StoryObj } from "@storybook/react";
import { Products } from "./Products";

const meta: Meta<typeof Products> = {
  title: "Components/Products",
  component: Products,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Products>;

export const Default: Story = {
  args: {},
};
