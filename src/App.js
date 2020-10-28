import React, { Component } from 'react';
import { SearchUI } from './SearchUIWrapper';

class App extends Component {

    getTemplateContent() {
        // It's important this method returns a string
        return (`
           <div class="coveo-result-frame">
               <div class="coveo-result-row">
                 <a class="CoveoResultLink"></a>
               </div>
               <div class="coveo-result-row">
                 <p class="CoveoExcerpt"></p>
               </div>
           </div>
        `);
    }

    render() {
        return (
            <div>
                <SearchUI>
                    <div className="CoveoSearchbox"></div>
                    <div className="CoveoFacet" data-field="@objecttype"></div>
                    <div
                        className="CoveoResultList"
                        data-layout="list"
                        data-wait-animation="fade"
                        data-auto-select-fields-to-include="true"
                        ref="resultList">
                        <script
                            className='result-template'
                            type='text/underscore'
                            dangerouslySetInnerHTML={{ __html: this.getTemplateContent() }}>
                        </script>
                    </div>
                </SearchUI>
            </div>
        );
    }
}

export default App;
