import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Plus, 
  Zap,
  Clock,
  Mail,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Settings,
  Play,
  Pause
} from "lucide-react";

const automations = [
  {
    id: "1",
    name: "Daily Task Reminders",
    description: "Send email reminders for overdue tasks every morning at 9 AM",
    trigger: "Schedule",
    action: "Email Notification",
    status: "Active",
    lastRun: "Today, 9:00 AM",
    executions: 127,
    category: "Notifications"
  },
  {
    id: "2",
    name: "Project Health Alerts",
    description: "Notify team when project health score drops below 70%",
    trigger: "Condition",
    action: "Slack Message",
    status: "Active", 
    lastRun: "Yesterday, 3:45 PM",
    executions: 23,
    category: "Monitoring"
  },
  {
    id: "3",
    name: "Weekly Progress Reports",
    description: "Generate and email weekly progress summary every Friday",
    trigger: "Schedule",
    action: "Generate Report",
    status: "Active",
    lastRun: "Nov 15, 5:00 PM",
    executions: 8,
    category: "Reporting"
  },
  {
    id: "4",
    name: "New Task Auto-Assignment",
    description: "Automatically assign new tasks based on team workload",
    trigger: "Event",
    action: "Task Assignment",
    status: "Paused",
    lastRun: "Nov 10, 2:30 PM",
    executions: 45,
    category: "Task Management"
  },
  {
    id: "5",
    name: "Meeting Follow-up Creation",
    description: "Create follow-up tasks from calendar meetings automatically",
    trigger: "Calendar Event",
    action: "Create Tasks",
    status: "Active",
    lastRun: "Today, 11:30 AM",
    executions: 34,
    category: "Integration"
  },
  {
    id: "6",
    name: "Risk Score Calculator",
    description: "Update project risk scores based on milestone delays",
    trigger: "Data Change",
    action: "Calculate Score",
    status: "Active",
    lastRun: "Today, 1:15 PM",
    executions: 156,
    category: "Analytics"
  }
];

const templates = [
  {
    name: "Deadline Reminder",
    description: "Remind team members about upcoming deadlines",
    category: "Notifications",
    popular: true
  },
  {
    name: "Status Update Request", 
    description: "Automatically request project status updates",
    category: "Communication",
    popular: true
  },
  {
    name: "Resource Allocation Alert",
    description: "Alert when team members are overallocated",
    category: "Resource Management",
    popular: false
  },
  {
    name: "Budget Tracking Update",
    description: "Track and report on project budget consumption",
    category: "Financial",
    popular: false
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Paused":
      return "bg-yellow-100 text-yellow-800";
    case "Error":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getTriggerIcon = (trigger: string) => {
  switch (trigger) {
    case "Schedule":
      return <Clock className="h-4 w-4" />;
    case "Event":
      return <Zap className="h-4 w-4" />;
    case "Condition":
      return <AlertTriangle className="h-4 w-4" />;
    case "Calendar Event":
      return <Calendar className="h-4 w-4" />;
    case "Data Change":
      return <Settings className="h-4 w-4" />;
    default:
      return <Zap className="h-4 w-4" />;
  }
};

const Automation = () => {
  const activeAutomations = automations.filter(a => a.status === "Active").length;
  const totalExecutions = automations.reduce((sum, a) => sum + a.executions, 0);

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
                <h1 className="text-3xl font-bold text-foreground">Automation</h1>
                <p className="text-muted-foreground">Streamline your workflows with automated processes</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Automation
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Automations</p>
                      <p className="text-2xl font-bold text-foreground">{activeAutomations}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Executions</p>
                      <p className="text-2xl font-bold text-foreground">{totalExecutions}</p>
                    </div>
                    <Zap className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Time Saved</p>
                      <p className="text-2xl font-bold text-foreground">24h</p>
                    </div>
                    <Clock className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold text-foreground">99.2%</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Active Automations */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Automations</CardTitle>
                    <CardDescription>Your currently running automated workflows</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {automations.map((automation) => (
                      <div key={automation.id} className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-accent transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          {getTriggerIcon(automation.trigger)}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-foreground">{automation.name}</h3>
                            <div className="flex items-center space-x-2">
                              <Badge className={getStatusColor(automation.status)}>{automation.status}</Badge>
                              <Switch 
                                checked={automation.status === "Active"}
                              />
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{automation.description}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <span>Trigger: {automation.trigger}</span>
                              <span>•</span>
                              <span>Action: {automation.action}</span>
                            </div>
                            <span>{automation.executions} executions</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Last run: {automation.lastRun}
                          </div>
                        </div>
                        <div className="flex-shrink-0 flex items-center space-x-1">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            {automation.status === "Active" ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Automation Templates */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Automation Templates</CardTitle>
                    <CardDescription>Quick-start templates for common workflows</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {templates.map((template, index) => (
                      <div key={index} className="p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-foreground text-sm">{template.name}</h3>
                          {template.popular && (
                            <Badge variant="secondary" className="text-xs">Popular</Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{template.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common automation tasks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Setup Email Notifications
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Calendar Integration
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Risk Monitoring
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Workflow Builder
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Automation;