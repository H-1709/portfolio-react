function Footer() {
  return (
    <footer id="contact" className="footer">
      <h3 className="footer-title">Connect With Me</h3>
      <div className="divider"></div>

      <div className="footer-grid">
        {/* Email */}
        <div className="footer-item">
          <div className="footer-icon">✉️</div>
          <div>
            <div className="footer-label">E-mail</div>
            <a href="mailto:hirrajyaguru@gmail.com">
              hirrajyaguru@gmail.com
            </a>
          </div>
        </div>

      


        {/* Social */}
        <div className="footer-item">
          <div className="footer-icon">🔗</div>
          <div>
            <div className="footer-label">LINKS</div>
            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/hir-rajyaguru/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/H-1709"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rajyaguru Hir
      </div>
    </footer>
  );
}

export default Footer;
