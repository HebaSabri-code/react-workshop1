# React Workshop 1

A shop page based on the workshop's HTML reference.
Built with React, Vite, TypeScript, Tailwind CSS and lucide-react.

## Run

```bash
npm install
npm run dev
```

## Components

- `App`: puts the page together.
- `Header`: shows the logo, navigation and search box.
- `Sidebar`: shows the filters and sale card.
- `FilterSection`: groups filters under a title.
- `FilterCheckbox`: shows a checkbox with a label.
- `ProductGrid`: displays the list of products.
- `ProductCard`: shows one product's image, name, price and other details.

## Props

`App` passes `products` to `ProductGrid`, which passes each `product` to `ProductCard`.

`Sidebar` passes `title` and `children` to `FilterSection`. It also passes `label`, optional `count` and `defaultChecked` to `FilterCheckbox`.

Props let the same components display different data without copying the code.

The project is still in progress. Search, filters and product buttons are currently for the layout only.
