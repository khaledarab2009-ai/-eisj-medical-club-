import "./globals.css";

export const metadata = {
  title: "EISJ Medical Club",
  description:
    "Official website of the EISJ Medical Club — Learn • Lead • Heal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
