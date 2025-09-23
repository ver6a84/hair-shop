# CSS Structure Documentation

This project uses a hybrid CSS organization approach that combines co-located component styles with centralized global styles.

## Directory Structure

```
src/
├── styles/                          # Centralized styles
│   ├── index.css                    # Main entry point
│   ├── variables.css                # CSS custom properties
│   ├── globals/                     # Global styles
│   │   ├── reset.css               # CSS reset and base styles
│   │   ├── layout.css              # Layout components
│   │   └── utilities.css           # Utility classes
│   ├── pages/                      # Page-specific styles
│   │   └── pages.css               # All page styles
│   ├── components/                 # Shared component styles (future)
│   └── themes/                     # Theme variations (future)
├── components/                      # Co-located component styles
│   ├── Header.jsx
│   ├── Header.css                  # Component-specific styles
│   ├── Footer.jsx
│   ├── Footer.css
│   └── ...
└── pages/                          # Co-located page styles
    ├── Home.jsx
    ├── Products.jsx
    └── ...
```

## Style Categories

### 1. **Global Styles** (`@styles/globals/`)
- **`reset.css`**: CSS reset, base element styles, typography
- **`layout.css`**: Layout components (container, wrapper, grid)
- **`utilities.css`**: Utility classes for common patterns

### 2. **Variables** (`@styles/variables.css`)
- CSS custom properties for colors, spacing, typography
- Theme variables and design tokens
- Consistent values across the application

### 3. **Page Styles** (`@styles/pages/`)
- Styles specific to page layouts
- Cross-page component styles
- Page-specific responsive design

### 4. **Component Styles** (Co-located)
- Styles specific to individual components
- Kept next to component files for easy maintenance
- Examples: `Header.css`, `Footer.css`, `OffersCard.css`

## Import Strategy

### Main Entry Point
```css
/* src/styles/index.css */
@import './variables.css';
@import './globals/reset.css';
@import './globals/layout.css';
@import './globals/utilities.css';
@import './pages/pages.css';
```

### Component Imports
```javascript
// Component-specific styles
import './Header.css'

// Global page styles
import '@styles/pages/pages.css'

// Main styles (in main.jsx)
import '@styles/index.css'
```

## Benefits of This Structure

### ✅ **Co-located Component Styles**
- Easy to find and maintain component-specific styles
- Clear relationship between component and its styles
- Better for component reusability
- Standard React practice

### ✅ **Centralized Global Styles**
- All global styles in one organized location
- Easy to see overall design system
- Better for design consistency
- Easier to maintain shared styles

### ✅ **Clear Separation of Concerns**
- Global vs component-specific styles are clearly separated
- Easy to understand what styles affect what
- Better for team collaboration

### ✅ **Scalable Organization**
- Easy to add new categories as the project grows
- Clear structure for new team members
- Maintainable as the codebase expands

## Usage Guidelines

### When to Use Co-located Styles
- Component-specific styles that won't be reused
- Styles tightly coupled to a specific component
- Styles that are part of the component's API

### When to Use Centralized Styles
- Global styles (reset, typography, layout)
- Shared utility classes
- Page-level styles that affect multiple components
- Design system variables and tokens

### Naming Conventions
- Use kebab-case for CSS class names
- Use BEM methodology for complex components
- Use semantic names that describe purpose, not appearance
- Use CSS custom properties for consistent values

## Future Enhancements

- **Theme system**: Add theme variations in `@styles/themes/`
- **Component library**: Move shared component styles to `@styles/components/`
- **CSS Modules**: Consider CSS Modules for better scoping
- **PostCSS**: Add PostCSS plugins for advanced features
- **CSS-in-JS**: Consider styled-components for dynamic styles

## Migration Notes

This structure was migrated from a flat CSS organization. The migration included:
- Moving global styles to centralized location
- Updating all import statements to use path aliases
- Organizing styles by category and purpose
- Maintaining all existing functionality
