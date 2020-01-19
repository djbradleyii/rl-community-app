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
    removeTrade: () => {}
});

export default ContextManager;