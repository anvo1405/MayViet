const useAuth = () => {
  const accessToken = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");

  const isAuthenticated = !!accessToken && !!user;

  return {
    isAuthenticated,
    user: user ? JSON.parse(user) : null,
  };
};

export default useAuth;
