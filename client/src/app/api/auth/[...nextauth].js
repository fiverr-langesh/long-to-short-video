import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "209877365697-mm87jj4ul8rekm11he5mnujc15217a8g.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session(session, user) {
      session.user.id = user.id;
      session.user.email = user.email
      return session;
    },
  },
};

export default NextAuth(authOptions);
