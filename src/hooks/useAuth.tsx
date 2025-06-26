const useAuth = () => {
  // const isAuthenticated = !!localStorage.getItem("token");
  const isAuthenticated = false;
  return { isAuthenticated };
};

export default useAuth;
