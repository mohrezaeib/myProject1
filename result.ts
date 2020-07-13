export class Result {
    object: any;
    page: Page;
    status: boolean;
    message: string;
}
export class Page {
    total: number;
    currentCount: number;
    pageNo: number;
}
