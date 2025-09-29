import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Calendar as CalendarIcon, 
  Clock,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const events = [
  {
    id: "1",
    title: "Project Review Meeting",
    time: "9:00 AM - 10:00 AM",
    date: "Today",
    type: "Meeting",
    location: "Conference Room A",
    attendees: 5,
    project: "Mobile App Launch"
  },
  {
    id: "2",
    title: "Marketing Campaign Deadline",
    time: "11:59 PM",
    date: "Today",
    type: "Deadline",
    project: "Q4 Marketing Campaign"
  },
  {
    id: "3",
    title: "User Testing Session",
    time: "2:00 PM - 4:00 PM",
    date: "Tomorrow",
    type: "Research",
    location: "UX Lab",
    attendees: 3,
    project: "Website Redesign"
  },
  {
    id: "4",
    title: "Sprint Planning",
    time: "10:00 AM - 12:00 PM",
    date: "Nov 25",
    type: "Planning",
    location: "Virtual",
    attendees: 8,
    project: "Mobile App Launch"
  },
  {
    id: "5",
    title: "Client Presentation",
    time: "3:00 PM - 4:00 PM",
    date: "Nov 26",
    type: "Presentation",
    location: "Client Office",
    attendees: 6,
    project: "Website Redesign"
  }
];

const upcomingDeadlines = [
  {
    task: "Complete API documentation",
    project: "Mobile App Launch",
    dueDate: "Nov 22",
    priority: "High"
  },
  {
    task: "Finalize landing page design",
    project: "Website Redesign", 
    dueDate: "Nov 25",
    priority: "Medium"
  },
  {
    task: "Setup email templates",
    project: "Q4 Marketing Campaign",
    dueDate: "Nov 28",
    priority: "Medium"
  }
];

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "Meeting":
      return "bg-blue-100 text-blue-800";
    case "Deadline":
      return "bg-red-100 text-red-800";
    case "Research":
      return "bg-purple-100 text-purple-800";
    case "Planning":
      return "bg-green-100 text-green-800";
    case "Presentation":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Calendar = () => {
  const todayEvents = events.filter(event => event.date === "Today");
  const upcomingEvents = events.filter(event => event.date !== "Today");

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
                <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
                <p className="text-muted-foreground">Manage your schedule and project deadlines</p>
              </div>
              <Button className="bg-gradient-primary">
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Button>
            </div>

            {/* Calendar Navigation */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">November 2024</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Today
                    </Button>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {/* Calendar Header */}
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 font-medium text-muted-foreground">
                      {day}
                    </div>
                  ))}
                  
                  {/* Calendar Days (simplified grid) */}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                    <div
                      key={day}
                      className={`p-2 h-10 rounded-md cursor-pointer hover:bg-accent transition-colors ${
                        day === 22 ? 'bg-primary text-primary-foreground' : ''
                      } ${
                        [20, 25, 26, 28].includes(day) ? 'bg-accent' : ''
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Events */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Today's Schedule</CardTitle>
                    <CardDescription>Your events and meetings for today</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {todayEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                        <div className="flex-shrink-0 w-12 text-center">
                          <div className="text-sm font-medium text-foreground">
                            {event.time.split(' - ')[0]}
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-foreground">{event.title}</h3>
                            <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            {event.location && (
                              <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {event.location}
                              </div>
                            )}
                            {event.attendees && (
                              <div className="flex items-center">
                                <Users className="w-3 h-3 mr-1" />
                                {event.attendees} attendees
                              </div>
                            )}
                            {event.project && (
                              <Badge variant="outline" className="text-xs">
                                {event.project}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your schedule for the next few days</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                        <div className="flex-shrink-0 w-16 text-center">
                          <div className="text-xs text-muted-foreground">{event.date}</div>
                          <div className="text-sm font-medium text-foreground">
                            {event.time.split(' - ')[0]}
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-foreground">{event.title}</h3>
                            <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            {event.location && (
                              <div className="flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {event.location}
                              </div>
                            )}
                            {event.attendees && (
                              <div className="flex items-center">
                                <Users className="w-3 h-3 mr-1" />
                                {event.attendees} attendees
                              </div>
                            )}
                            {event.project && (
                              <Badge variant="outline" className="text-xs">
                                {event.project}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Deadlines */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Important project deadlines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="p-3 rounded-lg border">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={deadline.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}>
                            {deadline.priority}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{deadline.dueDate}</span>
                        </div>
                        <h3 className="font-medium text-foreground mb-1">{deadline.task}</h3>
                        <Badge variant="outline" className="text-xs">
                          {deadline.project}
                        </Badge>
                      </div>
                    ))}
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

export default Calendar;