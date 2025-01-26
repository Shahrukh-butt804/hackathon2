"use client";
import NavSection from "@/components/NavSection";
import { fetchCartsByUserId } from "@/lib/getPost";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// Create a context to share state
const CartContext = createContext<{
  totalCarts: number;
  setTotalCarts: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

// Custom hook to access the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <NavSection />
      <div className="">{children}</div>
    </CartProvider>
  );
}

// Context provider component
function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();
  const [totalCarts, setTotalCarts] = useState(0);

  useEffect(() => {
    const user= JSON.parse(localStorage.getItem("user") as string)
    if(!user){
      router.push("/")
    }
 }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userId = JSON.parse(localStorage.getItem("user") || "{}")._id;
      const res = await fetchCartsByUserId(userId);
      setTotalCarts(res[0]?.items.length || 0);
    };

    fetchData();
  }, []);

  return (
    <CartContext.Provider value={{ totalCarts, setTotalCarts }}>
      {children}
    </CartContext.Provider>
  );
}
