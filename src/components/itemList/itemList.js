import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class ItemList extends Component {

    gotService = new gotService();
    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
            })
            .catch(() => this.onError());
    }

    componentDidCatch() {
        this.setState({
            charList: null,
            error: true
        })
    }

    onError() {
        this.setState({
            charList: null,
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if (this.state.error) {
            return (
                <div className="random-block rounded">
                    <ErrorMessage/>
                </div>
            )
        }

        if (!charList) {
            return (
                <div className="random-block rounded">
                    <Spinner/>
                </div>
            )
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}