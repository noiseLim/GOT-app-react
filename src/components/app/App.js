import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from 'reactstrap';
import './app.css';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';



export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    delRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button 
                                className='rand' 
                                color="warning"
                                onClick={this.delRandomChar}>Delete Random Character</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
} 
