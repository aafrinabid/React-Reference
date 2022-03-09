import React, { Component } from 'react'
class Refrence extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
      }

      componentDidMount(){
          this.inputRef.current.focus()
          console.log(this.inputRef)
      }
      handleChange=()=>{
          alert(this.inputRef.current.value)
          }
      
  render() {
    return (
      <div>
<input type="text" ref={this.inputRef} />
<button onClick={this.handleChange} >click</button>
      </div>
    )
  }

}

export default Refrence