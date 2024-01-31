const Index = ({ color }) => {
  return (
    <div className="w-20 h-20 flex items-center justify-center relative">
      <div
        className="rounded-full w-full h-full absolute"
        style={{ backgroundColor: `${color}22` }}
      ></div>
      <svg
        color={color && color}
        fill="currentColor"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="InsertInvitationIcon"
        aria-label="fontSize large"
        width={36}
        height={36}
      >
        <path d="M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"></path>
      </svg>
    </div>
  );
};

export default Index;
