import React, { Component } from 'react';
import axios from 'axios';
import SingleAircraft from './SingleAircraft';
import store from '../store';
import {fetchAllAircraft} from '../store/action-creators'
export default class AllAircraft extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     aircraft: []
        // }
        this.state = store.getState();
    }

    //when this component arrives on dom. 
    //event emitter. upon subscription we're saying listen on('storechange')
    componentDidMount(){
        
        
        // axios.get('/api/aircraft')
        //     .then(res => {
        //         let airplanes = res.data; 
        //         console.log('AIRPLANES', airplanes);
        //         this.setState({aircraft: airplanes});
        //     })
        
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState()); 
        })
        store.dispatch(fetchAllAircraft());
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    
    render(){
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
