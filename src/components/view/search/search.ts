import { ISource } from '../../../types';
import './search.css';

class Search {
    private countries = new Set<string>();
    private categories = new Set<string>();

    public draw(data: ISource[]): void {
        const category = document.querySelector('.category') as HTMLTemplateElement;
        const country = document.querySelector('.country') as HTMLTemplateElement;
        data.forEach((i: ISource) => {
            this.countries.add(i.country);
            this.categories.add(i.category);
        });
        this.categories.forEach((i) => {
            const option: HTMLOptionElement = document.createElement('option');
            option.textContent = i;
            category?.append(option);
        });
        this.countries.forEach((i) => {
            const option: HTMLOptionElement = document.createElement('option');
            option.textContent = i;
            country?.append(option);
        });
    }
}

export default Search;
