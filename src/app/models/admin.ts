export class Admin {
    id: number;
    name: string;
    familyName: string;
    mobile: string;
    createdAt: number;
    token: {
      token: string;
      expires: number;
    };
    birthday: number;
    image: string;
  }
