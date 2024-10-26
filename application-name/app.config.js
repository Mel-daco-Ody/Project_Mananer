import 'dotenv/config'; // Đảm bảo bạn đã cài đặt dotenv
export default ({ config }) => {
  return {
    ...config,
    extra: {
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
  };
};
