// import dotenv from "dotenv";
// import type { Payload } from "payload";
// import payload from "payload";

// dotenv.config();

// let cached = (global as any).payload;

// if (!cached) {
//   cached = (global as any).payload = {
//     client: null,
//     promise: null,
//   };
// }

// export const getPayloadClient = async (): Promise<Payload> => {
//   if (!process.env.PAYLOAD_SECRET) {
//     throw new Error("PAYLOAD_SECRET environment variable is missing");
//   }

//   if (cached.client) {
//     return cached.client;
//   }

//   console.log("PAYLOAD_SECRET:", process.env.PAYLOAD_SECRET);
//   console.log("Payload init config:", {
//     secret: process.env.PAYLOAD_SECRET,
//     local: true,
//   });

//   if (!cached.promise) {
//     cached.promise = payload.init({
//       secret: process.env.PAYLOAD_SECRET,
//       local: true,
//     });
//   }

//   try {
//     cached.client = await cached.promise;
//   } catch (e: unknown) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.client;
// };
