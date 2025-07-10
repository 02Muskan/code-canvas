// src/ai/flows/personalize-about-me.ts
'use server';

/**
 * @fileOverview An AI agent that personalizes the 'About Me' section based on a target job description.
 *
 * - personalizeAboutMe - A function that personalizes the About Me section.
 * - PersonalizeAboutMeInput - The input type for the personalizeAboutMe function.
 * - PersonalizeAboutMeOutput - The return type for the personalizeAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeAboutMeInputSchema = z.object({
  aboutMe: z
    .string()
    .describe('The user current About Me section content.'),
  jobDescription: z.string().describe('The target job description.'),
});
export type PersonalizeAboutMeInput = z.infer<typeof PersonalizeAboutMeInputSchema>;

const PersonalizeAboutMeOutputSchema = z.object({
  personalizedAboutMe: z.string().describe('The personalized About Me section.'),
});
export type PersonalizeAboutMeOutput = z.infer<typeof PersonalizeAboutMeOutputSchema>;

export async function personalizeAboutMe(input: PersonalizeAboutMeInput): Promise<PersonalizeAboutMeOutput> {
  return personalizeAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeAboutMePrompt',
  input: {schema: PersonalizeAboutMeInputSchema},
  output: {schema: PersonalizeAboutMeOutputSchema},
  prompt: `You are an expert resume writer. Please personalize the following About Me section to better match the job requirements in the job description, highlighting relevant skills and experience.

About Me:
{{aboutMe}}

Job Description:
{{jobDescription}}`,
});

const personalizeAboutMeFlow = ai.defineFlow(
  {
    name: 'personalizeAboutMeFlow',
    inputSchema: PersonalizeAboutMeInputSchema,
    outputSchema: PersonalizeAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
