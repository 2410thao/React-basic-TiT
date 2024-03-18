import React from 'react';
import ChildComponent from './ChildComponent';
class Mycomponent extends React.Component {

    //key:value
    state={
       firstName: '',
       lastName: ''
    }

    handleFirstName=(event)=>{
        this.setState({
            firstName: event.target.value
           
        })
    }

    handleLastName=(event)=>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        console.log('>> click submit ',this.state)
    }
    /*
    JSX => return block
    fragment
    */
    render() {

        console.log('>>> call render: ', this.state)
        return(
            <>

            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" value={this.state.firstName} onChange={(event)=>this.handleFirstName(event)}/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" value={this.state.lastName} onChange={(event)=>this.handleLastName(event)}/><br/><br/>
                <input type="submit" value="Submit" onClick={(event)=>this.handleSubmit(event)}/>
            </form> 

            <ChildComponent name={'1'}/>
            <ChildComponent name={'2'}/>
            <ChildComponent name={'3'}/>
           
            </>
        
        )
    }

}

export default Mycomponent;
