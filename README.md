# React Workshop 1

A React project for practising components and props by recreating the LITE.SHOP product listing page from the workshop reference.

## Technologies

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react

## Run locally

Use Node.js 22.12+ or 24+ and npm.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Progress

- Set up the React and TypeScript project with Vite.
- Configure Tailwind CSS and install lucide-react.
- Add the shop header with navigation, search input and Lucide icons.
- Add a menu that opens and closes on smaller screens.
- Add the sidebar with categories, a price slider, availability and a sale card.
- Arrange the sidebar and main content using a responsive grid.
- Store the six reference products in a typed array in `src/data/products.ts`.
- Display the products using a reusable card and a responsive product grid.
- Show ratings, badges, sale prices and the sold-out product from the reference.

This is the second checkpoint, roughly halfway through the planned work. Sorting, pagination, the newsletter and the footer will be added later. The search and filter controls currently only display the reference layout; they do not filter products. Category counts are copied from the supplied HTML reference. Cart, account, quick-view and favorite buttons are visual elements at this stage. The watch is sold out, so its cart and quick-view buttons are disabled, matching the reference. No notification service is connected to its Notify Me button.

Product names, prices, ratings and image URLs come from the supplied HTML reference. Images are loaded from Unsplash and require an internet connection.

## Components and props

| Component | Purpose | Props |
| --- | --- | --- |
| `App` | Arranges the header, sidebar and main content. | None |
| `Header` | Displays the logo, navigation, search, cart and account icons. | None |
| `Sidebar` | Combines the filter sections and the sale card. | None |
| `FilterSection` | Gives each group of controls a title and consistent spacing. | `title`, `children` |
| `FilterCheckbox` | Displays a reusable checkbox with a label and optional count. | `label`, `count`, `defaultChecked` |
| `ProductGrid` | Loops through the products and arranges their cards in one, two or three columns. | `products` |
| `ProductCard` | Displays one product's image, category, name, rating, availability, badge and prices. | `product` |

`App` renders `Header` and `Sidebar`. Inside `Sidebar`, each `FilterSection` receives a title and its controls through `children`. The category and availability controls reuse `FilterCheckbox` with different labels.

Props let the same component display different content without repeating its markup. For example, `count` is used for category totals and left out for availability. `defaultChecked` selects All Products when the page first loads.

`Header` uses `useState` to keep track of whether the mobile menu is open.

`App` also passes the product array to `ProductGrid` through the `products` prop. `ProductGrid` uses `map()` to pass each product object to `ProductCard`. Each list item uses the product's `id` as its React key.

The `Product` type describes the product data. The optional `oldPrice` field is only present for discounted products, while `inStock` controls the sold-out styling and disabled buttons. Passing a product object as a prop lets the same card show all six products without copying the card markup.
