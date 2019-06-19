import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

        // this is first example
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }



          // this is 2 example
    // function Welcome(props){
    //   alert(props.name);
    //   return <h1>{props?props.name:""} {props.age}</h1>
    // }



        // this is 3 example
    // function Welcome(props){
    //   //alert(props.name);
    //   return <h1>{props.name} {props.age} {props.address} {props.pincode}</h1>
    // }



  //   function Comment(props){
  //       return(
  //         <div className="Comment">
  //           <div className="UserInfo">
  //             <img className="Avatar" 
  //               src={props.author.avatarUrl} 
  //               alt={props.author.name} 
  //             />
  //             <div className="UserInfo-name">
  //               {props.author.name}
  //             </div>
  //           </div>
  //           <div className="Comment-text">
  //             {props.text}
  //           </div>
  //           <div class="Comment-date">
  //             {FormData(props.date)}
  //           </div>
  //         </div>

  //       );
  //   }

  // const comment = {
  //   date: new Date(),
  //   text: "Learing Reactjs",
  //   author: {
  //     name: 'Hello react',
  //     avatarUrl: 'https://placekitten.com/g/64/64',
  //   },
  // };
function Element(props){
  return <h1>{props.name} {props.age} {props.address} {props.pincode} {props.officeAddress}</h1>
}

function Comment(props){
  return <h1>{props.line} {props.name} {props.age} {props.address} {props.pincode} {props.officeAddress}</h1>
}

function List(props){
  return <h1>{props.name} {props.age} {props.address} {props.pincode} {props.officeAddress}</h1>
}
function Head(props){
  return <h1>{props.name} {props.age} {props.address} {props.pincode} {props.officeAddress}</h1>
}

class App extends Component {
 constructor(){
   this.state={
     name:"raja"
   }
 }


  render() {
    return (

        


              // this is first example
    //  <div>
    //    <Welcome name = "sara" />
    //    <Welcome name = "gopi" />
    //    <Welcome name = "babu" />
    //  </div>





              // this is 2 example
    // <div>
    //   <Welcome name= "babu" />
    //   <Welcome age= "25" />
    // </div>




            // this is 3 example
    // <div> 
    //   <Welcome name = "raja" />
    //   <Welcome age = "26" />
    //   <Welcome address = "chennai, ongole, guntur" />
    //   <Welcome pincode = "600097" />
    // </div>

    //   <Comment date = {comment.date} 
    //           text = {comment.text}
    //           author = {comment.author}
    //   />
      
      
      <React.Fragment>
        <Element name= " raja" />
        <Element age= "25" />
        <Element address="cheaani" />
        <Element pincode= "600097" />
        <Element officeAddress= "chennai one office" />
        <Comment line="--------------------" />
        <Comment  name= "babu"/>
        <Comment age= "26"/>
        <Comment address= "ongole" />
        <Comment pincode= "523001" />
        <Comment officeAddress= "ongole center office" />
        <div class="main">
          <table>
            <thead>
              <th><Head name="Name" /></th>
              <th><Head age="Age" /></th>
              <th><Head address="Address" /></th>
              <th><Head pincode="Pincode" /></th>
              <th><Head officeAddress="OfficeAddress" /></th>
              
             

            </thead>
            <tbody>
                <tr>
              <td><List name= "gopi" /></td>
              <td><List age= "25" /></td>
              <td><List address= "cheaani" /></td>
              <td><List pincode= "600097" /></td>
              <td><List officeAddress= "ongole" /></td>
              </tr>
              <tr>
                <td><List name="murali" /></td>
                <td><List age="26" /></td>
                <td><List address= "cheaani" /></td>
                <td><List pincode= "600096" /></td>
                <td><List officeAddress= "Nellore" /></td>
              </tr>
              <tr>
                <td><List name="hari" /></td>
                <td><List age="27" /></td>
                <td><List address= "Thoraipakkam" /></td>
                <td><List pincode= "600095" /></td>
                <td><List officeAddress= "Tirupati" /></td>
              </tr>
              <tr>
                <td><List name="gowtham" /></td>
                <td><List age="27" /></td>
                <td><List address= "200 feet road" /></td>
                <td><List pincode= "600092" /></td>
                <td><List officeAddress= "Adyar" /></td>
              </tr>
              <tr>
                <td>{this.state.name}</td>
                <td><List age="27" /></td>
                <td><List address= "200 feet road" /></td>
                <td><List pincode= "600094" /></td>
                <td><List officeAddress= "Chittoor" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>



      // <React.Fragment>
      //   <Comment  name= "babu"/>
      // </React.Fragment>

    );
  }
}

export default App;
