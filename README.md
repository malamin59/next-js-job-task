# Job Task - Next.js 15 Application

## Project Description
This is a simple Next.js 15 application demonstrating public and protected pages with authentication using NextAuth.js.  
Users can explore products publicly and, after logging in, access a protected dashboard to add new products.

The project showcases core Next.js features such as the App Router, route handlers for APIs, and integration with NextAuth.js for authentication.

## Features
- **Landing Page (/)**: Includes Navbar, Hero section, Product Highlights, and Footer  
- **Login (/login)**: Authentication using NextAuth.js with Google or credential login  
- **Product List (/products)**: Displays a list of products with name, description, and price  
- **Product Details (/products/[id])**: View full details of a single product  
- **Protected Add Product Page (/dashboard/add-product)**: Accessible only to logged-in users; allows adding new products  
- **Optional Enhancements**: Loading spinners for form submissions, toast notifications, theme toggle (light/dark)

## Technologies Used
- Next.js 15 (App Router)  
- NextAuth.js for authentication  
- Route Handlers (`/api`) for backend operations  
- React, Tailwind CSS (optional for styling)  

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/malamin59/next-js-job-task.git
   live site - https://job-task-puce.vercel.app 
