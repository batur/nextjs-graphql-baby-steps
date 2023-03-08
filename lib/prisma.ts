// /lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  // FIXME: Error: PrismaClient is unable to be run in the browser.
  // TODO: Contiune with part two: https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-2-fwpc6ds155
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export default prisma;
