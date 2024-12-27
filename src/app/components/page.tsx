import { Container } from "@/components/Container";
import { Button, ButtonProps } from "@/components/Button";
import { useMemo } from "react";

const variants: ButtonProps["variant"][] = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "link",
];
const sizes: ButtonProps["size"][] = ["sm", "md", "lg"];

export default function Page() {
  const buttons = useMemo(
    () =>
      variants
        .map((variant) =>
          sizes.map((size) => (
            <Button
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              className=""
            >
              {variant}-{size}
            </Button>
          )),
        )
        .flat(),
    [],
  );

  return (
    <div className="flex flex-col p-8 w-full">
      <Container className="space-x-8 space-y-8">{buttons}</Container>
    </div>
  );
}
