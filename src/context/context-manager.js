import React from 'react';

const ContextManager = React.createContext({
    selectedUser: {},
    users: [],
    inventory: [],
    items: [],
    trades: [],
    teams: [],
    updateSelectedUserState: () => {},
    updateStatesTrades: () => {},
    removeTrade: () => {},
    updateErrorMessage: () => {},
    clearErrorMessage: () => {},
    scrollToErrorMessage: () => {}
});

export default ContextManager;