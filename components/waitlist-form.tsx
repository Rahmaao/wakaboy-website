"use client";

import { FormEvent, useState, useRef, useCallback } from 'react';

const WaitlistForm = () => {
  const [buttonText, setButtonText] = useState('Join Waitlist');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setButtonText('Submitting...');

    const formData = new FormData(event.currentTarget);
    const email = formData.get('EMAIL') as string;

    // Use JSONP to bypass CORS
    const script = document.createElement('script');
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    
    window[callbackName] = (response) => {
      delete window[callbackName];
      document.body.removeChild(script);
      
      console.log('Mailchimp response:', response);  // Log the full response

      if (response.result === 'success') {
        console.log('Submission successful');
        setButtonText('Successful!');
        formRef.current?.reset();
      } else {
        console.error('Submission failed:', response.msg);
        setButtonText('Please try again');
      }
      setIsSubmitting(false);
    };

    const url = new URL(event.currentTarget.action);
    url.searchParams.append('c', callbackName);
    url.searchParams.append('EMAIL', email);

    console.log('Submitting to URL:', url.toString());  // Log the submission URL

    script.src = url.toString();
    script.onerror = (error) => {
      console.error('Script loading error:', error);
      setButtonText('Please try again');
      setIsSubmitting(false);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <form
      ref={formRef}
      className="w-full h-[50px] md:h-[64px] flex"
      action="https://gmail.us13.list-manage.com/subscribe/post-json?u=af99de3e0eada42d21f170c00&amp;id=1938236ea9&amp;f_id=00d159e1f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        placeholder="Input your email address"
        className="text-[#001145] rounded-l-[8px] pl-5 text-[11px] md:text-[15px] w-[70%] h-full"
        required
      />
      <input
        type="hidden"
        name="b_af99de3e0eada42d21f170c00_1938236ea9"
        tabIndex={-1}
        value=""
      />
      <button
        type="submit"
        id="mc-embedded-subscribe"
        className="text-[#FFEF54] font-normal text-[11px] md:text-[15px] xl:text-[18px] flex items-center justify-center h-full w-[30%] bg-[#001145] hover:bg-[#FFEF54] hover:border hover:text-[#001145] hover:border-[#001145] rounded-r-[8px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        disabled={isSubmitting}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default WaitlistForm;