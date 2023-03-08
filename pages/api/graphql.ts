import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { graphql as graphqlLib } from "@app/lib";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: graphqlLib.schema,
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
