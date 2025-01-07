import { Container } from "@/components/Container";
import { connector, Subscriber } from "@/mongo";

export default async function Page() {
  const count = await connector(() => Subscriber.countDocuments());

  return (
    <div className="flex w-full flex-1 flex-col gap-8 p-8">
      <Container className="space-x-8 space-y-8">
        Subscribers: {count}
      </Container>
    </div>
  );
}
