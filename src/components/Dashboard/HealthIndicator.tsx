import { cn } from "@/lib/utils";

interface HealthIndicatorProps {
  health: "excellent" | "good" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const healthConfig = {
  excellent: { 
    color: "bg-health-excellent", 
    label: "Excellent",
    description: "All systems go"
  },
  good: { 
    color: "bg-health-good", 
    label: "Good",
    description: "Minor issues"
  },
  warning: { 
    color: "bg-health-warning", 
    label: "Warning",
    description: "Needs attention"
  },
  danger: { 
    color: "bg-health-danger", 
    label: "Critical",
    description: "Immediate action required"
  },
};

const sizeConfig = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

export default function HealthIndicator({ 
  health, 
  size = "md", 
  showLabel = false 
}: HealthIndicatorProps) {
  const config = healthConfig[health];
  
  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn(
          "rounded-full",
          config.color,
          sizeConfig[size]
        )}
      />
      {showLabel && (
        <span className="text-sm font-medium text-foreground">
          {config.label}
        </span>
      )}
    </div>
  );
}