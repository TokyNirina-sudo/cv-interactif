import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Experience } from "@/lib/type";
import { ExperienceItem } from "./ExperienceItem";

interface ExperienceSectionProps {
  experiences: Experience[];
  onUpdate: (experiences: Experience[]) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  onUpdate,
}) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    onUpdate([...experiences, newExperience]);
  };

  const updateExperience = (updatedExperience: Experience) => {
    onUpdate(
      experiences.map((exp) =>
        exp.id === updatedExperience.id ? updatedExperience : exp
      )
    );
  };

  const deleteExperience = (id: string) => {
    onUpdate(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          Expériences professionnelles
          <Button onClick={addExperience} size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Ajouter
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {experiences.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            Aucune expérience ajoutée
          </p>
        ) : (
          experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              onUpdate={updateExperience}
              onDelete={deleteExperience}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};
