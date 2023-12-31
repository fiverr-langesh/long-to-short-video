'use client'

import React, { createContext, useState } from "react";

export const RecentActivityContext = createContext(null);

export default function RecentActivityProvider({ children }) {
  const [recent, setRecent] = useState([]);
  const [credit, setCredit] = useState(0);
  const[processingTime,setProcessingTime]=useState(0);

  return (
    <RecentActivityContext.Provider value={{ recent, setRecent,credit,setCredit,processingTime,setProcessingTime }}>
      {children}
    </RecentActivityContext.Provider>
  );
}
