import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 text-center md:p-8">
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-4xl">Page Not Found</h2>
        <div className="text-lg text-muted-foreground">
          Oops! The page you&#39;re looking for doesn&#39;t exist.
        </div>
        <Button href="/" className="mt-4">
          Go to Home Page
        </Button>
      </div>
    </div>
  );
}
