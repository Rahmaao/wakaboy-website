"use client";

import { FormEvent, useState, useRef, useCallback } from 'react';

const WaitlistButton2 = ({ isSubmitting, onClick }) => (
  <button
    type="submit"
    className="text-[#FFEF54] font-normal text-[11px] lg:text-[13px] flex items-center justify-center h-9 w-24 md:h-[45px] md:w-[125px] bg-[#001145] hover:bg-[#FFEF54] hover:border hover:text-[#001145] hover:border-[#001145] rounded-[8px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    disabled={isSubmitting}
    onClick={onClick}
  >
    {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
  </button>
);

const WaitlistForm2 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const email = inputRef.current?.value;

    if (!email) {
      setMessage('Please enter an email address.');
      setIsSubmitting(false);
      return;
    }

    const script = document.createElement('script');
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    
    window[callbackName] = (response) => {
      delete window[callbackName];
      document.body.removeChild(script);
      
      console.log('Mailchimp response:', response);

      if (response.result === 'success') {
        setMessage('Thank you for subscribing!');
        if (inputRef.current) inputRef.current.value = '';
      } else {
        if (response.msg.toLowerCase().includes('already subscribed')) {
          setMessage('This email is already on our list. Thank you for your interest!');
        } else {
          setMessage('An error occurred. Please try again later.');
          console.error('Submission failed:', response.msg);
        }
      }
      setIsSubmitting(false);
    };

    const url = new URL('https://gmail.us13.list-manage.com/subscribe/post-json?u=af99de3e0eada42d21f170c00&id=1938236ea9&f_id=00d159e1f0');
    url.searchParams.append('c', callbackName);
    url.searchParams.append('EMAIL', email);

    script.src = url.toString();
    script.onerror = (error) => {
      console.error('Script loading error:', error);
      setMessage('An error occurred. Please try again later.');
      setIsSubmitting(false);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col">
        <input
          ref={inputRef}
          type="email"
          className="text-[#001145] h-10 md:h-12 w-[85%] rounded-[8px] pl-5 text-xs md:text-sm mb-2 md:mb-4"
          placeholder="Input your email address"
          required
        />
        <div className="w-[85%]">
          <WaitlistButton2 isSubmitting={isSubmitting} onClick={() => {}} />
        </div>
      </form>
      {message && (
        <p className="mt-2 text-xs md:text-sm text-center w-[85%] mx-auto">{message}</p>
      )}
    </div>
  );
};

export default WaitlistForm2;