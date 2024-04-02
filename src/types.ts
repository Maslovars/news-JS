export type ISource = {
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
};

export type ISourcesList = {
    status: string;
    sources: ISource[];
};

export type ISourcesClass = {
    draw(data: ISource[]): void;
};

export interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Pick<ISource, 'id' | 'name'>;
    title: string;
    url: string;
    urlToImage: string;
}

export interface INewsList {
    status: string;
    totalResults: number;
    articles: INews[];
}

export interface INewsClass {
    draw(data: INews[]): void;
}

export interface IResp {
    endpoint: string;
    options?: IOptions;
}

export interface IOptions {
    [key: string]: string;
}

export type ICallback<T> = (data: T) => void;

export enum StatusCodes {
    code_401 = 401,
    code_404 = 404,
}
