import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Target,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  Flag
} from "lucide-react";

const goals = [
  {
    id: "1",
    title: "Launch 3 Major Projects by Q4",
    description: "Successfully deliver and launch three major product initiatives before year end",
    category: "Project Delivery",
    priority: "High",
    targetDate: "Dec 31, 2024",
    progress: 67,
    currentValue: 2,
    targetValue: 3,
    unit: "projects",
    status: "On Track",
    milestones: [
      { name: "Mobile App Launch", completed: true, dueDate: "Nov 22" },
      { name: "Q4 Marketing Campaign", completed: false, dueDate: "Dec 15" },
      { name: "Website Redesign", completed: false, dueDate: "Jan 30" }
    ]
  },
  {
    id: "2", 
    title: "Improve Team Productivity by 25%",
    description: "Increase overall team productivity metrics through process optimization",
    category: "Team Performance",
    priority: "High",
    targetDate: "Dec 31, 2024",
    progress: 84,
    currentValue: 21,
    targetValue: 25,
    unit: "% increase",
    status: "Ahead",
    milestones: [
      { name: "Implement new workflows", completed: true, dueDate: "Sep 15" },
      { name: "Team training completion", completed: true, dueDate: "Oct 30" },
      { name: "Performance review", completed: false, dueDate: "Dec 1" }
    ]
  },
  {
    id: "3",
    title: "Reduce Project Risk Score to < 30%",
    description: "Minimize project risks through better planning and risk management",
    category: "Risk Management", 
    priority: "Medium",
    targetDate: "Jan 31, 2025",
    progress: 45,
    currentValue: 42,
    targetValue: 30,
    unit: "% risk score",
    status: "Behind",
    milestones: [
      { name: "Risk assessment framework", completed: true, dueDate: "Oct 15" },
      { name: "Team risk training", completed: false, dueDate: "Nov 30" },
      { name: "Implementation review", completed: false, dueDate: "Jan 15" }
    ]
  },
  {
    id: "4",
    title: "Complete 100 Tasks This Quarter",
    description: "Maintain high velocity by completing 100 high-quality tasks",
    category: "Personal Productivity",
    priority: "Medium", 
    targetDate: "Dec 31, 2024",
    progress: 78,
    currentValue: 78,
    targetValue: 100,
    unit: "tasks",
    status: "On Track",
    milestones: [
      { name: "50 tasks milestone", completed: true, dueDate: "Oct 31" },
      { name: "75 tasks milestone", completed: true, dueDate: "Nov 15" },
      { name: "100 tasks milestone", completed: false, dueDate: "Dec 31" }
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Ahead":
      return "bg-green-100 text-green-800";
    case "On Track":
      return "bg-blue-100 text-blue-800";
    case "Behind":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
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

const Goals = () => {
  const totalGoals = goals.length;
  const onTrackGoals = goals.filter(g => g.status === "On Track" || g.status === "Ahead").length;
  const avgProgress = Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length);

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
                <h1 className="text-3xl font-bold text-foreground">Goals</h1>
                <p className="text-muted-foreground">Track and manage your strategic objectives</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Goal
              </Button>
            </div>

            {/* Goals Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Goals</p>
                      <p className="text-2xl font-bold text-foreground">{totalGoals}</p>
                    </div>
                    <Target className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">On Track</p>
                      <p className="text-2xl font-bold text-foreground">{onTrackGoals}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Progress</p>
                      <p className="text-2xl font-bold text-foreground">{avgProgress}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">This Quarter</p>
                      <p className="text-2xl font-bold text-foreground">Q4 2024</p>
                    </div>
                    <Calendar className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Goals List */}
            <div className="space-y-6">
              {goals.map((goal) => (
                <Card key={goal.id} className={`border-l-4 ${getPriorityColor(goal.priority)}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        <CardDescription>{goal.description}</CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{goal.category}</Badge>
                        <Badge className={getStatusColor(goal.status)}>{goal.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Section */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {goal.currentValue} of {goal.targetValue} {goal.unit}
                      </div>
                    </div>

                    {/* Goal Details */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        Target: {goal.targetDate}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Flag className="mr-1 h-4 w-4" />
                        {goal.priority} Priority
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground">Milestones</h4>
                      <div className="space-y-2">
                        {goal.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-center justify-between p-2 rounded border">
                            <div className="flex items-center space-x-2">
                              <CheckCircle 
                                className={`h-4 w-4 ${
                                  milestone.completed ? 'text-green-600' : 'text-muted-foreground'
                                }`} 
                              />
                              <span className={`text-sm ${
                                milestone.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                              }`}>
                                {milestone.name}
                              </span>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="w-3 h-3 mr-1" />
                              {milestone.dueDate}
                            </div>
                          </div>
                        ))}
                      </div>
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

export default Goals;