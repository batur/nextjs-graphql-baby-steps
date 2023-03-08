import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

const UsersQuery = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(UsersQuery);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js + GraphQL + Prisma + PostgreSQL"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <code>
          {data.users.map((user: any) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </code>
      </div>
    </>
  );
}
