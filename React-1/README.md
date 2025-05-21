# 📘 React Learning Notes

A quick reference for writing clean, functional, and consistent React code.

---

## ✅ Component Naming Convention

- **Component names must begin with a capital letter.**
- React uses **PascalCase** (e.g., `MyComponent`) for custom components.
- Lowercase names like `<div>` or `<button>` are treated as native HTML elements.

### 🔍 Example

```jsx
// ✅ Correct
function MyComponent() {
  return <h1>Hello, world!</h1>;
}

// ❌ Incorrect
function myComponent() {
  return <h1>Hello, world!</h1>;
}
