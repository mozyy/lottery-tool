import NextAuth, { type NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    {
      id: 'customProvider',
      name: 'CustomProvider',
      type: 'oauth',
      // scope: '', // Make sure to request the users email address
      // credentials: '',
      // authorize: '',
      authorization: 'http://127.0.0.1:3000/authorize',
      token: 'http://127.0.0.1:3000/token',
      userinfo: 'http://127.0.0.1:3000/v2/user/me',
      profile(profile) {
        console.log(111111, profile);
        return {
          id: profile.id,
        };
      },
    },
  ],
  secret: 'secret',
};

// const handler = (req, res) =>
//   // console.log(2222, req, res);
//   NextAuth(authOptions);

const handler = (req:any, ...args:any) => {
  const { params } = args[args.length - 1];
  req.query = { ...req.query, ...params };
  console.log(123, req.query, params, args.length, args);
  return NextAuth(authOptions)(req, ...args);
};

export { handler as GET, handler as POST };
