"use client"

import NavBar from "../NavBar"
import { Card, CardHeader, CardDescription, CardTitle } from "../ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { useState } from "react"

// basic info and other stuff import
function InfoCard({ title, stepNumber }) {
  return (
    <Link href="/">
      <Card className="flex flex-col gap-4 p-10 w-full h-40 justify-center">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold">{title}</div>
            <div className="text-slate-700">Step {stepNumber} of 5</div>
          </div>
        </div>
        <div className="text-blue-600 text-lg font-bold">
          Start now →
        </div>
      </Card>
    </Link>
  );
}

const steps = [
  {
    title: "Basic Info",
  },
  {
    title: "Media Upload",
  },
  {
    title: "Facility Details",
  },
  {
    title: "Legal Documents",
  },
  {
    title: "Verification",
  },
]

function HospitalSignUp() {

  let [stepCompletion, setstepCompletion] = useState({
    "basicInfo": true,
    "mediaUpload": false,
    "facilityDetails": false,
    "legalDocuments": false,
    "verification": false,
  });

  const checkStepsCompleted = (stepCompletion) => {
    let stepsCompleted = 0;
    for (let key in stepCompletion) {
      if (stepCompletion[key]) {
        stepsCompleted += 1;
      }
    }
    return stepsCompleted
  }
  let stepsCompleted = checkStepsCompleted(stepCompletion)
  let totalSteps = Object.keys(stepCompletion).length
  let completionPercent = (stepsCompleted*100)/totalSteps

  return (
    <div className="bg-slate-200 flex-col flex flex-1 px-36 gap-8 justify-center">
      <div className="flex flex-col gap-2 ">
        <div className="text-5xl font-bold">Welcome to Hospital Registration Portal</div>
        <div className="text-xl">Complete the following steps to register your hospital</div>
      </div>
      <div className="grid grid-cols-3 gap-8 grid-flow-row">
        {steps.map((step, index) => {
          return (
            <InfoCard key={index} title={step.title} stepNumber={index+1}/>
          )
        })}
      </div>
      <Card className="p-4">
        <CardHeader className="text-2xl gap-2">
          <CardTitle>Registration Progress</CardTitle>
          <Progress className='[&>*]:bg-blue-500' value={completionPercent}/>
          <CardDescription className="flex justify-between text-lg">
            <div>{stepsCompleted} of {totalSteps} completed</div>
            <div>{completionPercent}% complete</div>
          </CardDescription>
        </CardHeader>       
      </Card>
    </div>
  )
}

function HospitalSignUpPage() {
  return (
    <main className="flex flex-col min-h-screen justify-start">
      <NavBar />
      <HospitalSignUp />
    </main>
  )
}

export default HospitalSignUpPage