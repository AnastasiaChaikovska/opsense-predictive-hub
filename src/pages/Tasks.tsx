import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Plus, 
  Calendar, 
  Flag,
  Clock,
  User
} from "lucide-react";

const tasks = [
  {
    id: "1",
    title: "Design new landing page mockups",
    description: "Create high-fidelity mockups for the new product landing page",
    project: "Website Redesign",
    priority: "High",
    dueDate: "Nov 25, 2024",
    assignee: "Sarah",
    status: "In Progress",
    completed: false
  },
  {
    id: "2",
    title: "Implement user authentication",
    description: "Add secure login and registration functionality",
    project: "Mobile App Launch",
    priority: "High",
    dueDate: "Nov 20, 2024",
    assignee: "Alex",
    status: "In Progress",
    completed: false
  },
  {
    id: "3",
    title: "Write API documentation",
    description: "Document all API endpoints for the development team",
    project: "Mobile App Launch",
    priority: "Medium",
    dueDate: "Nov 22, 2024",
    assignee: "David",
    status: "To Do",
    completed: false
  },
  {
    id: "4",
    title: "Setup email campaign templates",
    description: "Create responsive email templates for the marketing campaign",
    project: "Q4 Marketing Campaign",
    priority: "Medium",
    dueDate: "Nov 28, 2024",
    assignee: "Emma",
    status: "To Do",
    completed: false
  },
  {
    id: "5",
    title: "Conduct user testing sessions",
    description: "Run usability tests with 5 target users",
    project: "Website Redesign",
    priority: "High",
    dueDate: "Dec 1, 2024",
    assignee: "Mike",
    status: "To Do",
    completed: false
  },
  {
    id: "6",
    title: "Optimize database queries",
    description: "Improve performance of user dashboard queries",
    project: "Mobile App Launch",
    priority: "Low",
    dueDate: "Nov 30, 2024",
    assignee: "Chris",
    status: "Completed",
    completed: true
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "text-red-600 bg-red-50 border-red-200";
    case "Medium":
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    case "Low":
      return "text-green-600 bg-green-50 border-green-200";
    default:
      return "text-gray-600 bg-gray-50 border-gray-200";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "To Do":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Tasks = () => {
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

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
                <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
                <p className="text-muted-foreground">Manage your tasks and track progress</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Task
              </Button>
            </div>

            {/* Task Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">{pendingTasks.length}</div>
                  <p className="text-muted-foreground text-sm">Active Tasks</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">{completedTasks.length}</div>
                  <p className="text-muted-foreground text-sm">Completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">{tasks.filter(t => t.priority === 'High' && !t.completed).length}</div>
                  <p className="text-muted-foreground text-sm">High Priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">{tasks.filter(t => new Date(t.dueDate) < new Date(Date.now() + 7*24*60*60*1000) && !t.completed).length}</div>
                  <p className="text-muted-foreground text-sm">Due This Week</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Tasks */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Active Tasks</h2>
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <Card key={task.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox className="mt-1" />
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-foreground">{task.title}</h3>
                            <div className="flex items-center space-x-2">
                              <Badge className={getPriorityColor(task.priority)}>
                                <Flag className="w-3 h-3 mr-1" />
                                {task.priority}
                              </Badge>
                              <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{task.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {task.dueDate}
                            </div>
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {task.assignee}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {task.project}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Completed Tasks */}
            {completedTasks.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Completed Tasks</h2>
                <div className="space-y-3">
                  {completedTasks.map((task) => (
                    <Card key={task.id} className="opacity-75">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox checked className="mt-1" />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-muted-foreground line-through">{task.title}</h3>
                              <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{task.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                {task.assignee}
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {task.project}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tasks;