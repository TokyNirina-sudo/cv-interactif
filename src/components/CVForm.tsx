import React from "react";

import { PersonalInfoForm } from "./PersonalInfoForm";
import { ExperienceSection } from "./ExperienceSection";
import type { CVData, Experience, PersonalInfo } from "@/lib/type";

interface CVFormProps {
  cvData: CVData;
  onUpdatePersonalInfo: (personalInfo: PersonalInfo) => void;
  onUpdateExperiences: (experiences: Experience[]) => void;
}

export const CVForm: React.FC<CVFormProps> = ({
  cvData,
  onUpdatePersonalInfo,
  onUpdateExperiences,
}) => {
  return (
    <div className="space-y-4">
      <PersonalInfoForm
        personalInfo={cvData.personalInfo}
        onUpdate={onUpdatePersonalInfo}
      />
      <ExperienceSection
        experiences={cvData.experiences}
        onUpdate={onUpdateExperiences}
      />
    </div>
  );
};
