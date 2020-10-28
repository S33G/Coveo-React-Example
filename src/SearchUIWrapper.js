import React, { Component } from 'react';
import * as Coveo from 'coveo-search-ui';
import 'coveo-search-ui/bin/css/CoveoFullSearch.css';
import './SearchUICustom.css';

export class SearchUI extends Component {
    componentDidMount() {
        Coveo.SearchEndpoint.configureSampleEndpointV2();
        // this.refs used for demonstration purposes only - It is deprecated and not recommended.
        Coveo.init(this.refs.searchInterface);
    }

    render() {
        return (
            <div id="search" className='CoveoSearchInterface' data-enable-history="true" ref='searchInterface'>
                {this.props.children}
            </div>
        );
    }
}
