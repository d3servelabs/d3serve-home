import type { Meta, StoryObj } from "@storybook/react";
import { Trusts } from "./Trusts";

const meta: Meta<typeof Trusts> = {
  title: "Components/Trusts",
  component: Trusts,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Trusts>;

export const Default: Story = {
  args: {},
};
