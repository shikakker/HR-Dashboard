# Completion plan

1. Define the project as the implemented React/Vite HR dashboard prototype with employee list/grid, attendance, performance metrics, analytics, add-employee form and settings. Do not claim HRIS/payroll/recruiting integrations unless actual backends exist.
2. Treat the tracked root `.env` as a P0 security issue: inspect whether it contains any real credentials/URLs, rotate secrets if necessary, remove secrets from Git history where appropriate and replace tracked runtime configuration with `.env.example` plus ignored local env files.
3. Trace the data layer and distinguish fixtures/local state from persisted employee records. Every headcount, attendance and performance metric in a portfolio demo must be clearly synthetic unless sourced from a documented backend.
4. Formalize employee/attendance/performance types and validation. Employee identifiers, dates, departments, status and metric ranges should not be inferred independently across UI components.
5. Protect personally identifiable HR data in any future backend: authenticated role-based access, least-privilege field exposure, no sensitive employee data in analytics/client logs and explicit retention/deletion rules.
6. Make `AddEmployeeForm` truthful: if it only updates local state, label it as demo behavior; if persistence is added, validate server-side, handle duplicates/errors and record who created/changed employee records.
7. Audit analytics semantics: define denominators/time windows for growth, department distribution, attendance and performance cards. Do not present decorative numbers as measured business outcomes.
8. Improve accessibility/responsiveness across sidebar, charts, modal, employee cards and forms: keyboard/focus handling, labels/errors, table/list alternatives for charts, color-independent status and mobile navigation.
9. Add tests for employee validation, attendance calculations and analytics transforms plus component tests for add-employee/modal/settings flows. CI runs lint/typecheck/tests and Vite production build with no real secrets.
10. Rewrite README as verified HR dashboard prototype documentation: implemented surfaces, mock/live data boundary, security/privacy model, setup, screenshots and explicit capabilities still required for production HR use.
