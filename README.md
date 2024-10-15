# ShoppyGlobe

ShoppyGlobe is a modern e-commerce web application built with **React** and **Redux**. It allows users to browse through various products, view product details, and manage their shopping cart.

## Features

- **Product Listing**: Browse a list of products fetched from an external API.
- **Product Details**: View detailed information about each product.
- **Cart Functionality**: Add, remove, and update the quantity of items in the cart.
- **Loader Animation**: Display loading spinners while data is being fetched.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing the global state (cart functionality).
- **React Router**: For navigation between pages.
- **CSS Modules**: For component-level styling.
- **React Loader Spinner**: For loader animations.
- **DummyJSON API**: As the data source for products.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/shoppyglobe.git
    ```
2. Navigate to the project directory:
    ```bash
    cd shoppyglobe
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the application:
    ```bash
    npm start
    ```
   The app will run at `http://localhost:5177`.

## Project Structure

shoppyglobe/ ├── public/ ├── src/ │ ├── components/ │ │ ├── Header/ │ │ ├── ProductItem/ │ │ ├── ProductList/ │ │ ├── ProductDetail/ │ │ ├── CartItem/ │ ├── Redux/ │ │ ├── cartSlice.js │ ├── App.js │ ├── index.js ├── README.md ├── package.json └── .gitignore



## Usage

- **Browse Products**: View products on the homepage.
- **Product Details**: Click on a product to view its details.
- **Cart Management**: Add products to the cart, adjust quantities, or remove items.

## Redux State Management

- **addToCart**: Adds a product to the cart or updates its quantity.
- **removeFromCart**: Removes a product or reduces its quantity.
- **incrementQuantity**: Increases the quantity of a product in the cart.
- **decrementQuantity**: Decreases the quantity of a product in the cart.

## Future Enhancements

- Implement a product search feature.
- make responsive.
- Add category filters to make browsing easier.
- Integrate a user login/signup system for personalized carts.
- Include a payment gateway for checkout.


