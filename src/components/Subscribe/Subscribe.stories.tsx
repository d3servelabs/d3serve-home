import type { Meta, StoryObj } from "@storybook/react";
import { Subscribe } from "./Subscribe";

const meta: Meta<typeof Subscribe> = {
  title: "Components/Subscribe",
  component: Subscribe,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Subscribe>;

export const Default: Story = {
  args: {},
};
