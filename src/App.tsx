import React, { useState } from "react";
import type { CVData, PersonalInfo, Experience } from "@/lib/type";
import { CVTemplate } from "./components/CVTemplate";
import { CVForm } from "./components/CVForm";

const App: React.FC = () => {
  // État principal du CV
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    experiences: [],
    education: [],
    skills: [],
  });

  // Fonction pour mettre à jour les informations personnelles
  const updatePersonalInfo = (personalInfo: PersonalInfo) => {
    setCvData((prev) => ({
      ...prev,
      personalInfo,
    }));
  };

  // Fonction pour mettre à jour les expériences
  const updateExperiences = (experiences: Experience[]) => {
    setCvData((prev) => ({
      ...prev,
      experiences,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Générateur de CV Professionnel
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Template CV (côté gauche) */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Aperçu du CV
            </h2>
            <CVTemplate cvData={cvData} />
          </div>

          {/* Formulaire (côté droit) */}
          <div className="order-1 lg:order-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Saisie des informations
            </h2>
            <CVForm
              cvData={cvData}
              onUpdatePersonalInfo={updatePersonalInfo}
              onUpdateExperiences={updateExperiences}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
