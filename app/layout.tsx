// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "JRAVIS Dashboard",
  description: "Mission 2040 Automation Control Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        {children}
      </body>
    </html>
  );
}
