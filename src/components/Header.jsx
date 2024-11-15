export function Header({ handleLeft, handleRight, nameleft, nameRight }) {
  return (
    <header className="top-bar">
      <button onClick={handleLeft} className="top-bar-button cancel">
        {nameleft}
      </button>
      <button onClick={handleRight} className="top-bar-button continue">
        {nameRight}
      </button>
    </header>
  );
}
