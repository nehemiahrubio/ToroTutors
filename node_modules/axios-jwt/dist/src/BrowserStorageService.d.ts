export declare class BrowserStorageService {
    private _storage;
    constructor(storage: Storage);
    remove(key: string): Promise<void>;
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
}
//# sourceMappingURL=BrowserStorageService.d.ts.map