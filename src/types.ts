export type ISource = {
    id: string;
    category: string;
    country: string;
    description: string;
    language: string;
    name: string;
    url: string;
};

interface IResponse {
    status: string;
}

export interface ISourcesList extends IResponse {
    sources: ISource[];
}

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

export interface INewsList extends IResponse {
    totalResults: number;
    articles: INews[];
}

export interface IResp {
    endpoint: string;
    options?: IOptions;
}

export interface IOptions {
    [key: string]: string;
}

export type ICallback<T> = (data: Readonly<T>) => void;

export enum StatusCodes {
    code_401 = 401,
    code_404 = 404,
}
