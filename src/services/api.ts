// src/services/api.js
export const logout = async () => {
    try {
      await fetch('https://casecraze-9yzl.vercel.app/api/auth/logout', { mode: 'no-cors' });
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  