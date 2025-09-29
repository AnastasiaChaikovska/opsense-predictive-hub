import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Clock,
  Users
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const productivityData = [
  { month: 'Jan', completed: 45, planned: 50 },
  { month: 'Feb', completed: 52, planned: 55 },
  { month: 'Mar', completed: 48, planned: 53 },
  { month: 'Apr', completed: 61, planned: 58 },
  { month: 'May', completed: 55, planned: 60 },
  { month: 'Jun', completed: 67, planned: 65 },
  { month: 'Jul', completed: 73, planned: 70 },
  { month: 'Aug', completed: 69, planned: 72 },
  { month: 'Sep', completed: 78, planned: 75 },
  { month: 'Oct', completed: 82, planned: 80 },
  { month: 'Nov', completed: 85, planned: 83 }
];

const projectDistribution = [
  { name: 'In Progress', value: 45, color: '#3b82f6' },
  { name: 'Planning', value: 25, color: '#f59e0b' },
  { name: 'Completed', value: 20, color: '#10b981' },
  { name: 'On Hold', value: 10, color: '#ef4444' }
];

const teamPerformance = [
  { name: 'Alex', tasks: 28, efficiency: 94 },
  { name: 'Sarah', tasks: 25, efficiency: 88 },
  { name: 'Mike', tasks: 22, efficiency: 91 },
  { name: 'Emma', tasks: 30, efficiency: 96 },
  { name: 'David', tasks: 26, efficiency: 85 },
];

const riskMetrics = [
  {
    project: "Website Redesign",
    riskLevel: "High",
    factors: ["Resource constraints", "Scope creep", "Technical debt"],
    probability: 75
  },
  {
    project: "Mobile App Launch", 
    riskLevel: "Low",
    factors: ["Clear requirements", "Experienced team"],
    probability: 25
  },
  {
    project: "Q4 Marketing Campaign",
    riskLevel: "Medium",
    factors: ["External dependencies", "Tight timeline"],
    probability: 45
  }
];

const Analytics = () => {
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
                <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
                <p className="text-muted-foreground">Insights and performance metrics for your operations</p>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Completion Rate</p>
                      <p className="text-2xl font-bold text-foreground">94.2%</p>
                      <div className="flex items-center text-sm text-green-600 mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +2.4% from last month
                      </div>
                    </div>
                    <Target className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Task Time</p>
                      <p className="text-2xl font-bold text-foreground">2.3 days</p>
                      <div className="flex items-center text-sm text-green-600 mt-1">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        -0.5 days improvement
                      </div>
                    </div>
                    <Clock className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Team Productivity</p>
                      <p className="text-2xl font-bold text-foreground">91%</p>
                      <div className="flex items-center text-sm text-green-600 mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +5% from last quarter
                      </div>
                    </div>
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Projects</p>
                      <p className="text-2xl font-bold text-foreground">12</p>
                      <div className="flex items-center text-sm text-blue-600 mt-1">
                        <Activity className="w-4 h-4 mr-1" />
                        3 launching this month
                      </div>
                    </div>
                    <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Productivity Trend */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Productivity Trend</CardTitle>
                  <CardDescription>Monthly task completion vs. planned targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={productivityData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="month" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="completed" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name="Completed"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="planned" 
                          stroke="hsl(var(--muted-foreground))" 
                          strokeDasharray="5 5"
                          name="Planned"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Project Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Status Distribution</CardTitle>
                  <CardDescription>Current project status breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          dataKey="value"
                          data={projectDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {projectDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Team Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Team Performance</CardTitle>
                  <CardDescription>Individual team member productivity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={teamPerformance}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="name" className="text-muted-foreground" />
                        <YAxis className="text-muted-foreground" />
                        <Tooltip />
                        <Bar dataKey="tasks" fill="hsl(var(--primary))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Risk Analysis</CardTitle>
                <CardDescription>Project risk assessment and mitigation opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskMetrics.map((risk, index) => (
                    <div key={index} className="p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-foreground">{risk.project}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            className={
                              risk.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                              risk.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }
                          >
                            {risk.riskLevel} Risk
                          </Badge>
                          <span className="text-sm text-muted-foreground">{risk.probability}% probability</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {risk.factors.map((factor, factorIndex) => (
                          <Badge key={factorIndex} variant="outline" className="text-xs">
                            {factor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;