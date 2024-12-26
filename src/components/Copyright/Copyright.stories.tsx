import type { Meta, StoryObj } from "@storybook/react";
import { Copyright } from "./Copyright";

const meta: Meta<typeof Copyright> = {
  title: "Components/Copyright",
  component: Copyright,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Copyright>;

export const Default: Story = {
  args: {},
};
