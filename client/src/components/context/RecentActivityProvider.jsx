'use client'

import React, { createContext, useState } from "react";

export const RecentActivityContext = createContext(null);

export default function RecentActivityProvider({ children }) {
  const [recent, setRecent] = useState([]);

  return (
    <RecentActivityContext.Provider value={{ recent, setRecent }}>
      {children}
    </RecentActivityContext.Provider>
  );
}
