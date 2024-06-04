import { useState } from 'react';

const TesterHeroSec = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const emailValue = email.trim();

    if (emailValue) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailValue }),
        });

        if (response.ok) {
          setMessage('Successfully subscribed!');
          setEmail('');
        } else {
          const errorData = await response.json();
          setMessage(`Failed to subscribe: ${errorData.error}`);
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      }
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <section id="testerhero" className="bg-blue-50 testhero-section pt-20 sm:pt-10">
      <style>
        {`
          .heroTitleLarge-container {
            display: flex;
            justify-content: center;
          }
          .heroTitleLarge-container img {
            max-width: 240px;
          }
        `}
      </style>
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="heroTitleLarge-container">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/heroTitleLarge.png"
            alt="titleheader"
            height={240}
            priority={1}
          />
        </div>
        <div className="px-0 md:px-60">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/WaitingListHeroTitle.png"
            alt="titleheader"
            height={240}
            priority={1}
          />
        </div>
        <p className="mt-5 mb-6 text-xl font-baloo font-regular text-slate-950 sm:px-24">
          Be a part of something huge for ADHDers. Join the waiting list today and be the first to get access. <br /> Plus, get over 50% discount on the final release, worth $129+. Secure your spot now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mb-4">
          <input
            id="emailInput"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0 w-full sm:w-auto"
          />
          <button
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-400 to-blue-700 rounded-lg px-5 py-3 text-lg font-baloo font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Secure your spot!
          </button>
        </div>
        {message && <p className="mt-2 text-red-500">{message}</p>}
        <div className="mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
          <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4">
            <img
              style={{ width: "100%" }}
              loading="eager"
              src="https://raw.githubusercontent.com/joshiebudd/neuronotion/main/public/RoundedUBProdDemo.png"
              alt="template"
              width={1920}
              height={1280}
              priority={1}
            />
          </div>
        </div>
        <div className="mt-6 text-3xl font-baloo font-semibold">COMING SOON! JOIN THE WAITING LIST TODAY!</div>
      </div>
    </section>
  );
};

export default TesterHeroSec;
