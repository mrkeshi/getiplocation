import React from "react";
export default class SearchBox extends React.Component {
    state = {
        input: ''
    }


    ChangeIp(event) {
        this.setState({
            input:event.target.value
        })
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.props.Changer(this.state.input)
        }
      };

   

    
    ChangeIp = this.ChangeIp.bind(this)
    handleKeyDown=this.handleKeyDown.bind(this)
    
    render() {
        return <> <div className="divIn">
            <input value={this.state.input} onChange={this.ChangeIp} onKeyDown={this.handleKeyDown} type="text" placeholder="Search ip location..." />
            <div className="search"></div>
        </div>
            <br />
        </>
    }
}