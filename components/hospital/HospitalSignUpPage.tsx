"use client"

import { Button } from "../ui/button";
import { useState } from "react";
import BasicInfoComponent from "./BasicInfoComponent";

const steps = [
  { id: 0, title: "Basic Info", description: "Interesting description" },
  { id: 1, title: "Media Upload", description: "Interesting description" },
  { id: 2, title: "Facility Details", description: "Interesting description" },
  { id: 3, title: "Legal Documents", description: "Interesting description" },
  { id: 4, title: "Verification", description: "Interesting description" },
];

function StepButton({ title, description, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="focus:border-emerald-400 rounded-md flex text-start py-2 px-8 gap-4 border-2 h-18 text-lg border-gray-300"
    >
      <div className="bg-gray-500 rounded-full aspect-square h-full"></div>
      <div className="flex-1">
        <div className="font-bold">{title}</div>
        <div className="text-base text-neutral-600">{description}</div>
      </div>
    </button>
  );
}

// Components for each step
function BasicInfo() {
  return <div>Basic Info Component</div>;
}

function MediaUpload() {
  return <div>Media Upload Component</div>;
}

function FacilityDetails() {
  return <div>Facility Details Component</div>;
}

function LegalDocuments() {
  return <div>Legal Documents Component</div>;
}

function Verification() {
  return <div>Verification Component</div>;
}

// Main Component
export default function HospitalSignUpPage2() {
  const [selectedStep, setSelectedStep] = useState(0);

  const renderForm = () => {
    switch (selectedStep) {
      case 0:
        return <BasicInfoComponent />;
      case 1:
        return <MediaUpload />;
      case 2:
        return <FacilityDetails />;
      case 3:
        return <LegalDocuments />;
      case 4:
        return <Verification />;
      default:
        return <div>Select a step to continue</div>;
    }
  };

  return (
    <main className="min-h-screen flex">
      <div className="h-screen sticky top-0 flex flex-col bg-white justify-center items-center w-1/3 p-4">
        <section className="flex flex-col flex-1 bg-zinc-100 gap-8 justify-center items-center rounded-md px-20">
          <div className="flex flex-col justify-center gap-4 items-center text-center">
            <div className="text-4xl font-bold">
              Welcome to Hospital Registration Portal
            </div>
            <div className="text-lg text-neutral-700">
              Complete the steps below to register your hospital
            </div>
          </div>
          <div className="flex flex-col self-stretch gap-4">
            {steps.map((step) => (
              <StepButton
                title={step.title}
                description={step.description}
                key={step.id}
                handleClick={() => setSelectedStep(step.id)}
              />
            ))}
          </div>
          <Button className="w-2/6 text-base h-10">Submit</Button>
        </section>
      </div>

      <section className="bg-white flex-1 border-red-200 rounded-md m-4 border-2">
        {renderForm()}
      </section>
    </main>
  );
}
