# Development Guide

This guide provides detailed information for developers working on the AMMAR Industrial ERP system.

## 🏗️ Architecture Overview

### Frontend Architecture

The frontend follows a modular React architecture with TypeScript:

```
client/
├── components/          # Reusable UI components
│   ├── forms/          # Form components for data entry
│   ├── pages/          # Page-specific components
│   └── ui/             # Low-level UI components
├── lib/                # Utilities and business logic
├── pages/              # Route-level page components
└── hooks/              # Custom React hooks
```

### Key Design Patterns

1. **Component Composition**: Complex UIs built from smaller, reusable components
2. **Props Interface**: Consistent prop interfaces using TypeScript
3. **State Management**: React hooks for local state, context for global state
4. **Helper Functions**: Pure functions for business logic in `lib/helpers.ts`

### Data Flow

```
User Interaction → Component → Helper Function → API Call → State Update → UI Re-render
```

## 🔧 Development Environment

### Setup Requirements

- Node.js 18+ (LTS recommended)
- npm or yarn package manager
- VS Code with recommended extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Code Organization

### Component Structure

Each component follows this structure:

```typescript
import { useState } from "react";
import { SomeIcon } from "lucide-react";
import { ComponentProps } from "../lib/types";
import { helperFunction } from "../lib/helpers";

interface ComponentNameProps {
  // Define props interface
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component logic here
  return (
    // JSX here
  );
}
```

### Constants and Configuration

All constants are centralized in `client/lib/constants.ts`:

- Company information
- Menu structure
- Sample data
- Configuration options

### Type Definitions

TypeScript interfaces are defined in `client/lib/types.ts`:

- Business entities (User, Product, Order, etc.)
- Component props
- API response types
- Form data types

### Helper Functions

Business logic is extracted to `client/lib/helpers.ts`:

- Data formatting functions
- Validation utilities
- API helpers
- Common calculations

## 🎨 Styling Guidelines

### Tailwind CSS Usage

- Use Tailwind utility classes for styling
- Maintain consistent spacing using Tailwind's scale
- Follow mobile-first responsive design principles

### Common Patterns

```css
/* Button styles */
.btn-primary: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
.btn-secondary: "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"

/* Card layouts */
.card: "bg-white p-6 rounded-lg border border-gray-200"

/* Form inputs */
.input: "w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
```

### Responsive Design

- Mobile-first approach using `sm:`, `md:`, `lg:` prefixes
- Consistent breakpoints: 640px (sm), 768px (md), 1024px (lg)
- Grid layouts adapt from 1 column on mobile to 2-4 columns on desktop

## 🔗 API Integration

### Current Implementation

The system currently uses file-based data storage with JSON files:

- `users.json` - User accounts and authentication
- `products.json` - Product catalog
- Sample data generated in `client/lib/sampleData.ts`

### API Helpers

```typescript
// Example API usage
import { api } from "../lib/helpers";

// GET request
const data = await api.get("/api/products");

// POST request
const result = await api.post("/api/orders", orderData);
```

### Future Database Integration

The codebase is structured to easily integrate with:

- PostgreSQL with Prisma ORM
- MongoDB with Mongoose
- Firebase Firestore
- Supabase

## 🧪 Testing Strategy

### Component Testing

```typescript
// Example component test structure
import { render, screen, fireEvent } from '@testing-library/react';
import ProductForm from '../components/ProductForm';

test('should submit form with valid data', () => {
  const mockOnSuccess = jest.fn();
  render(<ProductForm isOpen={true} onClose={() => {}} onSuccess={mockOnSuccess} />);

  // Test implementation here
});
```

### Helper Function Testing

```typescript
// Example helper test
import { formatCurrency } from "../lib/helpers";

test("should format currency correctly", () => {
  expect(formatCurrency(1234.56)).toBe("₹1,234.56");
});
```

## 🚀 Performance Optimization

### Code Splitting

- React.lazy() for route-level code splitting
- Dynamic imports for heavy components
- Separate vendor bundles

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

### Best Practices

1. **Minimize Re-renders**: Use React.memo for expensive components
2. **Optimize Images**: Use appropriate formats and sizes
3. **Lazy Loading**: Load data only when needed
4. **Caching**: Implement proper caching strategies

## 🔐 Security Considerations

### Authentication

- JWT token-based authentication
- Secure token storage in localStorage
- Automatic token refresh

### Data Validation

- Client-side validation using helper functions
- TypeScript for type safety
- Sanitize user inputs

### Best Practices

1. **Never expose sensitive data** in client-side code
2. **Validate all inputs** both client and server side
3. **Use HTTPS** in production
4. **Implement proper CORS** policies

## 📊 State Management

### Local State

Use React's useState for component-specific state:

```typescript
const [formData, setFormData] = useState(initialState);
```

### Global State

For application-wide state, consider:

- React Context for theme, user authentication
- Custom hooks for shared logic
- State lifting for parent-child communication

### Form State

```typescript
// Form handling pattern
const [formData, setFormData] = useState(initialFormData);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
```

## 🛠️ Development Tools

### VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint"
  ]
}
```

### Useful Scripts

```bash
# Type checking
npx tsc --noEmit

# Linting
npx eslint . --ext .ts,.tsx

# Format code
npx prettier --write .
```

## 🐛 Debugging

### Common Issues

1. **TypeScript Errors**: Check type definitions in `lib/types.ts`
2. **Styling Issues**: Verify Tailwind classes and responsive breakpoints
3. **State Updates**: Ensure immutable state updates
4. **Form Validation**: Check helper functions and error handling

### Debug Tools

- React Developer Tools
- Browser DevTools Network tab
- TypeScript compiler errors
- Console logging with structured data

## 📈 Adding New Features

### Feature Development Workflow

1. **Plan the feature** - Define requirements and user stories
2. **Create types** - Add TypeScript interfaces in `types.ts`
3. **Add constants** - Update `constants.ts` if needed
4. **Build components** - Create reusable UI components
5. **Add business logic** - Implement helper functions
6. **Test thoroughly** - Test all use cases
7. **Update documentation** - Document new features

### Example: Adding a New Module

```typescript
// 1. Define types
interface NewModuleData {
  id: string;
  name: string;
  // ... other properties
}

// 2. Add to constants
export const NEW_MODULE_STATUSES = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
] as const;

// 3. Create form component
export function NewModuleForm({ isOpen, onClose, onSuccess }: FormProps) {
  // Implementation
}

// 4. Create page component
export function NewModulePage() {
  // Implementation
}

// 5. Add to navigation menu in constants.ts
```

## 🤝 Contributing Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Add JSDoc comments for complex functions
- Keep components focused and single-purpose

### Commit Messages

```
feat: add new inventory alerts feature
fix: resolve payment form validation issue
docs: update API documentation
style: improve mobile responsive layout
refactor: extract common form logic to hook
test: add unit tests for helper functions
```

### Pull Request Process

1. Create feature branch from `main`
2. Implement changes with tests
3. Update documentation
4. Submit PR with clear description
5. Address review feedback
6. Merge after approval

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/)

---

Happy coding! 🚀
