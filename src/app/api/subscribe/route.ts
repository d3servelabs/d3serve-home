import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connector, Subscriber } from "@/mongo";

function validateRequest<T>(
  schema: z.ZodType<T>,
  handler: (validatedData: T) => Promise<NextResponse>,
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      const data = await request.json();
      return await handler(schema.parse(data));
    } catch (error) {
      console.error(error);
      if (error instanceof z.ZodError) {
        return NextResponse.json({ errors: error.errors }, { status: 400 });
      }
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  };
}

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
});

type SchemaType = z.infer<typeof schema>;

export const POST = validateRequest<SchemaType>(schema, async ({ email }) => {
  await connector(async () => {
    const count = await Subscriber.countDocuments({ email });

    if (!count) {
      const subscriber = new Subscriber({ email });
      await subscriber.save();
    }
  });

  return NextResponse.json({ email });
});
