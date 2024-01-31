const Index = ({ color }) => {
  return (
    <span className="flex items-center justify-center relative">
      <svg
        color={color && color}
        fill="currentColor"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="InsertInvitationIcon"
        aria-label="fontSize large"
        width={28}
        height={28}
      >
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
    </span>
  );
};

export default Index;
