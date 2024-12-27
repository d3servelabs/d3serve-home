import type { Meta, StoryObj } from "@storybook/react";
import { Labs } from "./Labs";

const meta: Meta<typeof Labs> = {
  title: "Components/Labs",
  component: Labs,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Labs>;

export const Default: Story = {
  args: {},
};
