import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/mockData';

export type PageType = 'home' | 'about' | 'products' | 'gallery' | 'team' | 'blog' | 'faq' | 'contact';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ToastState {
  message: string;
  type: 'success' | 'info' | 'error';
  show: boolean;
}

interface AppContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  selectedArticleId: string | null;
  setSelectedArticleId: (id: string | null) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  hideToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<PageType>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'success',
    show: false,
  });

  // Smooth scroll back to top on page transition
  const setCurrentPage = (page: PageType) => {
    // Reset reading article if navigating away from blog or to it
    if (page !== 'blog') {
      setSelectedArticleId(null);
    }
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type, show: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        showToast(`Jumlah "${product.name}" di keranjang diperbarui.`, 'success');
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      showToast(`"${product.name}" berhasil ditambahkan ke keranjang.`, 'success');
      return [...prevCart, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const item = prevCart.find(i => i.product.id === productId);
      if (item) {
        showToast(`"${item.product.name}" dihapus dari keranjang.`, 'info');
      }
      return prevCart.filter(i => i.product.id !== productId);
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast('Keranjang belanja berhasil dikosongkan.', 'info');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.includes(productId);
      if (exists) {
        showToast('Dihapus dari produk impian.', 'info');
        return prevWishlist.filter(id => id !== productId);
      } else {
        showToast('Ditambahkan ke produk impian.', 'success');
        return [...prevWishlist, productId];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedArticleId,
        setSelectedArticleId,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
