import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateAddressOne, updateAddressTwo, updateAddressThree } from '../../ducks/reducer.js';

class WizardNine extends Component {

    render(){
        const { updateAddressOne, updateAddressTwo, updateAddressThree } = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={ ( e ) => updateAddressOne( e.target.value ) }/>
                    <input type="text" placeholder="Line Two" onChange={ ( e ) => updateAddressTwo( e.target.value ) }/>
                    <input type="text" placeholder="Line Three" onChange={ ( e ) => updateAddressThree( e.target.value ) }/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { addressOne, addressTwo, addressThree } = state;
    return { addressOne, addressTwo, addressThree };
}

export default connect( mapStateToProps, { updateAddressOne, updateAddressTwo, updateAddressThree } )( WizardNine );