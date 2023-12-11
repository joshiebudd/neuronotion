const ThankYouPage = () => {
  return (
    <>
      <HeaderSection />
      <div className="card w-full max-w-md rounded-lg p-4 text-center shadow dark:bg-gray-800">
        {/* Success icon */}
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          {/* ... */}
        </div>
        {/* Thank You message */}
        <p className="mb-4 text-lg font-semibold text-black">Thank you for your purchase!</p>
        <p className="text-black">Please check your emails for a link to the template and instruction on how to install, order confirmation, and receipt. <br /> You can close this page now. </p>
      </div>
      <FooterSection />
    </>
  );
};
