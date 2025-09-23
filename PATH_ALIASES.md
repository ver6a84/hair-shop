# Path Aliases Configuration

This project uses path aliases to make imports cleaner and more maintainable.

## Available Aliases

| Alias | Path | Description |
|-------|------|-------------|
| `@` | `src/` | Root source directory |
| `@components` | `src/components/` | Reusable UI components |
| `@pages` | `src/pages/` | Page-level components |
| `@assets` | `src/assets/` | Static assets (images, icons, fonts) |
| `@styles` | `src/styles/` | Global styles and CSS variables |
| `@utils` | `src/utils/` | Utility functions and constants |
| `@hooks` | `src/hooks/` | Custom React hooks |
| `@context` | `src/context/` | React Context providers |

## Usage Examples

### Before (relative imports)
```javascript
import Header from '../components/Header'
import Home from '../pages/Home'
import { API_BASE_URL } from '../utils/constants'
import useLocalStorage from '../hooks/useLocalStorage'
```

### After (alias imports)
```javascript
import Header from '@components/Header'
import Home from '@pages/Home'
import { API_BASE_URL } from '@utils/constants'
import useLocalStorage from '@hooks/useLocalStorage'
```

## Configuration Files

- **Vite Config**: `vite.config.js` - Defines the aliases for the build system
- **JSConfig**: `jsconfig.json` - Provides IDE autocomplete and path resolution

## Benefits

1. **Cleaner imports**: No more `../../../` relative paths
2. **Better refactoring**: Moving files doesn't break imports
3. **IDE support**: Better autocomplete and navigation
4. **Consistency**: Standardized import patterns across the project
5. **Maintainability**: Easier to understand and modify code structure

## Directory Structure

```
src/
├── components/          # @components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/              # @pages
│   ├── Home.jsx
│   ├── Products.jsx
│   └── ...
├── assets/             # @assets
│   ├── img/
│   ├── icons/
│   └── fonts/
├── styles/             # @styles
│   └── variables.css
├── utils/              # @utils
│   └── constants.js
├── hooks/              # @hooks
│   └── useLocalStorage.js
├── context/            # @context
│   └── (context providers)
├── App.jsx
└── main.jsx
```
