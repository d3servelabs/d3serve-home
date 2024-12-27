import type { Meta, StoryObj } from "@storybook/react";
import { Connect } from "./Connect";

const meta: Meta<typeof Connect> = {
  title: "Components/Connect",
  component: Connect,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Connect>;

export const Default: Story = {
  args: {},
};
