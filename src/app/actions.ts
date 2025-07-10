"use server"

import { personalizeAboutMe } from "@/ai/flows/personalize-about-me"
import { z } from "zod"

const formSchema = z.object({
  jobDescription: z.string().min(50, {
    message: "Job description must be at least 50 characters.",
  }),
  aboutMe: z.string().min(1, { message: "Original about me text is missing." }),
})

export async function handlePersonalizeAboutMe(formData: FormData) {
  const validatedFields = formSchema.safeParse({
    jobDescription: formData.get("jobDescription"),
    aboutMe: formData.get("aboutMe"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your input.",
    }
  }

  try {
    const result = await personalizeAboutMe(validatedFields.data)
    return {
      personalizedAboutMe: result.personalizedAboutMe,
      message: "Success!",
    }
  } catch (error) {
    console.error("AI personalization failed:", error)
    return {
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
