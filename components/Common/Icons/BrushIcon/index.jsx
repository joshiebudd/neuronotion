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
        <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3m13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41"></path>
      </svg>
    </div>
  );
};

export default Index;
