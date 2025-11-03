import './globals.css'

export const metadata = {
  title: 'AI Career Roadmap',
  description: 'Your personalized roadmap to becoming an AI Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
