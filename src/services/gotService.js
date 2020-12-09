export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook)
    }
    
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }
    
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }
    
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    
    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }
    
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    checkData(data) {
        if (data) {
            return data
        } else {
            return 'sorry, no data'
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.checkData(char.name),
            gender: this.checkData(char.gender),
            born: this.checkData(char.born),
            died: this.checkData(char.died),
            culture: this.checkData(char.culture)
        };
    }

    _transformHouse(house) {
        return {
            id: this._extractId(house),
            name: this._extractId(house.name),
            region: this._extractId(house.region),
            words: this._extractId(house.words),
            titles: this._extractId(house.titles),
            overload: this._extractId(house.overload),
            ancestraWeapons: this._extractId(house.ancestraWeapons)
        }
    }

    _transformBook(book) {
        return {
            id: this._extractId(book),
            name: this._extractId(book.name),
            numberOfPages: this._extractId(book.numberOfPages),
            publiser: this._extractId(book.publiser),
            released: this._extractId(book.released)
        }
    }
}