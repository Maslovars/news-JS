import News from './news/news';
import Sources from './sources/sources';
import { INews, ISource, ISourcesList, INewsList } from '../../types';

export class AppView {
    readonly news: News;
    readonly sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Readonly<INewsList>): void {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Readonly<ISourcesList>): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
