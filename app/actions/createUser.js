"use server";

import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";

async function createUser(previousState, formData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  if (!email || !password || !name) {
    return {
      error: "Please fill in all fileds.",
    };
  }

  if (password.length < 8) {
    return {
      error: "Password must be at least 8 charachters long.",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords do not match.",
    };
  }

  const { account } = await createAdminClient();
  try {
    await account.create(ID.unique(), email, password, name);
    return {
      success: true,
    };
  } catch (error) {
    console.log("Registration Error ", error);
    return {
      error: "Could not register user",
    };
  }
}

export default createUser;
