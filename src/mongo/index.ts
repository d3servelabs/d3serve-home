import mongoose from "mongoose";
import { env } from "../../env";

// mongoose.set("debug",  (collection, method, query, document) => {
//   console.log("MONGO DB QUERY", collection, method, query, document);
// });

declare global {
  // eslint-disable-next-line no-var
  var mongo: {
    promise: ReturnType<typeof mongoose.connect> | null;
    connection: typeof mongoose | null;
  };
}

global.mongo = {
  connection: null,
  promise: null,
};

async function connect() {
  if (global.mongo.connection) {
    return global.mongo.connection;
  }

  if (!global.mongo.promise) {
    global.mongo.promise = mongoose
      .connect(env.MONGODB_URI!, {
        bufferCommands: false,
        maxPoolSize: 10,
        minPoolSize: 4,
        connectTimeoutMS: 0,
        socketTimeoutMS: 0,
        serverSelectionTimeoutMS: 30000,
        maxIdleTimeMS: 30000,
      })
      .then((mongo) => mongo);
  }

  try {
    global.mongo.connection = await global.mongo.promise;
  } catch (error: any) {
    console.log("ERROR: MONGO DB", error.message);
    global.mongo.promise = null;
    throw error;
  }

  return global.mongo.connection;
}

export const connector = async <T>(fn: () => Promise<T>): Promise<T> => {
  const connection = await connect();

  const results = await fn();

  await connection.disconnect();

  return results;
};

export * from "./models";
