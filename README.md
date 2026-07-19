# Ascend — E-Learning Platform (Frontend Prototype)

A responsive React frontend prototype for an e-learning startup, built with
React Router, a component-driven architecture, and CSS Modules.

## Tech Stack

- React 18 (functional components + hooks: `useState`, `useEffect`)
- React Router DOM v6 (`/`, `/courses`, `/contact`, `/about`)
- CSS Modules for scoped, consistent styling
- Controlled forms with custom JS validation (no HTML5-only validation)

## Getting Started

### Prerequisites
- Node.js 16+ and npm installed

### Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd elearning-platform

# 2. Install dependencies
npm install

# 3. Run the development server
npm start
```

The app runs at `http://localhost:3000`.

### Production build

```bash
npm run build
```

Outputs an optimized build to the `/build` folder.

## Project Structure

```
elearning-platform/
├── public/
│   └── index.html
├── src/
│   ├── components/            # Reusable, presentational components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── FeatureCard/
│   │   ├── CourseCard/
│   │   ├── TeamCard/
│   │   ├── Testimonial/
│   │   ├── FAQAccordion/
│   │   ├── PricingPlans/
│   │   ├── SuccessMessage/
│   │   └── Section/            # Shared section heading wrapper
│   ├── pages/                  # Route-level views
│   │   ├── Home/
│   │   ├── Courses/
│   │   ├── Contact/
│   │   └── About/
│   ├── data/                    # Static data arrays (props source)
│   │   ├── features.js
│   │   ├── courses.js
│   │   ├── testimonials.js
│   │   ├── faqs.js
│   │   └── team.js
│   ├── App.js                   # Route definitions
│   ├── index.js                 # App entry point
│   └── index.css                # Design tokens & global styles
├── package.json
└── README.md
```

Each component folder contains the `.jsx` file and its paired
`.module.css` file, keeping markup, logic and styling co-located and
avoiding copy-pasted markup across pages.

## Design Notes

- **Data flow**: Course, testimonial, FAQ, feature and team data live in
  `src/data/` as plain arrays and are passed down via props (e.g.
  `<CourseCard course={course} />`). Pages own the state that changes
  (like the active category filter or the FAQ's open item); components
  stay presentational and reusable.
- **State placement**: State is kept as local as possible.
  - `Navbar` owns its own mobile-menu open/close state.
  - `Courses` owns the active category filter and derives the visible
    course list from it.
  - `Contact` owns the full form state, validation errors, and the
    submitted flag.
  - **Context API**: not introduced here — no state needs to be shared
    across more than one or two component levels, so prop drilling stays
    shallow (page → card component). If a future requirement added
    global state (e.g. a logged-in user, a shopping cart, or a theme
    toggle needed across many unrelated routes), Context (or a small
    state library) would be the right call at that point.
- **Forms**: The Contact page uses fully controlled inputs. Validation
  runs in a plain JS function on submit (`noValidate` is set on the
  `<form>` to disable native browser validation), and errors render
  conditionally under each field. On successful submission, the page
  conditionally renders a `SuccessMessage` component instead of sending
  any network request.
- **Routing**: `react-router-dom`'s `NavLink` drives the active-link
  styling in the Navbar automatically via its `isActive` render prop.

## Git Workflow

This project is intended to be committed feature-by-feature rather than
as a single dump, for example:

```
feat: scaffold CRA project and add design tokens
feat: add Navbar and Footer components
feat: build Home page (Hero, FeatureCard grid, Benefits)
feat: build Courses page (CourseCard grid, filters)
feat: add PricingPlans and Testimonial components
feat: add FAQAccordion component
feat: build Contact page with controlled form + validation
feat: add SuccessMessage conditional rendering
feat: build About page (timeline, TeamCard grid)
style: responsive pass for mobile breakpoints
docs: add README with setup instructions
```

## Available Scripts

| Command         | Description                          |
|-----------------|---------------------------------------|
| `npm start`     | Runs the app in development mode      |
| `npm run build` | Builds the app for production         |
| `npm test`      | Runs the test runner (if tests added) |
