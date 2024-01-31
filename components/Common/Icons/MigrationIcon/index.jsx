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
        <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4zm5.98-1v-3H22V8h-7.01V5L11 9z"></path>
      </svg>
    </div>
  );
};

export default Index;
