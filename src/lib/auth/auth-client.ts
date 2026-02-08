import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // Your app URL
});

export const { signIn, signOut, useSession } = authClient;