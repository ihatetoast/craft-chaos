const Footer = () => {
  const date = new Date();
  const now = date.getFullYear()
  return (
    <footer className="flex-none">

      <small>Copyright {now} by the anxious cells in IHateToast&apos;s brains.
      </small>
    </footer>
  );
};

export default Footer;
