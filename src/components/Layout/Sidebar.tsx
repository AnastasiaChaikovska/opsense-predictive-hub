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
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Tasks", href: "/tasks", icon: List },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Goals", href: "/goals", icon: Target },
  { name: "Automation", href: "/automation", icon: Zap },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="flex h-full w-64 flex-col bg-gradient-surface border-r border-border">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-smooth"
                )}
              >
                <item.icon
                  className={cn(
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-accent-foreground",
                    "mr-3 h-5 w-5 transition-smooth"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="flex-shrink-0 flex border-t border-border p-4">
        <nav className="w-full space-y-1">
          {bottomNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-smooth"
                )}
              >
                <item.icon
                  className={cn(
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-accent-foreground",
                    "mr-3 h-5 w-5 transition-smooth"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}