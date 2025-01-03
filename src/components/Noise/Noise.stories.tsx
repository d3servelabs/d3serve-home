import type { Meta, StoryObj } from "@storybook/react";
import { Noise } from "./Noise";

const meta: Meta<typeof Noise> = {
  title: "Components/Noise",
  component: Noise,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Noise>;

export const Default: Story = {
  args: {},
};
