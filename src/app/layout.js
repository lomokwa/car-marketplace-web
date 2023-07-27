import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}> 
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
};
