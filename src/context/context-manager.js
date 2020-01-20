import React from 'react';

const ContextManager = React.createContext({
    activeUserData: {},
    allItems: [],
    errorMessage: "",
    successMessage: "",
    getActiveUsersStats: () => {},
    getAllItems: () => {},
    updateStatesTrades: () => {},
    removeTrade: () => {},
    updateErrorMessage: () => {},
    clearErrorMessage: () => {},
    updateSuccessMessage: () => {},
    clearSuccessMessage: () => {},
    scrollToErrorMessage: () => {}
});

export default ContextManager;