import type { Meta, StoryObj } from "@storybook/react";
import { Hidder } from "./Hidder";

const meta: Meta<typeof Hidder> = {
  title: "Components/Hidder",
  component: Hidder,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Hidder>;

export const Default: Story = {
  args: {},
};
