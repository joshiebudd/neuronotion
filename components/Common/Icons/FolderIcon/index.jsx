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
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"></path>
      </svg>
    </div>
  );
};

export default Index;
