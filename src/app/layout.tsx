import './globals.css'
import SessionProvider from './SessionProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <SessionProvider>
        {children}
      </SessionProvider>
      <footer>
          <h5 className="ftr">
            <b>
              Designed & Maintained with{" "}
              <span className="text-red-800">&#9825;</span> by{" "}
              <a href="https://linktr.ee/i_m_k_s_s" target="_blank">
                Sunny
              </a>{" "}
              &copy; 2024 All rights reserved
            </b>
          </h5>
        </footer>
      </body>
    </html>
  )
}