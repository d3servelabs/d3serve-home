import type { Meta, StoryObj } from "@storybook/react";
import { Cursor } from "./Cursor";

const meta: Meta<typeof Cursor> = {
  title: "Components/Cursor",
  component: Cursor,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
};

export default meta;

type Story = StoryObj<typeof Cursor>;

export const Default: Story = {
  args: {},
};
