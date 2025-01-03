import type { Meta, StoryObj } from "@storybook/react";
import { Linker } from "./Linker";

const meta: Meta<typeof Linker> = {
  title: "Components/Linker",
  component: Linker,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Linker>;

export const Default: Story = {
  args: {},
};
