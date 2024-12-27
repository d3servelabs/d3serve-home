import type { Meta, StoryObj } from "@storybook/react";
import { TextGradient } from "./TextGradient";

const meta: Meta<typeof TextGradient> = {
  title: "Components/TextGradient",
  component: TextGradient,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof TextGradient>;

export const Default: Story = {
  args: {},
};
