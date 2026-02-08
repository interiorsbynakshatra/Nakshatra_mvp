import React, { createContext, useContext, useState } from 'react';

const ConsultationContext = createContext();

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

export const ConsultationProvider = ({ children }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupSource, setPopupSource] = useState('auto');

  const openConsultationPopup = (source = 'button') => {
    setPopupSource(source);
    setIsPopupVisible(true);
  };

  const closeConsultationPopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isPopupVisible,
        popupSource,
        openConsultationPopup,
        closeConsultationPopup
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export default ConsultationContext;
