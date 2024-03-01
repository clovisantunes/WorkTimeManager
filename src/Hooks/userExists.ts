import prismaClient from "../prisma/prismaClient";

async function userExists(email: string): Promise<boolean> {
  if (!email) {
    throw new Error("Email incorrect");
  }

  const existingUser = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  return !!existingUser;
}

export { userExists };