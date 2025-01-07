import { Container } from "@/components/Container";
import { mongoConnect, Subscriber } from "@/mongo";

export default async function Page() {
  const connection = await mongoConnect();

  const count = await Subscriber.countDocuments();

  await connection.disconnect();

  return (
    <div className="flex w-full flex-1 flex-col gap-8 p-8">
      <Container className="space-x-8 space-y-8">
        Subscribers: {count}
      </Container>
    </div>
  );
}
