import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Download,
  Trash2,
  Key,
  Globe,
  Smartphone
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header Section */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Settings</h1>
              <p className="text-muted-foreground">Manage your account and application preferences</p>
            </div>

            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profile Settings
                </CardTitle>
                <CardDescription>Update your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex.johnson@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" defaultValue="Operations Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="UTC-8 (Pacific Time)" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose how and when you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Task Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminded about upcoming deadlines</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Receive weekly productivity summaries</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Risk Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified about project risks</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 h-5 w-5" />
                  Appearance
                </CardTitle>
                <CardDescription>Customize the look and feel of your workspace</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact View</Label>
                    <p className="text-sm text-muted-foreground">Use compact layout for lists and tables</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Sidebar Auto-collapse</Label>
                    <p className="text-sm text-muted-foreground">Automatically collapse sidebar on smaller screens</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Privacy & Security
                </CardTitle>
                <CardDescription>Manage your privacy settings and security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Badge variant="outline">Not Enabled</Badge>
                  </div>
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="mr-2 h-4 w-4" />
                    Enable Two-Factor Authentication
                  </Button>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Activity Tracking</Label>
                      <p className="text-sm text-muted-foreground">Track your activity for productivity insights</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Data Analytics</Label>
                      <p className="text-sm text-muted-foreground">Allow anonymized data collection for improvements</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integrations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Integrations
                </CardTitle>
                <CardDescription>Connect with your favorite tools and services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Google Calendar</h3>
                      <Badge className="bg-green-100 text-green-800">Connected</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Sync your calendar events and meetings</p>
                  </div>
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Slack</h3>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Receive notifications in Slack</p>
                  </div>
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">GitHub</h3>
                      <Badge className="bg-green-100 text-green-800">Connected</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Track development progress</p>
                  </div>
                  <div className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Notion</h3>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Import and sync documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5" />
                  Data Management
                </CardTitle>
                <CardDescription>Export, backup, or delete your data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Database className="mr-2 h-4 w-4" />
                    Backup Settings
                  </Button>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-red-600">Danger Zone</Label>
                    <p className="text-sm text-muted-foreground">These actions cannot be undone</p>
                  </div>
                  <Button variant="destructive" className="justify-start">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;