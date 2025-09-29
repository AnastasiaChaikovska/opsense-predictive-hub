import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Calendar, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

const projects = [
  {
    id: "1",
    name: "Q4 Marketing Campaign",
    status: "In Progress",
    progress: 75,
    dueDate: "Dec 15, 2024",
    team: ["Alex", "Sarah", "Mike", "Emma", "David"],
    priority: "High",
    description: "Launch comprehensive marketing campaign for Q4 product releases",
    tasksCompleted: 23,
    totalTasks: 31
  },
  {
    id: "2", 
    name: "Website Redesign",
    status: "Behind Schedule",
    progress: 45,
    dueDate: "Jan 30, 2025",
    team: ["Sarah", "Mike", "Lisa"],
    priority: "Medium",
    description: "Complete overhaul of company website with new branding",
    tasksCompleted: 18,
    totalTasks: 40
  },
  {
    id: "3",
    name: "Mobile App Launch",
    status: "On Track",
    progress: 90,
    dueDate: "Nov 22, 2024",
    team: ["Alex", "David", "Emma", "Chris", "Anna", "Tom", "Lisa", "Mark"],
    priority: "High",
    description: "Launch new mobile application across iOS and Android platforms",
    tasksCompleted: 36,
    totalTasks: 40
  },
  {
    id: "4",
    name: "Customer Support Portal",
    status: "Planning",
    progress: 15,
    dueDate: "Mar 15, 2025",
    team: ["Emma", "Chris"],
    priority: "Low",
    description: "Build comprehensive self-service customer support platform",
    tasksCompleted: 3,
    totalTasks: 22
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "On Track":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />On Track</Badge>;
    case "Behind Schedule":
      return <Badge variant="destructive"><AlertTriangle className="w-3 h-3 mr-1" />Behind Schedule</Badge>;
    case "In Progress":
      return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />In Progress</Badge>;
    case "Planning":
      return <Badge variant="outline">Planning</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "border-l-red-500";
    case "Medium":
      return "border-l-yellow-500";
    case "Low":
      return "border-l-green-500";
    default:
      return "border-l-gray-300";
  }
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Projects</h1>
                <p className="text-muted-foreground">Manage and track all your active projects</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className={`hover:shadow-lg transition-shadow border-l-4 ${getPriorityColor(project.priority)}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <CardDescription className="text-sm">{project.description}</CardDescription>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Section */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {project.tasksCompleted} of {project.totalTasks} tasks completed
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        Due {project.dueDate}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        {project.team.length} members
                      </div>
                    </div>

                    {/* Team Avatars */}
                    <div className="flex items-center space-x-1">
                      {project.team.slice(0, 5).map((member, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-xs text-white font-medium"
                        >
                          {member.charAt(0)}
                        </div>
                      ))}
                      {project.team.length > 5 && (
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground">
                          +{project.team.length - 5}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;