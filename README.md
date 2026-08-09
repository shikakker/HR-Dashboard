# HR Dashboard

HR operations **frontend prototype** for employee records, attendance, performance, analytics, settings, and employee-onboarding UI.

The current repository is a React / Vite dashboard using local mock data. Although `@supabase/supabase-js` is installed, the audited application path uses `src/data/mockData.ts` rather than a verified Supabase-backed employee database.

## Product areas

The main application provides tabs for:

```text
Employees
Attendance
Performance
Analytics
Settings
```

and an “Add New Employee” modal flow.

## Current data model

`src/data/mockData.ts` contains local arrays for:

```text
employees
attendanceRecords
performanceMetrics
```

Example records include sample employees such as Sarah Johnson and Michael Chen, with fictional company emails and Unsplash avatars.

Therefore employee counts, attendance state, performance ratings, and analytics derived from these values are **demo data**, not live HR records.

## Key capabilities

- Employee list
- Employee status / department presentation
- Add-employee form UI
- Attendance tracking views
- Performance metrics
- Analytics dashboard
- Recharts visualizations
- Settings area
- Responsive sidebar navigation
- Lottie animation dependency

## Supabase boundary

The package includes:

```text
@supabase/supabase-js
```

but the current main application imports data from local TypeScript files.

Do not describe this repository as a functioning Supabase HRIS unless active data reads / writes, schema, authentication, and Row Level Security are wired and validated.

A production Supabase architecture could use:

```text
employees
attendance_records
performance_reviews
teams / departments
user_roles
```

with role-based RLS for HR admins, managers, and employees.

## HR data sensitivity

A real HR system can contain sensitive personal and employment information, including:

- legal names;
- contact information;
- attendance;
- performance notes;
- compensation;
- leave / health-related data;
- disciplinary records.

A production implementation needs explicit authorization, audit history, retention policy, encryption, data export / deletion workflows, and strict separation between HR / manager / employee permissions.

## Performance-metric caveat

The current sample performance ratings are simple numeric values with short notes. A real performance-management product should avoid implying precision or fairness from a single score without a transparent review methodology, calibration, reviewer identity, and employee access / appeal process.

## Tech stack

- React 18
- TypeScript
- Vite 5
- Recharts
- Supabase JS dependency
- Lottie React
- Tailwind CSS
- Lucide React

## Local development

### Requirements

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/shikakker/HR-Dashboard.git
cd HR-Dashboard
npm install
```

Run:

```bash
npm run dev
```

Build / lint / preview:

```bash
npm run lint
npm run build
npm run preview
```

## StackBlitz

```text
https://stackblitz.com/~/github.com/shikakker/HR-Dashboard
```

## Current status

**Functional HR dashboard UX prototype using local sample data.** Navigation, employee / attendance / performance views, analytics, settings, and employee-form UI are represented. Persistent HR data, authentication, Supabase schema, authorization, and real workforce analytics are not established by the current code path.

## Product intent

The project explores how common people-operations workflows can be consolidated into one operational dashboard. The next meaningful engineering step is connecting the existing UI to a secure role-aware data model rather than adding more synthetic metrics.

## License

See repository files for licensing information and verify third-party avatar / media rights separately.