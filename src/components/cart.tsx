import { useCart } from "@/app/dashboard/layout";
import { urlFor } from "@/lib/sanityClient";
import { Heart, Trash2 } from "lucide-react";
import { memo, useState } from "react";

function Cart({ product ,rmv,setDeleted,isDeleted } : any) {
  const [isDeleting, setDeleting] = useState(false);
  const { totalCarts, setTotalCarts } = useCart();

  async function deleteCart(productId: string) {
    setDeleting(true);
    const res = await rmv(productId);
    // console.log(res);
    setDeleted(!isDeleted)
    setTotalCarts(totalCarts -1)
    setDeleting(false);
  }

  return (
    <div className="flex mt-2 gap-5 items-start">
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
            <p>Quantity {product.quantity}</p>
          </div>

          <div className="flex justify-start gap-2 items-center">
            <Heart
              className={`cursor-pointer ${
                product.wishlist && "text-[#049eaf]"
              }`}
              size={20}
            />
            {isDeleting ? (
              <>
                <div className="relative">
                  <span className="absolute top-[-8px] flex h-10 w-10">
                    <span className="animate-ping absolute top-[-8px] left-[-10px] inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
                  </span>
                </div>
              </>
            ) : (
              <Trash2 onClick={() => deleteCart(product._id)} size={20} />
            )}
          </div>
        </div>
        <div className="text-black">MRP: ${product.price}</div>
      </div>
    </div>
  );
}


export default memo(Cart);