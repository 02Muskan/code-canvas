"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { handlePersonalizeAboutMe } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Wand2, Lightbulb, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Personalizing..." : "Personalize"}
      <Wand2 className="ml-2 h-4 w-4" />
    </Button>
  )
}

export default function PersonalizeAboutMe({ currentAboutMe }: { currentAboutMe: string }) {
  const [state, setState] = useState<{ message?: string | null; personalizedAboutMe?: string | null; errors?: any }>({})
  const { toast } = useToast()

  const formAction = async (formData: FormData) => {
    const newState = await handlePersonalizeAboutMe(formData)
    setState(newState)
    if (newState.message && !newState.personalizedAboutMe) {
      toast({
        variant: "destructive",
        title: "Error",
        description: newState.message,
      })
    }
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary"/>
            <div>
                <CardTitle className="font-headline text-2xl">AI Personalizer</CardTitle>
                <CardDescription>Tailor my summary for a job</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="aboutMe" value={currentAboutMe} />
          <div>
            <Textarea
              name="jobDescription"
              placeholder="Paste a job description here..."
              className="min-h-[150px] text-sm"
              aria-label="Job Description"
            />
            {state.errors?.jobDescription && (
              <p className="text-sm text-destructive mt-1">{state.errors.jobDescription[0]}</p>
            )}
          </div>
          <SubmitButton />
        </form>

        {state.personalizedAboutMe && (
          <Alert className="mt-6">
            <FileText className="h-4 w-4" />
            <AlertTitle>Personalized Summary</AlertTitle>
            <AlertDescription className="mt-2 text-foreground/80 whitespace-pre-wrap">
              {state.personalizedAboutMe}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
