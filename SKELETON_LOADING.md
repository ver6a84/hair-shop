# Skeleton Loading Implementation

This project now includes skeleton loading states for better user experience during data fetching.

## Components Added

### 1. ProductCardSkeleton
- **File**: `src/components/ProductCardSkeleton.jsx`
- **Purpose**: Individual skeleton card that mimics the ProductCard layout
- **Features**: 
  - Animated shimmer effect
  - Responsive design
  - Matches ProductCard structure

### 2. ProductGridSkeleton
- **File**: `src/components/ProductGridSkeleton.jsx`
- **Purpose**: Renders multiple skeleton cards
- **Props**: `count` (number of skeleton cards to render)

### 3. useProducts Hook
- **File**: `src/hooks/useProducts.js`
- **Purpose**: Manages loading states and data fetching
- **Features**:
  - Loading state management
  - Error handling
  - Configurable delay for demonstration
  - Returns: `{ products, loading, error }`

## Updated Pages

All category pages now use skeleton loading:
- **Wigs.jsx**: Shows 4 skeleton cards while loading
- **Tails.jsx**: Shows 4 skeleton cards while loading  
- **Toppers.jsx**: Shows 4 skeleton cards while loading

## How It Works

1. When a page loads, `useProducts` hook sets `loading: true`
2. Skeleton cards are displayed with shimmer animation
3. After 1 second delay (configurable), real data loads
4. Skeleton cards are replaced with actual product cards

## Customization

### Adjust Loading Delay
```javascript
const { products, loading, error } = useProducts({
  category: PRODUCT_CATEGORIES.WIGS
}, 2000); // 2 second delay
```

### Change Skeleton Count
```javascript
{loading && <ProductGridSkeleton count={6} />}
```

### Custom Skeleton Styling
Edit `src/components/ProductCardSkeleton.css` to modify:
- Animation speed
- Colors
- Sizes
- Effects

## CSS Animations

The skeleton uses two key animations:
- `skeleton-pulse`: Subtle opacity change
- `skeleton-shimmer`: Moving gradient effect

Both can be customized in the CSS file.
