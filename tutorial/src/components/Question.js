import React, {component} from 'react'

class Answer extends Component {
    
    render(){
        const item = this.props.item
        return(
            <div>
                <h4>{item.question}</h4>
                <h6>{item.author}</h6>
            </div>
            )
    }
}

export default Answer