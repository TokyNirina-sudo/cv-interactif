import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Minus } from "lucide-react";
import type { Experience } from "@/lib/type";

interface ExperienceItemProps {
  experience: Experience;
  onUpdate: (experience: Experience) => void;
  onDelete: (id: string) => void;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  onUpdate,
  onDelete,
}) => {
  const handleChange = (field: keyof Omit<Experience, "id">, value: string) => {
    onUpdate({
      ...experience,
      [field]: value,
    });
  };

  return (
    <Card className="mb-3">
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-medium">Expérience</h4>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(experience.id)}
            className="text-red-600 hover:text-red-700"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <Label>Entreprise</Label>
            <Input
              value={experience.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Nom de l'entreprise"
            />
          </div>
          <div>
            <Label>Poste</Label>
            <Input
              value={experience.position}
              onChange={(e) => handleChange("position", e.target.value)}
              placeholder="Intitulé du poste"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <Label>Date de début</Label>
            <Input
              value={experience.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              placeholder="01/2020"
            />
          </div>
          <div>
            <Label>Date de fin</Label>
            <Input
              value={experience.endDate}
              onChange={(e) => handleChange("endDate", e.target.value)}
              placeholder="12/2022 ou Actuel"
            />
          </div>
        </div>
        <div>
          <Label>Description</Label>
          <Textarea
            value={experience.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Décrivez vos missions et réalisations..."
            rows={2}
          />
        </div>
      </CardContent>
    </Card>
  );
};
