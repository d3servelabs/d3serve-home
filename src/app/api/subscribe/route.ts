import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

function validateRequest<T>(
  schema: z.ZodType<T>,
  handler: (validatedData: T) => NextResponse,
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      const formData = await request.formData();
      const data = Object.fromEntries(formData.entries()) as Record<
        string,
        any
      >;
      const validatedData = schema.parse(data);

      return handler(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return NextResponse.json({ errors: error.errors }, { status: 400 });
      }
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  };
}

const schema = z.object({
  email: z.string().email(),
});

type SchemaType = z.infer<typeof schema>;

export const POST = validateRequest<SchemaType>(schema, (data) => {
  return NextResponse.json(data);
});
