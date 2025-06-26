import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import Cart from '@/components/Cart';

const Navbar = () => {
  const navigate = useNavigate();
  const { getCartItemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItemsCount = getCartItemsCount();

  return (
    <>
      <nav className="bg-navy-deep text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 h-14 w-14">
              <Link to="/">
                <img
                  src="/favicon.png"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="hover:text-luxury-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="hover:text-luxury-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="hover:text-luxury-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/help"
                  className="hover:text-luxury-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/policies"
                  className="hover:text-luxury-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Policies
                </Link>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className={`relative hover:text-luxury-gold ${isCartOpen ? 'text-black' : 'text-white'}`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-luxury-gold text-navy-deep text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/admin')}
                className="text-white hover:text-luxury-gold"
              >
                <User className="h-5 w-5" />
              </Button> */}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile cart button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className={`relative hover:text-luxury-gold ${isCartOpen ? 'text-black' : 'text-white'}`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-luxury-gold text-navy-deep text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy-deep border-t border-gray-700">
              <Link
                to="/"
                className="hover:text-luxury-gold block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-luxury-gold block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="hover:text-luxury-gold block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/help"
                className="hover:text-luxury-gold block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/policies"
                className="hover:text-luxury-gold block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Policies
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
