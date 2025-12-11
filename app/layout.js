import './globals.css'

export const metadata = {
  title: 'LMS Sample',
  description: 'Sample LMS for intern test',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
