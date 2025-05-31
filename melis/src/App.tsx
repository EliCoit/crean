import { Authenticated, Unauthenticated, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import CheckoutPage from "./components/CheckoutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

type Page = "home" | "products" | "about" | "blog" | "checkout";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [cart, setCart] = useState<Array<{id: string, quantity: number, price: number, name: string}>>([]);
  const initializeAllData = useMutation(api.products.initializeAllData);

  // Initialize sample data on first load
  useEffect(() => {
    initializeAllData({}).catch(console.error);
  }, [initializeAllData]);

  const addToCart = (product: {id: string, price: number, name: string}) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }
      return [...prev, {id: product.id, quantity: 1, price: product.price, name: product.name}];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item => 
        item.id === id ? {...item, quantity} : item
      ));
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "products":
        return <ProductsPage onAddToCart={addToCart} />;
      case "about":
        return <AboutPage />;
      case "blog":
        return <BlogPage />;
      case "checkout":
        return <CheckoutPage cart={cart} onUpdateQuantity={updateCartQuantity} total={cartTotal} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        cartItemCount={cartItemCount}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}
