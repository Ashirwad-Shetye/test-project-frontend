"use client";

import React, { Children } from "react";

function ButtonBlue({ onClick, children }: any) {
  return (
    <button className="flex items-center justify-center space-x-1 bg-accentBlue p-1 rounded-md hover:scale-105 duration-150 hover:shadow-lg">
      {children}
    </button>
  );
}

export default ButtonBlue;
