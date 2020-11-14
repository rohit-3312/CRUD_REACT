import React from 'react';
import {connect} from 'react-redux'
import {fetchStream ,editStreams}  from '../../actions'
import StreamForm from './StreamForm' 
import _ from 'lodash'

class StreamEdit extends React.Component {

    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id)
    }
 
    onSubmit=(fromValue)=>{
      this.props.editStreams(this.props.match.params.id, fromValue)
    } 

    render(){
        if(!this.props.stream)
          {
            return null
          }

    return (
    <div>
    <h3> EDIT A STREAM </h3>
    <StreamForm onSubmit={ this.onSubmit} initialValues={_.pick(this.props.stream,'title', 'description')}/>
        
    </div>
    
    
    )
    }
}

const mapStatesToProps=(state,ownProps)=>{
  return {stream: state.streams[ownProps.match.params.id]}

}

export default connect(mapStatesToProps,
  {fetchStream ,editStreams}
  )( StreamEdit);
