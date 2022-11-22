import Link from 'next/link';
import Navigationbar from './navigationbar';
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigationbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
