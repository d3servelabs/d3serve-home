import type { Meta, StoryObj } from "@storybook/react";
import { ActionConfetti } from "./ActionConfetti";

const meta: Meta<typeof ActionConfetti> = {
  title: "Components/ActionConfetti",
  component: ActionConfetti,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof ActionConfetti>;

export const Default: Story = {
  args: {},
};
