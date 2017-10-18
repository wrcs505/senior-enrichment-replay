import React, { Component } from 'react';
import axios from 'axios';
import SingleAircraft from './SingleAircraft';
import store from '../store';
import {fetchAllAircraft} from '../store/action-creators'
export default class AllAircraft extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
    }

    //when this component arrives on dom. 
    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState()); 
        })
        store.dispatch(fetchAllAircraft());
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
    
    render(){
        console.log('state!!', this.state);
        return (
            <div> 
                {
                    this.state.aircraft.map((craft, index) => {
                        return (
                            <SingleAircraft craft={craft}/>
                        )
                    })
                }
            </div>
        );
    }


}