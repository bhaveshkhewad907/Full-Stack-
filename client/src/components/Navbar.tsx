const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Brand</div>

      <div style={styles.links}>
        {navItems.map((item) => (
          <a key={item} href="#" style={styles.link}>
            {item}
          </a>
        ))}
      </div>

      <button style={styles.button}>Get Started</button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
    padding: "1rem 2rem",
    background: "#111827",
    color: "#ffffff",
    borderRadius: "12px",
    boxSizing: "border-box" as const,
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "0.05em",
  },
  links: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  button: {
    background: "#4f46e5",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "0.75rem 1.2rem",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Navbar;
