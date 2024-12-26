import type { Meta, StoryObj } from "@storybook/react";
import { Topper } from "./Topper";

const meta: Meta<typeof Topper> = {
  title: "Components/Topper",
  component: Topper,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Topper>;

export const Default: Story = {
  args: {},
};
