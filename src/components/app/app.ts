import { IAppController, IAppView, INewsList, ISourcesList } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    readonly controller: IAppController;
    readonly view: IAppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event): void =>
            this.controller.getNews(e, (data: INewsList): void => this.view.drawNews(data))
        );
        this.controller.getSources((data: ISourcesList): void => {
            this.view.drawSearch(data);
            this.view.drawSources(data);
            document?.querySelector('.category')?.addEventListener('change', () => this.view.drawSources(data));
            document?.querySelector('.country')?.addEventListener('change', () => this.view.drawSources(data));
        });
    }
}

export default App;
