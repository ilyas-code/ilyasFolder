import React from 'react';
import './styles/styles.css'
import './App.css';
import Section from './components/Section';
import Header from './components/Header';
import Quiz from './components/quiz'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ansrs:[],
      score:null,
      tAndf:[],
      show:{display:"none"}
    };
    
    this.handleChange = this.handleChange.bind(this)
    this.showScore=this.showScore.bind(this)
  }
 
handleChange(event){
  var value = event.target.value
  var name = event.target.name
    
  this.setState((prevState)=>{
      prevState.ansrs[name]=value;
      return {ansrs:prevState.ansrs}
    }
  )
}

showScore(event){
  event.preventDefault()
  var scr = 0;
  var tF = [];
  var shw = {display:"block"};
  for(let i=0; i<=(Quiz.length-1);i++){
    if(Quiz[i].Ans === this.state.ansrs[i]){
      scr = scr + 1;
      tF[i]=true;
    }else{tF[i]=false}
  }
      
    
    this.setState((prevState)=>{
      prevState.score = scr
      prevState.tAndf = tF
      prevState.show = shw
      return {
        score:prevState.score,
        tAndf: prevState.tAndf,
        show:prevState.show
      }
    }
  )

    
}
 componentDidMount(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',true);
  
  xhr.onload = function(){
      if (this.status === 200) {
          var text = JSON.parse(this.responseText);
          console.log(text.results);
      }
  }
  
  xhr.send();

 }

  render(){
    const answers = Quiz.map((ab)=>{ return <li key={ab.id}>{ab.Ans}</li>})
    const qsection = Quiz.map((Qiz)=>{
      return(
      <Section 
      key={Qiz.id} 
      id= {Qiz.id} 
      Question={Qiz.Question} 
      Options={Qiz.Options} 
      handleChange = {this.handleChange} 
      true = {this.state.tAndf}
      />
    )
  }
)




    return (
      <div className="App">
        <Header/>
         
        {qsection}
         
        <div style={this.state.show} className="scores">
          <h1>Your Score : {this.state.score+"/"+Quiz.length}</h1>
          <div className="answers">
            <h1>Correct Answers:</h1>
            <ol>{answers}</ol>
          </div>
        </div>
         
          
        <div className="s-button">
          <button onClick={this.showScore}>Submit Answer</button>
        </div>
        
      </div>
    )
  }
  
}

export default App;
