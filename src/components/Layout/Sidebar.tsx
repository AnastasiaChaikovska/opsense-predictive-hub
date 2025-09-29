import { 
  BarChart3, 
  Calendar, 
  FolderOpen, 
  Home, 
  List, 
  Settings,
  Target,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  { name: "Projects", href: "/projects", icon: FolderOpen, current: false },
  { name: "Tasks", href: "/tasks", icon: List, current: false },
  { name: "Calendar", href: "/calendar", icon: Calendar, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
  { name: "Goals", href: "/goals", icon: Target, current: false },
  { name: "Automation", href: "/automation", icon: Zap, current: false },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-gradient-surface border-r border-border">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                item.current
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:bg-accent hover:text-accent-foreground",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-smooth"
              )}
            >
              <item.icon
                className={cn(
                  item.current
                    ? "text-primary-foreground"
                    : "text-muted-foreground group-hover:text-accent-foreground",
                  "mr-3 h-5 w-5 transition-smooth"
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="flex-shrink-0 flex border-t border-border p-4">
        <nav className="w-full space-y-1">
          {bottomNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:bg-accent hover:text-accent-foreground group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-smooth"
            >
              <item.icon
                className="text-muted-foreground group-hover:text-accent-foreground mr-3 h-5 w-5 transition-smooth"
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}