# Dashboard Page Template

A complete, production-ready dashboard template for Next.js + Tailwind CSS.

---

## Dashboard Layout Structure

```
src/
├── app/
│   └── (dashboard)/
│       ├── layout.tsx        # Dashboard layout with sidebar
│       └── dashboard/
│           ├── page.tsx      # Main dashboard
│           ├── analytics/
│           │   └── page.tsx
│           ├── projects/
│           │   └── page.tsx
│           └── settings/
│               └── page.tsx
└── components/
    ├── dashboard/
    │   ├── stats-card.tsx
    │   ├── chart-card.tsx
    │   ├── activity-feed.tsx
    │   └── quick-actions.tsx
    └── layout/
        ├── sidebar.tsx
        └── dashboard-header.tsx
```

---

## Dashboard Layout

```tsx
// src/app/(dashboard)/layout.tsx
import { DashboardSidebar } from "@/components/layout/sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main content area */}
      <div className="lg:pl-72">
        <DashboardHeader />
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
```

---

## Dashboard Main Page

```tsx
// src/app/(dashboard)/dashboard/page.tsx
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { ChartCard } from "@/components/dashboard/chart-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentProjects } from "@/components/dashboard/recent-projects";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your projects.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Project
        </button>
      </div>

      {/* Stats grid */}
      <StatsGrid />

      {/* Charts and activity */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <RecentProjects />
        <QuickActions />
      </div>
    </div>
  );
}
```

---

## Stats Grid Component

```tsx
// components/dashboard/stats-grid.tsx
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Active Users",
    value: "2,350",
    change: "+180",
    changeType: "positive" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: "Pending Tasks",
    value: "12",
    change: "-3",
    changeType: "negative" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Uptime",
    value: "99.9%",
    change: "+0.1%",
    changeType: "positive" as const,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card rounded-2xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              {stat.icon}
            </div>
            <span
              className={cn(
                "inline-flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full",
                stat.changeType === "positive"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                  : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
              )}
            >
              {stat.changeType === "positive" ? (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {stat.change}
            </span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
```

---

## Chart Card Component

```tsx
// components/dashboard/chart-card.tsx
export function ChartCard() {
  // For actual charts, use recharts or chart.js
  const mockData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 59 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 81 },
    { month: "May", value: 56 },
    { month: "Jun", value: 55 },
    { month: "Jul", value: 90 },
  ];

  const maxValue = Math.max(...mockData.map((d) => d.value));

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue for 2024</p>
        </div>
        <select className="px-3 py-1.5 text-sm rounded-lg border border-border bg-background">
          <option>Last 7 months</option>
          <option>Last 12 months</option>
          <option>This year</option>
        </select>
      </div>

      {/* Simple bar chart visualization */}
      <div className="flex items-end gap-4 h-64">
        {mockData.map((item) => (
          <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg transition-all duration-500 hover:from-primary-400 hover:to-primary-300"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            />
            <span className="text-xs text-muted-foreground">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Activity Feed Component

```tsx
// components/dashboard/activity-feed.tsx
const activities = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "deployed",
    target: "api-service",
    time: "2 min ago",
    avatar: "SC",
    type: "deploy",
  },
  {
    id: 2,
    user: "Mike Johnson",
    action: "merged PR",
    target: "#234",
    time: "15 min ago",
    avatar: "MJ",
    type: "merge",
  },
  {
    id: 3,
    user: "Emily Davis",
    action: "commented on",
    target: "Issue #89",
    time: "1 hour ago",
    avatar: "ED",
    type: "comment",
  },
  {
    id: 4,
    user: "Alex Turner",
    action: "created",
    target: "new-feature",
    time: "2 hours ago",
    avatar: "AT",
    type: "create",
  },
  {
    id: 5,
    user: "Jordan Lee",
    action: "reviewed",
    target: "PR #567",
    time: "3 hours ago",
    avatar: "JL",
    type: "review",
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary hover:underline">View all</button>
      </div>

      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              {activity.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity.user}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>{" "}
                <span className="font-medium text-primary">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Recent Projects Component

```tsx
// components/dashboard/recent-projects.tsx
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Marketing Website",
    status: "In Progress",
    progress: 75,
    team: ["SC", "MJ", "ED"],
  },
  {
    name: "Mobile App",
    status: "Planning",
    progress: 25,
    team: ["AT", "JL"],
  },
  {
    name: "API Integration",
    status: "Completed",
    progress: 100,
    team: ["SC", "AT", "MJ", "ED"],
  },
  {
    name: "Dashboard Redesign",
    status: "In Progress",
    progress: 60,
    team: ["JL", "ED"],
  },
];

export function RecentProjects() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Recent Projects</h3>
        <button className="text-sm text-primary hover:underline">View all</button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-accent/50 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">{project.name}</h4>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full",
                  project.status === "Completed"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                    : project.status === "In Progress"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                )}
              >
                {project.status}
              </span>
            </div>

            <div className="flex items-center justify-between">
              {/* Progress bar */}
              <div className="flex-1 mr-4">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Team avatars */}
              <div className="flex -space-x-2">
                {project.team.slice(0, 3).map((member, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xs font-medium border-2 border-card"
                  >
                    {member}
                  </div>
                ))}
                {project.team.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium border-2 border-card">
                    +{project.team.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Quick Actions Component

```tsx
// components/dashboard/quick-actions.tsx
const actions = [
  {
    label: "Create Project",
    description: "Start a new project from scratch",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
    color: "from-primary-500 to-primary-600",
  },
  {
    label: "Invite Team",
    description: "Add members to your workspace",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    color: "from-violet-500 to-violet-600",
  },
  {
    label: "View Reports",
    description: "See detailed analytics",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-emerald-500 to-emerald-600",
  },
  {
    label: "Get Help",
    description: "Access documentation & support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-amber-500 to-amber-600",
  },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold text-foreground mb-6">Quick Actions</h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            className="group p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-accent/50 transition-all text-left"
          >
            <div
              className={cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-3 transition-transform group-hover:scale-110",
                action.color
              )}
            >
              {action.icon}
            </div>
            <h4 className="font-medium text-foreground mb-1">{action.label}</h4>
            <p className="text-xs text-muted-foreground">{action.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
```

---

## Usage

1. Create the dashboard layout in `src/app/(dashboard)/layout.tsx`
2. Add the sidebar and header components
3. Create individual dashboard page components
4. Compose them together in `page.tsx`
5. Add real data fetching with Server Components or client-side hooks
6. Integrate a charting library like recharts for actual charts
