import NavBar from "../NavBar"
import { Card } from "../ui/card"
import Link from "next/link"

// basic info and other stuff import
function InfoCard({ title, stepNumber }) {
  return (
    <Link href="/">
      <Card className="flex flex-col gap-4 p-6 w-full h-52 justify-center">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">{title}</div>
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
  return (
    <div className="bg-slate-200 flex-col flex flex-1 p-16 gap-8 justify-center">
      <div className="flex flex-col gap-2 ">
        <div className="text-5xl font-bold">Welcome to Hospital Registration Portal</div>
        <div className="text-xl">Complete the following steps to register your hospital</div>
      </div>
      <div className="grid grid-cols-3 gap-12 grid-flow-row">
        {steps.map((step, index) => {
          return (
            <InfoCard key={index} title={step.title} stepNumber={index+1}/>
          )
        })}
      </div>
      <div>
        Progress Bar
      </div>
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