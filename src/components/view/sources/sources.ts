import './sources.css';
import { ISource } from '../../../types';

class Sources {
    public draw(data: ISource[]): void {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const category = document.querySelector('.category') as HTMLSelectElement;
        const country = document.querySelector('.country') as HTMLSelectElement;

        data.forEach((item: ISource): void => {
            if (
                item.category === category?.options[category.selectedIndex].textContent &&
                item.country === country?.options[country.selectedIndex].textContent
            ) {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        const sources = document.querySelector('.sources') as HTMLTemplateElement;
        const news = document.querySelector('.news') as HTMLTemplateElement;
        if (sources && news) {
            sources.innerHTML = '';
            news.innerHTML = '';
            sources.append(fragment);
        }
    }
}

export default Sources;
