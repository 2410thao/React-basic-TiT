import React from 'react';
class Mycomponent extends React.Component {

    //key:value
    state={
        name : 'Thaodepzai',
        channel: 'thaoviStore'
    }


    handleOnChangeName=(event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleClickButton=()=>{
        alert('Click me')
    }

    /*
    JSX => return block
    fragment
    */
    render() {

        let name = 'Thao';
        return(
            <>

             <div className='thu1'>
                <input value={this.state.name} type='text' onChange={(event)=> this.handleOnChangeName(event)}/>
               Shop Say hi! {this.state.channel}
            </div>

            <div className='thu2'>
                Hello TiT, my name is {this.state['name']}
            </div>

            <div className='thu3'>
                <button onClick={()=>{this.handleClickButton()}}>Click me</button>
            </div>
            </>
           
        )
    }

}

export default Mycomponent;
