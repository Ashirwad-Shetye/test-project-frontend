"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p>Something went wrong while loading this page.</p>
      <Button size="lg" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
