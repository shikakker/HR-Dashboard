# HR Dashboard — Modernization Roadmap

The current application is a substantial HR operations frontend prototype using local mock employee, attendance and performance data. Supabase is installed but not verified as the active data layer.

## 10 tasks
1. Define typed employee, attendance, review, department and role domain models independent of mock fixtures.
2. Add a data-adapter boundary before replacing mock data with Supabase or another backend.
3. If Supabase is introduced, implement authentication and role-based Row Level Security before storing HR data.
4. Add audit history for changes to attendance, employment status and performance records.
5. Add explicit loading/empty/error states for every dashboard data surface.
6. Replace simplistic performance-score presentation with transparent review context and reviewer/date metadata.
7. Add form validation and duplicate/identity handling to employee onboarding.
8. Add tests for filters, analytics calculations, onboarding and permission-sensitive UI states.
9. Add CI/build/accessibility validation and responsive checks for dense tables/charts.
10. Package as a strong enterprise HR product-design case while clearly separating implemented frontend UX from future HRIS infrastructure.

## Portfolio value
Strong enterprise Product Designer case; potentially strong Product Engineer case after a secure real data/auth layer is implemented.