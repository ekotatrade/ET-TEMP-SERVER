type UserRole = 'user' | 'admin' | 'superAdmin';

export const generateUserId = async (role: UserRole) => {
  const rolePrefix: Record<UserRole, string> = {
    user: 'UA',
    admin: 'ET',
    superAdmin: 'ET',
  };

  const randomNumericString = Math.random().toString().substring(2, 10);
  const userId = `${rolePrefix[role]}${randomNumericString}`;

  return userId.padEnd(8, '0').substring(0, 8);
};
