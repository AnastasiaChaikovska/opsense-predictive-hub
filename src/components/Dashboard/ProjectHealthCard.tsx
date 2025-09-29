import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import HealthIndicator from "./HealthIndicator";
import { Calendar, Users, AlertTriangle } from "lucide-react";

interface Project {
  id: string;
  name: string;
  health: "excellent" | "good" | "warning" | "danger";
  progress: number;
  dueDate: string;
  teamSize: number;
  riskFactors: number;
}

interface ProjectHealthCardProps {
  project: Project;
}

export default function ProjectHealthCard({ project }: ProjectHealthCardProps) {
  return (
    <Card className="bg-gradient-card shadow-card transition-smooth hover:shadow-elevated">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">{project.name}</CardTitle>
          <HealthIndicator health={project.health} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{project.dueDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{project.teamSize}</span>
          </div>
          <div className="flex items-center space-x-1">
            <AlertTriangle className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">{project.riskFactors}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}