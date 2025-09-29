import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flag } from "lucide-react";

interface Task {
  id: string;
  title: string;
  project: string;
  priority: "high" | "medium" | "low";
  dueTime: string;
  estimatedHours: number;
}

const priorityColors = {
  high: "bg-health-danger text-white",
  medium: "bg-health-warning text-white",
  low: "bg-health-good text-white",
};

const tasks: Task[] = [
  {
    id: "1",
    title: "Review marketing campaign proposal",
    project: "Q4 Launch",
    priority: "high",
    dueTime: "2:00 PM",
    estimatedHours: 2,
  },
  {
    id: "2",
    title: "Update project timeline",
    project: "Website Redesign",
    priority: "medium",
    dueTime: "4:30 PM",
    estimatedHours: 1,
  },
  {
    id: "3",
    title: "Prepare stakeholder report",
    project: "Mobile App",
    priority: "high",
    dueTime: "Tomorrow",
    estimatedHours: 3,
  },
  {
    id: "4",
    title: "Team sync meeting prep",
    project: "Operations",
    priority: "low",
    dueTime: "Tomorrow",
    estimatedHours: 0.5,
  },
];

export default function UpcomingTasks() {
  return (
    <Card className="bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-3 bg-background rounded-lg border border-border"
          >
            <div className="flex-1 space-y-1">
              <h4 className="text-sm font-medium">{task.title}</h4>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{task.project}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{task.estimatedHours}h</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={priorityColors[task.priority]}>
                <Flag className="h-3 w-3 mr-1" />
                {task.priority}
              </Badge>
              <span className="text-xs text-muted-foreground">{task.dueTime}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}