import type { Meta, StoryObj } from "@storybook/react";
import { Companies } from "./Companies";

const meta: Meta<typeof Companies> = {
  title: "Components/Companies",
  component: Companies,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Companies>;

export const Default: Story = {
  args: {},
};
