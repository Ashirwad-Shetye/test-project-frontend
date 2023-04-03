import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { IoMdAdd } from "react-icons/io";

function Instructors() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {});

  return (
    <div className="mx-5 md:px-5 space-y-5">
      <div className="flex items-center justify-between h-12">
        <h1 className="font-roboto text-2xl mb-2 mx-2">Instructors</h1>
        <Link href={"/addInstructor"}>
          <Button onClick={() => setIsLoading} size="lg" variant="default">
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                <IoMdAdd className="text-lg" />
                <h1 className="">New Instructor</h1>
              </>
            )}
          </Button>
        </Link>
      </div>
      <div className="space-x-5 flex scrollhide overflow-x-scroll pb-10"></div>
    </div>
  );
}

export default Instructors;
