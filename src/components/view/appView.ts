import News from './news/news';
import Sources from './sources/sources';
import { INews, ISource, ISourcesList, INewsList } from '../../types';
import Search from './search/search';

export class AppView {
    readonly news: News;
    readonly sources: Sources;
    readonly search: Search;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.search = new Search();
    }

    public drawNews(data: Readonly<INewsList>): void {
        const values: INews[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Readonly<ISourcesList>): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public drawSearch(data: Readonly<ISourcesList>): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.search.draw(values);
    }
}

export default AppView;
