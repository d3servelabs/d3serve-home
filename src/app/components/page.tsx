import { Container } from "@/components/Container";
import { Button, ButtonProps } from "@/components/Button";
import { useMemo } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/Alert";
import { AlertTriangleIcon } from "lucide-react";

const variants: ButtonProps["variant"][] = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "destructive",
  "link",
];
const sizes: ButtonProps["size"][] = ["sm", "md", "lg"];

export default function Page() {
  const buttons = useMemo(
    () =>
      variants
        .map((variant) =>
          sizes.map((size) => [
            <Button
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              className=""
            >
              {variant}-{size}
            </Button>,
            <Button
              key={`${variant}-${size}-loading`}
              variant={variant}
              size={size}
              className=""
              loading={true}
            >
              {variant}-{size}-loading
            </Button>,
            <Button
              key={`${variant}-${size}-disabled`}
              variant={variant}
              size={size}
              className=""
              disabled={true}
            >
              {variant}-{size}-disabled
            </Button>,
          ]),
        )
        .flat(),
    [],
  );

  return (
    <div className="flex w-full flex-1 flex-col gap-8 p-8">
      <Container className="space-x-8 space-y-8">{buttons}</Container>
      <Container className="space-x-8 space-y-8">
        <Alert
          variant="default"
          className="inline-flex w-full max-w-md flex-col"
        >
          <AlertTriangleIcon className="size-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{"Something went wrong!"}</AlertDescription>
        </Alert>
        <Alert
          variant="destructive"
          className="inline-flex w-full max-w-md flex-col"
        >
          <AlertTriangleIcon className="size-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{"Something went wrong!"}</AlertDescription>
        </Alert>
      </Container>
    </div>
  );
}
