import "./TopBar.css";

function TopBar({ sidebar }) {
  return (
    <div className="topbar-container">
      <a
        href="#"
        className="topbar-menu-bars"
        onClick={() => {
          sidebar(true);
        }}
      >
        <i className="fas fa-bars" />
      </a>
    </div>
  );
}

export default TopBar;
