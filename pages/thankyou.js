import Head from 'next/head';
import HeaderSection from '../components/HeaderSection'; 
import FooterSection from '../components/FooterSection'; 

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>Thank You for Your Purchase</title>
      </Head>

      <Header />

      <div className="card w-full max-w-md rounded-lg p-4 text-center shadow dark:bg-gray-800">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </div>
        <p className="mb-4 text-lg font-semibold text-gray-900">Thank you for your purchase!</p>
        <p className="text-gray-600">Please check your emails for a link to the template and instruction on how to install, order confirmation, and receipt. <br /> You can close this page now. </p>
      </div>
    </div>
  );
}

