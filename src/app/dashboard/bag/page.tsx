"use client";

import Footer from "@/components/Footer";
import Spinner from "@/components/SpinnerTAIL";
import Cart from "@/components/cart";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/getPost";
import { clearCart, fetchCartsByUserId, removeItemFromCart } from "@/lib/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../layout";
function Page() {
  
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  const { setTotalCarts } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCartsByUserId(user._id);
      console.log("THE RESPONSE", res[0]?.items);
      if (res[0]?.items.length > 0) {
        setCartItems(res[0]?.items);
      } else {
        setMessage("No Cart items found");
      }
    };
    fetchData();
  }, [isDeleted]);

  useEffect(() => {
    async function calculateCart() {
      let price = 0; // Temporary variable to accumulate the total price
      const updatedProducts = []; // Temporary array to store products

      for (const {
        product: { _ref },
        quantity,
        wishlist,
      } of cartItems || []) {
        try {
          const res = await getProductById(_ref);
          price += res.price * quantity; // Update the total price
          res.quantity = quantity;
          res.wishlist = wishlist;
          updatedProducts.push(res); // Add the product to the list
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }

      setTotalPrice(price); // Set the total price once all promises resolve
      setProducts(updatedProducts); // Update the product list
    }

    calculateCart();
  }, [cartItems]);

  async function rmvFromCart(productId: string) {
    const res = await removeItemFromCart(user._id, productId);
    // console.log(res)
  }

  async function handleOrder() {
    setLoading(true);
    const res = await clearCart(user._id);
    setLoading(false);
    if (res) {
      Swal.fire({
        title: "Order Placed",
        text: "Your order has been placed successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTotalCarts(0);
      router.push("/dashboard");
    }
  }

  return (
    <>
      <section className="px-5 md:px-10 lg:px-[300px] mb-2 md:mb-24">
        <div className="mx-auto max-w-screen-xl  py-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:items-center md:gap-10">
            <div className="md:col-span-3 ">
              <h1 className="my-5 text-xl font-semibold">Bag</h1>

              {products?.length > 0 && !message ? (
                products?.map((product: any) => {
                  return <Cart product={product} setDeleted={setDeleted} isDeleted={isDeleted} rmv={rmvFromCart} />;
                })
              ) : message ? (
                <p>{message}</p>
              ) : (
                <Spinner />
              )}
            </div>

            <div className="md:col-span-1 self-start">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-xl  text-gray-900 sm:text-2xl">Summary</h2>

                <div className="flex text-[12px] justify-between items-center mt-5">
                  <p>Subtotal</p>
                  <p>${totalPrice}</p>
                </div>
                <div className="flex text-[12px] justify-between items-center mt-3">
                  <p>Estimated Delivery & Handling</p>
                  <p>Free</p>
                </div>
                <hr className="h-[1.5px] bg-slate-500" />
                <div className="flex text-[12px] justify-between items-center mt-5">
                  <p>Total</p>
                  <p>${totalPrice}</p>
                </div>
                <hr className="h-[1.5px] bg-slate-500" />

                <div className="text-center md:text-start lg:text-center">
                  <Button
                    onClick={handleOrder}
                    className="bg-[#029FAE] w-52 p-5 mt-5 rounded-full text-white"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center min-h-screen">
                        <div className="w-5 h-5 border-4 border-white border-dashed rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      "Member Checkout"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
