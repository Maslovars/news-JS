import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    readonly controller: AppController;
    readonly view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: Event): void =>
            this.controller.getNews(e, (data): void => this.view.drawNews(data))
        );
        this.controller.getSources((data): void => this.view.drawSources(data));
    }
}

export default App;
