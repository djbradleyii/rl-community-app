const ActiveUserService = {
  saveUserData(userData) {
    window.sessionStorage.setItem('activeUser', JSON.stringify(userData));
  },
  getUserData() {
    const userData = window.sessionStorage.getItem('activeUser');
    return JSON.parse(userData);
  },
  clearUserData() {
    window.sessionStorage.removeItem('activeUser');
  },
  hasUserData() {
    return !!ActiveUserService.getUserData();
  },
};

export default ActiveUserService;
