import React from 'react';
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import {fetchStream, deleteStreams} from '../../actions'
import {Link} from 'react-router-dom'


class  StreamDelete extends React.Component {

  componentDidMount(){
   // console.log(this.props.match.params.id)
    this.props.fetchStream(this.props.match.params.id)
    
     
  }


   action(){

      return(
              <React.Fragment>
                    <button onClick={()=> this.props.deleteStreams(this.props.match.params.id)} className="ui primary button"> DELETE </button> 
                    <Link to='/' className="ui button"> CANCEL </Link> 
              </React.Fragment>
      )
   }


   renderContent(){
    if (!this.props.stream){
      return 'are you sure you want to delete'
    }
      return `are you sure you want to delete  ${this.props.stream.title} `
   }
 
    render(){
     
  return (
    
  
 
  <Modal
  title="DELETE STREAM"
  content={this.renderContent()}
  actions={this.action()}
  onDismiss=  { ()=>  history.push('/')}

  />
  )
    }

}

const mapStatesToProps=(state,ownProps)=>{
  return {stream: state.streams[ownProps.match.params.id]}

}

export default connect(mapStatesToProps,
  {fetchStream ,deleteStreams}
  )(StreamDelete)
