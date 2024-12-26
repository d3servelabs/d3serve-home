import type { Meta, StoryObj } from "@storybook/react";
import { Logotype } from "./Logotype";

const meta: Meta<typeof Logotype> = {
  title: "Components/Logotype",
  component: Logotype,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Logotype>;

export const Default: Story = {
  args: {},
};
