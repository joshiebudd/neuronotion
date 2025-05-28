import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { useToast } from "../hooks/use-toast";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Moosend API configuration
      const apiKey = '23c32516-00e9-4498-92e0-362ef13f1ee4';
      const mailingListId = 'f38f07f0-4a63-4846-9dc7-116a40c733f9';
      const apiUrl = `https://api.moosend.com/v3/subscribers/${mailingListId}/subscribe.json?apikey=${apiKey}`;
      
      // Prepare the payload
      const payload = {
        Name: name,
        Email: email,
        HasExternalDoubleOptIn: false
      };
      
      // Make API request to Moosend
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      // Check if the API call was successful
      if (data && data.Code === 0) {
        toast({
          title: "Success!",
          description: "Thank you for joining our waitlist. We'll be in touch soon!",
        });
        
        // Reset form and close modal
        setName('');
        setEmail('');
        onClose();
      } else {
        // Handle API error
        console.error('Moosend API error:', data);
        toast({
          title: "Something went wrong",
          description: data.Error || "Could not add you to the waitlist. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Connection Error",
        description: "Could not connect to our service. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative bg-white w-full max-w-md rounded-lg shadow-lg p-6 border border-gray-200",
          "animate-in fade-in-50 zoom-in-95 duration-200"
        )}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Join the Waitlist</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <p className="text-gray-600 mb-6">
          Be among the first to try Claudia by Neuro when we launch.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 mr-2"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WaitlistModal; 