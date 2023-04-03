"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Loader2 } from "lucide-react";

function LoginAs() {
  const [selectInstructor, setSelectInstructore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectInstructor = () => {
    setSelectInstructore(true);
    setLoading(true);
  };

  return (
    <div className="bg-slate-100/10 h-[16rem] min-w-[20rem] p-4 rounded-lg space-y-2">
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader2 size={60} className="animate-spin opacity-60" />
        </div>
      ) : (
        <>
          {selectInstructor ? (
            <>
              <div className="h-full flex items-center justify-center">
                <div className="space-y-2 h-full flex flex-col justify-center">
                  <h1 className="text-xl font-roboto font-bold">
                    Select Instructor
                  </h1>
                  <select className="bg-black/50 w-48 rounded-md p-2">
                    <option value="01">askljf</option>
                    <option value="01">askljf</option>
                    <option value="01">askljf</option>
                    <option value="01">askljf</option>
                    <option value="01">askljf</option>
                    <option value="01">askljf</option>
                  </select>
                  <Button
                    onClick={handleSelectInstructor}
                    className="w-32 mx-auto"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="font-roboto text-2xl font-bold">
                Welcome to EdTech!
              </h1>
              <p className="font-light">Where tech meets education</p>
              <div className="space-y-5">
                <h1 className="text-xl font-bold">Login as</h1>
                <div className="flex space-x-10 justify-between items-center">
                  <Link href={"/adminPanel"}>
                    <Button onClick={() => setLoading(true)} className="w-32">
                      Administrator
                    </Button>
                  </Link>
                  <Button onClick={handleSelectInstructor} className="w-32">
                    Instructor
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default LoginAs;
