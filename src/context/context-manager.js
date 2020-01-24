import React from 'react';

const ContextManager = React.createContext({
    activeUserData: {},
    allItems: [],
    errorMessage: "",
    successMessage: "",
    loadingMessage: "",
    getActiveUsersStats: () => {},
    getAllItems: () => {},
    updateStatesTrades: () => {},
    removeTrade: () => {},
    updateErrorMessage: () => {},
    clearErrorMessage: () => {},
    updateSuccessMessage: () => {},
    clearSuccessMessage: () => {},
    updateLoadingMessage: () => {},
    clearLoadingMessage: () => {},
    scrollToErrorMessage: () => {}
});

export default ContextManager;