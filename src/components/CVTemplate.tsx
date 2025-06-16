import React from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import type { CVData } from "@/lib/type";

interface CVTemplateProps {
  cvData: CVData;
}

export const CVTemplate: React.FC<CVTemplateProps> = ({ cvData }) => {
  const { personalInfo, experiences, education, skills } = cvData;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 h-full">
      {/* En-tête */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName || "Votre Nom"}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </div>
          )}
        </div>
      </div>

      {/* Résumé */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Profil professionnel
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Expériences */}
      {experiences.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Expériences professionnelles
          </h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formation */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Formation
          </h2>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900">{edu.degree}</p>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Compétences */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Compétences
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
