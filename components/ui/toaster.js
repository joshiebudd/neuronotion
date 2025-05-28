import React from 'react';
import { useToast } from '../../hooks/use-toast';
import { cn } from '../../lib/utils';

const Toast = ({ toast, onDismiss }) => {
  return (
    <div
      className={cn(
        "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
        "bg-white border border-gray-200",
        toast.variant === 'destructive' && "bg-red-50 border-red-200"
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-1">
            {toast.title && (
              <p className={cn(
                "text-sm font-medium",
                toast.variant === 'destructive' ? "text-red-800" : "text-gray-900"
              )}>
                {toast.title}
              </p>
            )}
            {toast.description && (
              <p className={cn(
                "mt-1 text-sm",
                toast.variant === 'destructive' ? "text-red-700" : "text-gray-500"
              )}>
                {toast.description}
              </p>
            )}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              className={cn(
                "inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                toast.variant === 'destructive' && "text-red-400 hover:text-red-500"
              )}
              onClick={() => onDismiss(toast.id)}
            >
              <span className="sr-only">Close</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Toaster = () => {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-4 pointer-events-none">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}; 