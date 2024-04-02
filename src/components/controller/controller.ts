import AppLoader from './appLoader';
import { ICallback, INewsList, ISourcesList } from '../../types';
import { ENDPOINTS } from '../../constants';

class AppController extends AppLoader {
    public getSources(callback: ICallback<ISourcesList>): void {
        super.getResp<ISourcesList>(
            {
                endpoint: ENDPOINTS.sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: ICallback<INewsList>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: ENDPOINTS.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
