import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CleriCall Video",
  description: "Video conferencing app",
  icons:{
    icon:'/icons/clericall.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
     appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/clericall.png",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#590696",
            colorInputBackground: "#fff",
            colorInputText: "#161925",
          },
        }}
      >
      <body className={`${inter.className} bg-dark-2`}>{children}
      <Toaster />
      </body>
      
      </ClerkProvider>
    </html>
  );
}
