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
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => {
            this.view.drawSearch(data);
            this.view.drawSources(data);
            (document.querySelector('.category') as HTMLElement).addEventListener('change', () =>
                this.view.drawSources(data)
            );
            (document.querySelector('.country') as HTMLElement).addEventListener('change', () =>
                this.view.drawSources(data)
            );
        });
    }
}

export default App;
