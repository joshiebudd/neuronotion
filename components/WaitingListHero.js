import { useState } from 'react';

const WaitingListHeroSec = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const firstNameValue = firstName.trim();
    const emailValue = email.trim();

    if (firstNameValue && emailValue) {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName: firstNameValue, email: emailValue }),
        });

        const responseData = await response.json();
        if (response.ok) {
          setMessage('Successfully subscribed!');
          setFirstName('');
          setEmail('');
        } else {
          setMessage(`Failed to subscribe: ${responseData.error || responseData.message || 'Unknown error'}`);
        }
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      }
    } else {
      setMessage('Please enter a valid first name and email address.');
    }
  };

  return (
    <section id="testerhero" className="bg-prim testhero-section pt-20 sm:pt-10">
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
      <div className="mx-auto max-w-screen-xl px-4 py-32 text-center">
        <div className="px-0 md:px-60">
          <img
            style={{ width: "100%" }}
            loading="eager"
            src="https://NeuroNotionPullZonw.b-cdn.net/WaitingListHeroTitleFinal.png"
            alt="titleheader"
            height={240}
            priority={1}
          />
        </div>
        <p className="mt-5 mb-6 text-xl font-pop font-regular text-white sm:px-24">
          The new approach to managing your life with ADHD <br /> Join the waiting list to secure a spot and get more information!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mb-4">
          <input
            id="firstNameInput"
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0 w-full sm:w-auto"
          />
          <input
            id="emailInput"
            type="email"
            placeholder="Enter your best email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0 w-full sm:w-auto"
          />
          <button
            onClick={handleButtonClick}
            className="StandardCheckoutButton inline-block bg-sec rounded-lg px-5 py-3 text-lg font-pop font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Secure your spot
          </button>
        </div>
        <p className="mt-2 text-sm font-pop font-regular text-white">No Spam e-mails. Unsubscribe in one click, at any time.</p>
        {message && (
          <p className={`mt-2 ${message.includes('Successfully') ? 'text-accent4' : 'text-white'}`}>
            {message}
          </p>
        )}
        <div className="mx-auto max-w-screen-xl pt-4 pb-2 text-center lg:px-12">
          <div className="centered-image max-w-full sm:max-w-[950px] sm:pt-2 pb-4">
            <img
              style={{ width: "100%" }}
              loading="eager"
              src="https://NeuroNotionPullZonw.b-cdn.net/nopeaking.png"
              alt="template"
              width={1920}
              height={1280}
              priority={1}
            />
          </div>
        </div>
        <div className="mt-6 text-2xl font-pop font-semibold text-white">👀 More Details Coming Soon! Join the Waiting List to be the first to find out!</div>
      </div>
    </section>
  );
};

export default WaitingListHeroSec;
