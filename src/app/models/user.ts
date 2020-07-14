export class User {
    id: string;
    name: string;
    familyName: string;
    birthday: number;
    mobile: string;
    createdAt: number;
    gender: number;
    token: {
      token: string;
      expires: number
    };
    profileImageId: string;
    profileImage: string;
    city: string;
    country: string;
    email: string;
    provience: string;
    status: number;
  }