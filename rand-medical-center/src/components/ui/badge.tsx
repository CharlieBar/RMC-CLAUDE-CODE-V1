import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "outline";
  size?: "sm" | "md" | "lg";
}

function Badge({
  className,
  variant = "default",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full transition-colors",
        // Variants
        {
          "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300":
            variant === "default",
          "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400":
            variant === "primary",
          "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200":
            variant === "secondary",
          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":
            variant === "success",
          "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":
            variant === "warning",
          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400":
            variant === "destructive",
          "border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300":
            variant === "outline",
        },
        // Sizes
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
          "px-4 py-1.5 text-base": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}

// Status Badge with animated dot
interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: "online" | "offline" | "busy" | "available";
}

function StatusBadge({ status, className, ...props }: StatusBadgeProps) {
  const statusConfig = {
    online: { color: "bg-green-500", text: "Available" },
    offline: { color: "bg-slate-400", text: "Offline" },
    busy: { color: "bg-amber-500", text: "Busy" },
    available: { color: "bg-green-500", text: "Same-Day Available" },
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            statusConfig[status].color
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2.5 w-2.5",
            statusConfig[status].color
          )}
        />
      </span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {statusConfig[status].text}
      </span>
    </span>
  );
}

// Trust Badge for accreditations
interface TrustBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label: string;
}

function TrustBadge({ icon, label, className, ...props }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm",
        "dark:bg-slate-800 dark:border-slate-700",
        className
      )}
      {...props}
    >
      {icon && <span className="text-teal-500">{icon}</span>}
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </span>
    </div>
  );
}

export { Badge, StatusBadge, TrustBadge };
