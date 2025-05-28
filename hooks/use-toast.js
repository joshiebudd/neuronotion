import { useState, useCallback, useEffect } from 'react';

let toastCount = 0;
let globalToasts = [];
let listeners = [];

// Global toast manager
const addToast = (toast) => {
  const id = ++toastCount;
  const newToast = { ...toast, id };
  globalToasts = [...globalToasts, newToast];
  
  // Notify all listeners
  listeners.forEach(listener => listener(globalToasts));
  
  // Auto remove after duration
  setTimeout(() => {
    removeToast(id);
  }, toast.duration || 5000);
  
  return id;
};

const removeToast = (id) => {
  globalToasts = globalToasts.filter(toast => toast.id !== id);
  listeners.forEach(listener => listener(globalToasts));
};

export const useToast = () => {
  const [toasts, setToasts] = useState(globalToasts);

  useEffect(() => {
    // Add this component as a listener
    listeners.push(setToasts);
    
    // Cleanup on unmount
    return () => {
      listeners = listeners.filter(listener => listener !== setToasts);
    };
  }, []);

  const toast = useCallback(({ title, description, variant = 'default', duration = 5000 }) => {
    return addToast({ title, description, variant, duration });
  }, []);

  const dismiss = useCallback((id) => {
    removeToast(id);
  }, []);

  return {
    toast,
    dismiss,
    toasts,
  };
}; 