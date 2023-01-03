import "../styles/globals.css"; // Import global stylesheets here
import Header from "./Header";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next JS 13 - toDoList</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
