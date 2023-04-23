import React, { createContext, useState } from "react";
export const courseContext = createContext();
export default function CourseProvider({ children }) {
  const selectedProgram = "DS031221";
  const [selectedModule, setSelectedModule] = useState('topic');
  const handleSelectedModule = (name) => {
    setSelectedModule(name);
  };
  return (
    <courseContext.Provider
      value={{ selectedProgram, selectedModule, handleSelectedModule }}
    >
      {children}
    </courseContext.Provider>
  );
}
