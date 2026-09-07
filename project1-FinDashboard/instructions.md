# FinTrack — Production-Quality React Financial Analytics Dashboard

Build a complete, polished financial analytics web application called **FinTrack**.

This is a portfolio project intended to demonstrate professional-level **React frontend, UI/UX, component architecture, responsive design, state management, data visualization, accessibility, and interaction design**.

Do NOT create a generic admin dashboard. The application should feel like a real modern fintech product.

---

## 1. Technology

Use:

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Zustand for client-side application state
* TanStack Query where asynchronous/server-style data fetching is appropriate
* React Hook Form + Zod for forms and validation
* Recharts for data visualization
* Lucide React for icons
* Framer Motion for purposeful animations

Use clean, modular TypeScript.

Do not introduce unnecessary libraries.

---

# 2. Visual Direction

Design FinTrack as a sophisticated **dark-first financial workspace**.

Visual characteristics:

* Deep navy/near-black background
* Slightly lighter dark cards
* Subtle borders
* Moderate corner radius
* Strong visual hierarchy
* Clean modern typography
* Purple as the primary accent
* Green for positive financial movement
* Red/pink for negative movement
* Amber/orange for warnings
* Blue for informational states

Avoid:

* Generic Bootstrap appearance
* Excessive gradients
* Excessive glassmorphism
* Huge typography
* Excessive rounded "bubble" components
* Cartoonish illustrations
* AI-generated-looking dashboard layouts
* Excessive shadows
* Clutter

The interface should feel closer to a serious SaaS/fintech product such as Linear, Stripe, modern banking dashboards, or professional analytics software.

---

# 3. Application Structure

Use this architecture:

src/

├── assets/
├── components/
│   ├── ui/
│   ├── charts/
│   ├── tables/
│   └── feedback/
│
├── layouts/
│   ├── DashboardLayout.tsx
│   ├── Sidebar.tsx
│   └── Topbar.tsx
│
├── features/
│   ├── overview/
│   ├── transactions/
│   ├── budget/
│   ├── investments/
│   ├── goals/
│   ├── reports/
│   ├── taxes/
│   ├── import-export/
│   └── settings/
│
├── hooks/
├── store/
├── services/
├── utils/
├── data/
├── routes/
├── types/
├── styles/
│
├── App.tsx
└── main.tsx

Keep feature-specific components inside their respective feature directories.

Create reusable components only when they genuinely represent reusable UI.

---

# 4. Main Navigation

Create a persistent desktop sidebar.

Navigation:

OVERVIEW

* Overview

FINANCES

* Transactions
* Budget
* Investments
* Goals

ANALYTICS

* Reports
* Taxes

TOOLS

* Export Data
* Import Data
* Settings

Sidebar should contain:

* FinTrack logo
* Navigation icons
* Active route indicator
* User profile section
* Collapse/expand behavior
* Tooltip labels when collapsed

On mobile, replace the sidebar with a mobile navigation/drawer system.

---

# 5. Global Topbar

Create a top navigation bar containing:

* Global search
* Date range selector
* Notifications
* Theme toggle
* User avatar/profile menu

Search should be visually prominent but not oversized.

Implement keyboard shortcut:

Cmd/Ctrl + K → opens global search.

---

# 6. Overview Page

Route:

/overview

This is the main dashboard.

Header:

"Good morning, Alex."

Subtitle:

"Here's what's happening with your finances today."

Include:

## KPI Cards

1. Total Balance
2. Total Income
3. Total Expenses
4. Savings Rate

Each card should show:

* Current value
* Percentage change
* Comparison to previous period
* Relevant icon
* Positive/negative visual indicator

Example:

Total Balance
$24,560.50
+12.5% from last month

---

## Cash Flow Overview

Create an interactive line/area chart showing:

* Income
* Expenses
* Savings

Controls:

* Daily
* Weekly
* Monthly

Hovering over points should reveal a professional tooltip.

---

## Expenses by Category

Create a donut chart.

Categories:

* Housing
* Food & Dining
* Transportation
* Entertainment
* Shopping
* Other

Show:

* Percentage
* Amount
* Category indicator

Center of chart:

Total expenses

---

## Recent Transactions

Display a transaction list/table with:

* Merchant
* Category
* Type
* Amount
* Date
* Account

Include:

"View All"

---

## Budget Overview

Show category budgets with:

* Category
* Amount spent
* Budget limit
* Percentage used
* Progress indicator

Use appropriate warning states when spending approaches/exceeds the limit.

---

## Investment Portfolio

Show:

* Portfolio value
* Overall return
* Small performance chart
* Holdings summary

---

## Financial Insight

At the bottom, show contextual financial insight.

Example:

"You've spent 15% less on dining out compared with last month."

Include:

"View Insights"

---

# 7. Transactions Page

Route:

/transactions

Build a serious transaction-management interface.

Header:

Transactions

Actions:

* Import
* Add Transaction

Summary cards:

* Total Income
* Total Expenses
* Net Cash Flow

Transaction table:

Columns:

* Date
* Description
* Category
* Type
* Amount
* Account
* Status
* Actions

Features:

* Search
* Category filter
* Income/expense filter
* Date filter
* Account filter
* Sorting
* Pagination
* Multi-select
* Bulk delete
* Bulk categorize

Clicking a transaction should open a detail drawer/modal.

Add Transaction should open a validated form.

Transaction form:

* Description
* Amount
* Type
* Category
* Date
* Account
* Notes

Use React Hook Form and Zod.

---

# 8. Budget Page

Route:

/budget

Header:

Budget

Allow the user to select a month.

Display:

* Overall budget
* Amount spent
* Remaining amount
* Percentage used

Create category budget cards.

Each card:

* Category
* Budget
* Spent
* Remaining
* Percentage
* Progress bar
* Status

Statuses:

* Healthy
* Approaching limit
* Over budget

Allow:

"Create Budget"

Budget creation form:

* Month
* Category
* Budget amount

Include an overall spending visualization.

---

# 9. Investments Page

Route:

/investments

Create a professional investment dashboard.

Top section:

* Total portfolio value
* Today's change
* Overall return
* Total invested

Main chart:

Portfolio performance over time.

Time controls:

* 1D
* 1W
* 1M
* 3M
* 1Y
* ALL

Holdings table:

* Asset
* Symbol
* Type
* Shares
* Average price
* Current price
* Market value
* Return

Example assets:

AAPL
GOOGL
MSFT
SPY
BND

Include:

"Add Investment"

Use realistic mock data.

---

# 10. Goals Page

Route:

/goals

Financial goal tracking interface.

Example goals:

* Emergency Fund
* New Car
* House Down Payment
* Vacation
* Retirement

Each goal should display:

* Current amount
* Target amount
* Percentage complete
* Target date
* Progress bar
* Status

Clicking a goal opens a detailed view.

Goal detail should include:

* Progress history
* Contributions
* Target projection
* Remaining amount

Create Goal form:

* Goal name
* Target amount
* Current amount
* Target date
* Category
* Optional icon

---

# 11. Reports Page

Route:

/reports

Create a financial analytics/reporting interface.

Date controls:

* This Month
* Last Month
* This Year
* Custom

Display:

* Income vs Expenses chart
* Spending by category
* Net savings
* Cash flow trend
* Monthly comparison

Allow:

"Export Report"

Provide a report preview before exporting.

---

# 12. Taxes Page

Route:

/taxes

Create a tax management interface.

Display:

* Estimated taxable income
* Estimated tax
* Taxes paid
* Remaining liability

Tax documents section:

* W-2
* 1099
* Receipts
* Other documents

Deductions section:

* Category
* Amount
* Description
* Status

Include:

* Add deduction
* Upload document
* Tax year selector

This is a frontend simulation only. Clearly treat calculations as mock/demo data rather than real tax advice.

---

# 13. Import Data

Route:

/import

Create a polished data-import workflow.

Step 1:

Upload CSV.

Step 2:

Preview data.

Step 3:

Map columns.

Step 4:

Validate.

Step 5:

Import.

Show:

* Upload progress
* Validation errors
* Invalid rows
* Successful rows
* Final import summary

Support drag-and-drop upload.

Do not actually upload to a backend unless one exists. Simulate the workflow locally.

---

# 14. Export Data

Route:

/export

Allow users to export:

* Transactions
* Budgets
* Investments
* Goals
* Reports

Formats:

* CSV
* JSON

Include:

* Date range
* Dataset selection
* Export history

Show previous exports.

---

# 15. Settings

Route:

/settings

Use a tabbed settings interface.

Tabs:

* Profile
* Preferences
* Security
* Notifications
* Connected Accounts

Preferences:

* Currency
* Date format
* Theme
* Language
* Time zone
* Monthly budget reset

Security:

* Password
* Two-factor authentication
* Active sessions

Notifications:

* Email notifications
* Budget alerts
* Investment alerts
* Weekly reports

Connected accounts:

Display mock linked financial accounts.

---

# 16. Responsive Design

This is mandatory.

Desktop:

* Persistent sidebar
* Multi-column dashboards
* Dense tables

Tablet:

* Collapsible navigation
* Reduced columns
* Adaptive cards

Mobile:

* Bottom navigation or mobile drawer
* Stacked cards
* Horizontally scrollable tables where necessary
* Mobile-friendly charts
* Full-screen forms/modals where appropriate

Do not simply shrink the desktop UI.

Design intentional mobile layouts.

---

# 17. Interaction States

Every major component should account for:

* Loading
* Empty
* Error
* Success
* Disabled
* Hover
* Focus
* Active
* Selected

Use skeleton loaders instead of blank spaces.

Create reusable:

* Skeleton
* EmptyState
* ErrorState
* Toast
* Modal
* Drawer
* ConfirmationDialog

---

# 18. Accessibility

Implement:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Appropriate ARIA labels
* Accessible forms
* Accessible dialogs
* Accessible dropdowns
* Sufficient color contrast
* Keyboard-accessible charts where practical

Do not rely solely on color to communicate positive/negative states.

---

# 19. Animation

Use Framer Motion selectively.

Animate:

* Page transitions
* Sidebar collapse
* Modal/drawer appearance
* Toast notifications
* KPI number changes
* Progress bars
* Chart appearance

Keep animations subtle and fast.

Do NOT animate everything.

Respect prefers-reduced-motion.

---

# 20. Mock Data

Create realistic mock financial data in:

src/data/

Include:

* transactions
* budgets
* investments
* goals
* reports
* tax data
* accounts

Use TypeScript interfaces/types.

Do not hardcode large amounts of data directly inside components.

---

# 21. State Architecture

Use Zustand for application-level state such as:

* Theme
* Sidebar state
* Filters where globally relevant
* User preferences
* Selected date range
* Notifications

Keep feature-specific state local where possible.

Do not put everything into global state.

Use derived calculations instead of duplicating state.

---

# 22. Data Architecture

Separate:

UI components
↓
Feature logic
↓
Services
↓
Data source

Create service functions that simulate API calls.

Example:

getTransactions()
getBudgets()
getInvestments()
getGoals()
getReports()

Add artificial loading delays where useful so loading states can be demonstrated.

This should make replacing mock services with a real API later straightforward.

---

# 23. Design System

Create consistent design tokens for:

* Background
* Surface
* Border
* Text
* Muted text
* Primary
* Success
* Warning
* Danger
* Info

Maintain consistent:

* Spacing
* Typography
* Border radius
* Shadows
* Component heights
* Icon sizing

Avoid arbitrary styling values throughout the application.

---

# 24. UX Details

Include professional details such as:

* Confirmation before destructive actions
* Unsaved changes warning for complex forms
* Debounced search
* Persisted theme preference
* Persisted sidebar state
* Tooltips for unfamiliar icons
* Breadcrumbs where useful
* Clear feedback after actions
* Empty states with useful next actions
* Helpful validation messages
* Graceful error handling

---

# 25. Performance

Build with performance in mind.

Use:

* React.memo where actually beneficial
* useMemo for expensive derived calculations
* useCallback where appropriate
* Lazy-loaded routes
* Virtualized lists if datasets become large
* Debounced search
* Efficient chart rendering

Do not blindly memoize everything.

---

# 26. Code Quality

Requirements:

* Strong TypeScript typing
* No `any` unless genuinely unavoidable
* No duplicated components
* No giant components
* No business logic buried inside JSX
* Meaningful naming
* Small focused components
* Reusable hooks
* Clear separation of concerns

Use ESLint and Prettier.

---

# 27. Important Implementation Rule

Build the application completely.

Do not stop after generating the layout.

Implement:

* Routing
* Pages
* Components
* Mock data
* State
* Interactions
* Forms
* Validation
* Charts
* Filters
* Modals
* Drawers
* Responsive layouts
* Loading states
* Empty states
* Error states

Every navigation item must lead to a functional page.

Buttons should perform meaningful actions or clearly indicate when functionality is simulated.

---

# 28. Development Strategy

Build in this order:

1. Project setup
2. Global styles/design tokens
3. Reusable UI components
4. Dashboard layout
5. Sidebar + topbar
6. Routing
7. Overview
8. Transactions
9. Budget
10. Investments
11. Goals
12. Reports
13. Taxes
14. Import
15. Export
16. Settings
17. Responsive optimization
18. Accessibility pass
19. Performance pass
20. Final UI polish

After each major phase, ensure the application still runs without TypeScript or runtime errors.

---

# 29. Final Quality Standard

The finished application should look like something a frontend engineer could reasonably show in a professional portfolio.

Prioritize:

**UI/UX quality > feature quantity.**

The application should feel cohesive rather than like 10 unrelated pages.

Use the same design language throughout every screen.

The final result should communicate:

"I can build and maintain a serious React application."

Do not add unnecessary features merely to make the project appear larger.

Build a coherent, polished financial product.
# 30. Realistic Execution Plan

Do NOT attempt to generate the entire application in a single step.

Build FinTrack incrementally. Each phase must produce a working application before proceeding to the next phase.

The objective is not merely to generate code, but to build a coherent frontend application that can be understood, tested, modified, and extended.

---

## PHASE 0 — Foundation

### Goal

Establish a clean, working React/TypeScript project.

Build:

* Vite configuration
* TypeScript configuration
* Tailwind configuration
* ESLint
* Prettier
* Folder structure
* Global styles
* Design tokens
* Application entry point
* Basic routing

Create the initial route structure:

```text
/overview
/transactions
/budget
/investments
/goals
/reports
/taxes
/import
/export
/settings
```

At this stage, pages can contain simple placeholder content.

### Exit criteria

* Application starts successfully.
* All routes work.
* No TypeScript errors.
* No console errors.
* Folder structure is established.
* Basic responsive behavior works.

Do not proceed until these conditions are satisfied.

---

# PHASE 1 — Design System

### Goal

Build the reusable visual foundation before constructing the pages.

Create:

* Button
* IconButton
* Card
* Badge
* Input
* Select
* Checkbox
* Switch
* Tabs
* Dropdown
* Modal
* Drawer
* Tooltip
* Toast
* ProgressBar
* Skeleton
* EmptyState
* ErrorState
* Avatar
* Divider

Establish:

* Typography scale
* Spacing system
* Border radius
* Shadows
* Surface hierarchy
* Color tokens
* Focus states
* Hover states
* Disabled states

Do not create page-specific components here.

### Exit criteria

The components are reusable and visually consistent.

A change to a design token should propagate throughout the application rather than requiring manual editing of individual pages.

---

# PHASE 2 — Application Shell

### Goal

Build the persistent application environment.

Implement:

* Sidebar
* Collapsible sidebar
* Topbar
* Global search interface
* Notification menu
* User menu
* Theme switcher
* Responsive mobile navigation
* Main content container

Implement:

```text
DashboardLayout
├── Sidebar
├── Topbar
└── Main Content
```

Add:

* Active navigation state
* Route transitions
* Sidebar persistence
* Keyboard shortcut for search
* Responsive breakpoints

### Exit criteria

Every route renders inside the same professional application shell.

The shell must work correctly on:

* Desktop
* Tablet
* Mobile

---

# PHASE 3 — Mock Data Architecture

### Goal

Separate data from UI.

Create TypeScript models for:

```text
Transaction
Budget
Investment
Goal
Report
TaxRecord
Account
User
Notification
```

Create realistic mock datasets.

Create service functions:

```text
getTransactions()
getBudgets()
getInvestments()
getGoals()
getReports()
getTaxData()
getAccounts()
```

Simulate asynchronous loading.

Implement:

* Loading states
* Error states
* Empty states

Do not put large datasets directly inside components.

### Exit criteria

UI components consume data through services/hooks rather than directly importing large datasets wherever practical.

The mock service layer should be replaceable by a real API later.

---

# PHASE 4 — Overview Dashboard

### Goal

Build the primary dashboard completely before moving to the other pages.

Implement:

* KPI cards
* Cash flow chart
* Expense category chart
* Recent transactions
* Budget overview
* Investment summary
* Financial insight

Add:

* Date filtering
* Chart period switching
* Tooltips
* Loading skeletons
* Empty states

### Exit criteria

The overview page should look and behave like a finished product.

Do not move on simply because the components render.

Check:

* Visual hierarchy
* Spacing
* Responsive behavior
* Chart readability
* Loading behavior
* Empty states
* Interaction feedback

---

# PHASE 5 — Transactions

### Goal

Build the first genuinely data-heavy application page.

Implement:

* Transaction table
* Search
* Filters
* Sorting
* Pagination
* Multi-selection
* Bulk actions
* Transaction detail drawer
* Add transaction modal
* Edit transaction
* Delete confirmation

Implement validation using:

```text
React Hook Form
+
Zod
```

Add realistic validation errors.

### Exit criteria

A user should be able to:

1. Search transactions.
2. Filter them.
3. Sort them.
4. Select multiple transactions.
5. Add a transaction.
6. Edit a transaction.
7. Delete a transaction.
8. Receive appropriate feedback.

---

# PHASE 6 — Budget + Goals

### Goal

Build financial planning workflows.

## Budget

Implement:

* Monthly budget selector
* Category budgets
* Spending progress
* Warning states
* Over-budget states
* Create budget
* Edit budget

## Goals

Implement:

* Goal cards
* Goal detail view
* Progress history
* Contributions
* Target projection
* Create goal
* Edit goal

### Exit criteria

Budget and goal data should update the UI correctly after user actions.

Avoid fake interactions where clicking a button merely produces a visual animation without changing application state.

---

# PHASE 7 — Investments

### Goal

Build the investment analytics interface.

Implement:

* Portfolio summary
* Performance chart
* Time-period controls
* Holdings table
* Asset categories
* Return calculations
* Add investment
* Investment detail view

Include realistic positive and negative performance scenarios.

### Exit criteria

The page should demonstrate competence with:

* Financial data
* Tables
* Charts
* Derived calculations
* Responsive layouts

---

# PHASE 8 — Reports + Taxes

### Goal

Build analytics and reporting workflows.

## Reports

Implement:

* Date range selection
* Income/expense analysis
* Category analysis
* Savings analysis
* Monthly comparison
* Report preview
* Export interaction

## Taxes

Implement:

* Tax-year selector
* Tax summary
* Documents
* Deductions
* Add deduction
* Upload simulation
* Document status

Tax functionality is strictly a frontend simulation and must not present mock calculations as real tax advice.

### Exit criteria

Both pages feel like natural extensions of the same FinTrack product.

---

# PHASE 9 — Import / Export

### Goal

Create a complete data workflow.

## Import

Implement:

```text
Upload
   ↓
Preview
   ↓
Map Columns
   ↓
Validate
   ↓
Import
   ↓
Summary
```

Include:

* Drag and drop
* File validation
* CSV preview
* Column mapping
* Invalid-row reporting
* Import progress
* Success summary

## Export

Implement:

* Dataset selection
* Date range
* Format selection
* Export progress
* Export history

### Exit criteria

The workflow feels like an actual product workflow rather than a collection of static screens.

---

# PHASE 10 — Settings

### Goal

Complete the application ecosystem.

Implement:

* Profile
* Preferences
* Security
* Notifications
* Connected accounts

Persist appropriate preferences locally.

Examples:

* Theme
* Sidebar state
* Currency
* Notification preferences

### Exit criteria

Settings actually affect relevant parts of the application.

---

# PHASE 11 — Responsive Engineering Pass

Do NOT treat responsive design as simply making everything smaller.

Review every page individually.

### Desktop

Optimize for:

* Information density
* Multi-column layouts
* Tables
* Charts

### Tablet

Optimize for:

* Reduced navigation
* Adaptive cards
* Reduced table columns
* Flexible layouts

### Mobile

Optimize for:

* Touch interaction
* Bottom navigation/drawer
* Stacked content
* Horizontal table scrolling
* Full-screen dialogs
* Simplified charts

Test every major workflow on narrow screens.

---

# PHASE 12 — Accessibility Pass

Review the entire application.

Check:

* Keyboard navigation
* Focus management
* Screen-reader labels
* Form labels
* Dialog accessibility
* Dropdown accessibility
* Keyboard shortcuts
* Color contrast
* Error messaging
* Reduced motion

Ensure that important information is not communicated through color alone.

---

# PHASE 13 — Performance Pass

Measure before optimizing.

Look for:

* Unnecessary re-renders
* Expensive calculations
* Large lists
* Large chart datasets
* Unnecessary network requests
* Unoptimized assets

Then implement appropriate solutions:

* Memoization
* Lazy-loaded routes
* Debounced search
* Virtualized lists where necessary
* Efficient selectors
* Code splitting

Do not add optimization techniques without a reason.

---

# PHASE 14 — Testing

Add tests for important user behavior.

Prioritize:

### Unit tests

* Financial calculations
* Currency formatting
* Date calculations
* Budget percentages
* Investment returns

### Component tests

* Forms
* Filters
* Modals
* Tables
* Interactive controls

### Integration tests

Test workflows such as:

```text
Add Transaction
→
Transaction appears in table
→
Dashboard totals update
```

and:

```text
Create Budget
→
Budget appears
→
Spending percentage updates
```

Do not attempt to achieve meaningless 100% test coverage.

Test behavior that matters.

---

# PHASE 15 — Final Product Polish

Perform a complete visual and UX audit.

Check every page for:

* Inconsistent spacing
* Inconsistent typography
* Misaligned components
* Poor empty states
* Missing loading states
* Missing error states
* Broken mobile layouts
* Inconsistent buttons
* Inconsistent icons
* Unclear interactions
* Excessive animation
* Poor contrast

Add subtle polish:

* Page transitions
* Micro-interactions
* Hover feedback
* Smooth progress animations
* Chart transitions
* Toast feedback

Do not over-animate the application.

---

# PHASE 16 — Portfolio Readiness

Prepare the project as a professional portfolio piece.

Include:

```text
README.md
```

Document:

* Project purpose
* Features
* Tech stack
* Architecture
* State management strategy
* Data architecture
* Component architecture
* Design decisions
* Challenges encountered
* Performance considerations
* Accessibility considerations
* Future improvements

Include screenshots/GIFs of:

* Overview
* Transactions
* Budget
* Investments
* Goals
* Mobile UI

Document important engineering decisions rather than merely listing technologies.

---

# Execution Rules for Copilot

Follow these rules throughout development:

### Rule 1 — Never rewrite working code unnecessarily.

Before modifying an existing component, understand its current role and preserve existing functionality.

### Rule 2 — Work in small vertical slices.

Complete a feature from:

```text
Data
→
State
→
Logic
→
UI
→
Interaction
→
Responsive behavior
```

before moving to another feature.

### Rule 3 — Do not create placeholder functionality unless explicitly requested.

If a feature is being implemented, implement its actual frontend behavior.

### Rule 4 — Do not duplicate components.

If two pages require the same UI pattern, determine whether the component belongs in the shared component system.

### Rule 5 — Keep business logic outside JSX where practical.

Prefer:

```text
hooks/
services/
utils/
```

for logic that does not belong directly in presentation components.

### Rule 6 — Keep components reasonably small.

If a component becomes responsible for several unrelated concerns, split it.

### Rule 7 — Preserve visual consistency.

Before creating a new UI pattern, check whether an existing component or design token can be reused.

### Rule 8 — Do not blindly install dependencies.

Only introduce a package when it provides meaningful functionality that would otherwise require excessive custom implementation.

### Rule 9 — Verify after every major change.

After implementing a phase or substantial feature:

* Run the application.
* Run TypeScript checking.
* Run linting.
* Fix runtime errors.
* Fix visual regressions.
* Confirm existing routes still work.

### Rule 10 — Do not proceed through errors.

If a phase introduces a significant TypeScript, runtime, routing, or state-management error, fix it before continuing.

---

# Definition of Done

FinTrack is complete when:

* All routes work.
* All major pages are implemented.
* Navigation works.
* Mock data flows through services/state into the UI.
* Forms validate correctly.
* Tables support realistic interaction.
* Charts display meaningful data.
* Loading/error/empty states exist.
* Responsive layouts work.
* Accessibility has been reviewed.
* Important interactions are tested.
* No known TypeScript errors remain.
* No known runtime errors remain.
* The UI is visually cohesive.
* The README explains the engineering decisions.
* The application can be demonstrated without manually fixing anything beforehand.

The final goal is not:

"11 screens that look good."

The final goal is:

"A coherent financial product that demonstrates how I think and work as a React frontend engineer."
