import type { Meta, StoryObj } from "@storybook/react";
import { ImageWithFallback } from "./ImageWithFallback";

const meta: Meta<typeof ImageWithFallback> = {
  title: "Components/ImageWithFallback",
  component: ImageWithFallback,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof ImageWithFallback>;

export const Default: Story = {
  args: {},
};
