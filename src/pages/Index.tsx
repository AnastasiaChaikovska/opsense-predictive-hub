import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import MetricCard from "@/components/Dashboard/MetricCard";
import ProjectHealthCard from "@/components/Dashboard/ProjectHealthCard";
import UpcomingTasks from "@/components/Dashboard/UpcomingTasks";
import ProductivityChart from "@/components/Dashboard/ProductivityChart";
import { 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  Plus 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "1",
    name: "Q4 Marketing Campaign",
    health: "good" as const,
    progress: 75,
    dueDate: "Dec 15",
    teamSize: 5,
    riskFactors: 2,
  },
  {
    id: "2",
    name: "Website Redesign",
    health: "warning" as const,
    progress: 45,
    dueDate: "Jan 30",
    teamSize: 3,
    riskFactors: 4,
  },
  {
    id: "3",
    name: "Mobile App Launch",
    health: "excellent" as const,
    progress: 90,
    dueDate: "Nov 22",
    teamSize: 8,
    riskFactors: 1,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Good morning, Alex</h1>
                <p className="text-muted-foreground">Here's what's happening with your operations today.</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                title="Active Projects"
                value={12}
                icon={CheckCircle}
                trend={{ value: 15, label: "from last month", isPositive: true }}
              />
              <MetricCard
                title="Tasks Due Today"
                value={8}
                icon={Clock}
                trend={{ value: -20, label: "from yesterday", isPositive: true }}
              />
              <MetricCard
                title="Completion Rate"
                value="94%"
                icon={TrendingUp}
                trend={{ value: 8, label: "from last week", isPositive: true }}
              />
              <MetricCard
                title="Risk Alerts"
                value={3}
                icon={AlertTriangle}
                trend={{ value: -33, label: "from last week", isPositive: true }}
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Project Health Cards */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Project Health Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                      <ProjectHealthCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
                
                <ProductivityChart />
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                <UpcomingTasks />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
