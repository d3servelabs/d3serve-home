import type { Meta, StoryObj } from "@storybook/react";
import { BackgroundGradient } from "./BackgroundGradient";

const meta: Meta<typeof BackgroundGradient> = {
  title: "Components/BackgroundGradient",
  component: BackgroundGradient,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof BackgroundGradient>;

export const Default: Story = {
  args: {},
};
