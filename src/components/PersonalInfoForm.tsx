import type { PersonalInfo } from "@/lib/type";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onUpdate: (personalInfo: PersonalInfo) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  onUpdate,
}) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    const updatedInfo = { ...personalInfo, [field]: value };
    onUpdate(updatedInfo);
  };
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">Informations personnelles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="fullName">Nom complet</Label>
          <Input
            id="fullName"
            value={personalInfo.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="jean.dupont@email.com"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={personalInfo.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="01 23 45 67 89"
          />
        </div>
        <div>
          <Label htmlFor="location">Localisation</Label>
          <Input
            id="location"
            value={personalInfo.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Paris, France"
          />
        </div>
        <div>
          <Label htmlFor="summary">Résumé professionnel</Label>
          <Textarea
            id="summary"
            value={personalInfo.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            placeholder="Décrivez brièvement votre profil professionnel..."
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
};
