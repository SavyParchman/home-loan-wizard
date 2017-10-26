import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCredit } from '../../ducks/reducer.js'

class WizardSeven extends Component {
    render(){

        const { updateCredit } = this.props;

        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={ ( e ) => updateCredit( 'Excellent' ) }>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={ ( e ) => updateCredit( 'Good' ) }>Good</button></Link>
                        <Link to="/wEight"><button onClick={ ( e ) => updateCredit( 'Fair' ) }>Fair</button></Link>
                        <Link to="/wEight"><button onClick={ ( e ) => updateCredit( 'Poor' ) }>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { credit } = state;
    return { credit };
}

export default connect( mapStateToProps, { updateCredit } )( WizardSeven );