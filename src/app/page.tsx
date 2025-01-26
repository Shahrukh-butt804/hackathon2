"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handlelogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(user);
    setLoading(false);
    if (res) {
      router.push("/dashboard");
      localStorage.setItem("user", JSON.stringify(res));
    }
  };

  return (
      <section>
        <div className=" max-w-screen-xl px-3 py-8 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-0">
            <div className="md:col-span-3">
              <img
                src={"./op2.png"}
                width={800}
                height={800}
                className="rounded"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-4 max-w-lg self-start md:max-w-none">

              <div className="flex justify-center mt-2 mb-5 md:mb-16 md:mt-6 flex-col items-center gap-0">
                <h1 className="mt-4 text-3xl tracking-wider md:text-5xl font-bold">
                  COMFORTY
                </h1>
                <p className="text-xs md:text-sm tracking-wide whitespace-nowrap font-semibold">
                  Wide Selection of Premium Sofas And Chairs
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-2xl flex  font-semibold text-gray-900 sm:text-3xl">
                  Log in
                </h2>
                <h6 className="text-sm font-thin">Enter your details below</h6>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <input
                  onChange={handleChange}
                  className="border-none focus:outline-none"
                  type="text"
                  placeholder="Enter Your Email"
                  name="email"
                />
                <hr className="h-[1.5px] bg-slate-500" />
                <input
                  onChange={handleChange}
                  className="border-none focus:outline-none"
                  type="password"
                  placeholder="Enter Your password"
                  name="password"
                />
                <hr className="h-[1.5px] bg-slate-500" />
              </div>
              <Link
                className="text-[#ed7f89] hover:text-[#d85560] text-[16px]"
                href="/signup"
              >
                don't you have an account?
              </Link>
              <div className="flex flex-col md:flex-row gap-4 items-start  md:items-center justify-between">
                <Button
                  onClick={handlelogin}
                  className="bg-[#ed7f89] hover:bg-[#d85560] text-white w-[143px] h-[56px]"
                >
                  {loading ? (
                    <div className="flex items-center justify-center min-h-screen">
                      <div className="w-5 h-5 border-4 border-white border-dashed rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
                <a
                  className="underline text-[#ed7f89] hover:text-[#d85560] text-[16px]"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
