import React from 'react';
class ChildComponent extends React.Component {

   
    /*
    JSX => return block
    fragment
    */
    render() {

        console.log('>>> call render: ', this.state)
        return(
            <>

           <div>Child Component {this.props.name}</div>

            </>
           
        )
    }

}

export default ChildComponent;
