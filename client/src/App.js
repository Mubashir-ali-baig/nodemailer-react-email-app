import React,{Component} from 'react';
import {Form,FormGroup,Input,Button,Label} from 'reactstrap';
import axios from 'axios'
class App extends React.Component {
  constructor(){
  super()
    this.state = { 
    name:'',
    sender_email:'',
    reciever_email:'',
    subject:'',
    message:''
   }

   this.handleChange=this.handleChange.bind(this)
   this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  async handleSubmit(e){
    e.preventDefault()
    const {name,sender_email,reciever_email,subject,message}=this.state
    const form = await axios.post('/api/form',{
      name:name,
      sender_email:sender_email,
      reciever_email:reciever_email,
      subject:subject,
      message:message
    })
  }
  render() { 
    return ( 
      <Form onSubmit={this.handleSubmit} style={{width:'600px'}}>
      <FormGroup>
      <Label for="name">Name:</Label>
      <Input 
      type="text"
      name="name"
      placeholder="Enter your name"
      onChange={this.handleChange}
      />
      </FormGroup>
      <FormGroup>
      <Label for="sender_email">Sender Email:</Label>
      <Input 
      type="email"
      name="sender_email"
      placeholder="Enter your valid email"
      onChange={this.handleChange}
      />
      </FormGroup>
      <FormGroup>
      <Label for="reciever_email">Reciever Email:</Label>
      <Input 
      type="email"
      name="reciever_email"
      placeholder="Enter Reciever valid email"
      onChange={this.handleChange}
      />
      </FormGroup>
      <FormGroup>
      <Label for="subject">Subject:</Label>
      <Input 
      type="text"
      name="subject"
      placeholder="Enter email subject"
      onChange={this.handleChange}
      />
      </FormGroup>
      <FormGroup>
      <Label for="message">Message:</Label>
      <Input 
      type="textarea"
      name="message"
      placeholder="Enter your name"
      onChange={this.handleChange}
      />
      </FormGroup>
      <Button>Submit</Button>
      
      </Form>

     );
  }
}
 
export default App;