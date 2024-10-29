import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: User;
    token: string;
    is_active: boolean;
    is_available: boolean;
  }

  interface User extends DefaultUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    device_key: string;
    otp: any;
    img: string;
    user_type: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    message: string;
    status: boolean;
    data: {
      is_active: boolean;
      is_available: boolean;
      user: {
        id: number;
        name: string;
        email: string;
        phone: string;
        city: string;
        device_key: string;
        otp: any;
        img: string;
        user_type: string;
      };
      token: string;
    };
  }
}
