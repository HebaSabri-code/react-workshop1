# React Workshops 1 and 2

A shop page based on the workshop's HTML reference.
Built with React, Vite, TypeScript, Tailwind CSS and lucide-react.

## Run

```bash
npm install
npm run dev
```

To build: `npm run build`.

## Components

- `App`: puts the page together.
- `Header`: shows the logo, navigation and search box.
- `SearchInput`: shows the search field on desktop and mobile.
- `Sidebar`: shows the filters and sale card.
- `FilterSection`: groups filters under a title.
- `FilterCheckbox`: shows a checkbox with a label.
- `ProductGrid`: displays the list of products.
- `ProductCard`: shows one product's image, name, price and other details.
- `SortSelect`: lets you choose the product order.
- `Pagination`: shows the reference page buttons.
- `Newsletter`: shows the email signup section.
- `Footer`: shows the shop info, social icons and links.
- `FooterLinks`: shows one group of footer links.
- `Logo`: shows the shop logo in the header and footer.

## Props

`App` passes `products` to `ProductGrid`, which passes each `product` to `ProductCard`.

`App` stores `searchTerm` with `useState` and passes it with `onSearchChange` to `Header`. `Header` passes `value` and `onChange` to `SearchInput` to keep the search field connected to state.

`Sidebar` passes `title` and `children` to `FilterSection`. It also passes `label`, optional `count` and `defaultChecked` to `FilterCheckbox`.

`App` passes `value` and `onChange` to `SortSelect` to update the order, and `currentPage` to `Pagination` to highlight page 1.

`Footer` passes `title` and `links` to `FooterLinks`. `Header` passes `light` to `Logo` for its white version. `App` includes the newsletter and footer below the products.

Props let the same components display different data without copying the code.

Price sorting works. Newest restores the reference order. Best Selling is disabled because there is no sales data.

Search filters products by name as you type and ignores upper/lower case and spaces around the text. The result count updates automatically. An empty search shows all products, and a search with no matches shows a message.

Filters, product buttons, pagination and footer links are still for the layout only. The email form checks the address but does not send subscriptions. Product images load from Unsplash and need an internet connection.
