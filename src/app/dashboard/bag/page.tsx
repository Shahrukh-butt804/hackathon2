"use client";

import Footer from "@/components/Footer";
import Spinner from "@/components/SpinnerTAIL";
import { Button } from "@/components/ui/button";
import { fetchCartsByUserId, getProductById } from "@/lib/getPost";
import { urlFor } from "@/lib/sanityClient";
import { clearCart } from "@/lib/user";
import { Heart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function Page() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const user= JSON.parse(localStorage.getItem("user") as string)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCartsByUserId(user._id);
      console.log("THE RESPONSE", res);
      if (res.length > 0) {
        setCartItems(res[0]?.items);
      } else {
        setMessage("No Cart items found");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function calculateCart() {
      let price = 0; // Temporary variable to accumulate the total price
      const updatedProducts = []; // Temporary array to store products

      for (const { _ref } of cartItems || []) {
        try {
          const res = await getProductById(_ref);
          price += res.price; // Update the total price
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

  async function handleOrder(){
    setLoading(true)
    const res= await clearCart(user._id)
    setLoading(false)
    if(res){
      Swal.fire({
        title: "Order Placed",
        text: "Your order has been placed successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/dashboard");
        }
      });
    }
  }

  return (
    <>
      <section className="px-5 md:px-10 lg:px-[300px] mb-2 md:mb-24">
        <div className="mx-auto max-w-screen-xl  py-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:items-center md:gap-10">
            <div className="md:col-span-3 ">
              <h1 className="my-5 text-xl font-semibold">Bag</h1>

              {products?.length > 0 ? (
                products?.map((product: any) => {
                  return (
                    <div className="flex gap-5 items-start">
                      <div>
                        <img
                          src={urlFor(product?.image)?.url()}
                          alt="image"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="flex justify-between w-full p-1 ">
                        <div className="flex flex-col gap-2 text-slate-500 text-sm">
                          <p className="text-black text-lg">{product.title}</p>
                          <p>{product.description.slice(0, 50)}</p>
                          <div className="flex justify-between items-center">
                            <p>size L</p>
                            <p>Quantity 1</p>
                          </div>

                          <div className="flex justify-start gap-2 items-center">
                            <Heart size={20} />
                            <Trash2 size={20} />
                          </div>
                        </div>
                        <div className="text-black">MRP: ${product.price}</div>
                      </div>
                    </div>
                  );
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
                    {loading ? 
                     <div className="flex items-center justify-center min-h-screen">
                     <div className="w-5 h-5 border-4 border-white border-dashed rounded-full animate-spin"></div>
                   </div>
                    : "Member Checkout"}
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
