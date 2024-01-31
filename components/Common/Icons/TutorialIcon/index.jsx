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
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"></path>
      </svg>
    </div>
  );
};

export default Index;
