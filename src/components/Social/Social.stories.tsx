import type { Meta, StoryObj } from "@storybook/react";
import { Social } from "./Social";

const meta: Meta<typeof Social> = {
  title: "Components/Social",
  component: Social,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Social>;

export const Default: Story = {
  args: {},
};
