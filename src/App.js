import React from "react";
import "./styles/styles.css";
import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import LogHeader from "./components/LogHeader";
// import Quiz from "./components/quiz";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
// import axios from "axios";
import { BrowserRouter as Router,
  Switch,
  Route, } from "react-router-dom";
  // Link,
  // Redirect,
  // useHistory,
  // useLocation, useParams, useRouteMatch




function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/quizUrl/:id" component={MainSection} />
           
            
          

          <Route path="/SignUp">
            <UserSignUp />
          </Route>

          <Route path="/SignIn">
            <UserSignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App



class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Quiz: [],
      ansrs: [],
      score: null,
      tAndf: [],
      show: { display: "none" },
      id:props.match.params.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.showScore = this.showScore.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;
    var name = event.target.name;


    this.setState((prevState) => {
      prevState.ansrs[name] = value;
      return { ansrs: prevState.ansrs };
    });
  }

  showScore(event) {
    event.preventDefault();
    var scr = 0;
    var tF = [];
    var shw = { display: "block" };
    for (let i = 0; i <= this.state.Quiz.length - 1; i++) {
      if (this.state.Quiz[i].Ans === this.state.ansrs[i]) {
        scr = scr + 1;
        tF[i] = true;
      } else {
        tF[i] = false;
      }
    }

    this.setState((prevState) => {
      prevState.score = scr;
      prevState.tAndf = tF;
      prevState.show = shw;
      return {
        score: prevState.score,
        tAndf: prevState.tAndf,
        show: prevState.show,
      };
    });
  }

  componentDidMount() {
    console.log(this.state.id);
    fetch(`http://localhost:4000/quizQ/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            Quiz:result.qanda
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    // var xhr = new XMLHttpRequest();

    // xhr.withCredentials = "true";
    // xhr.addEventListener("readystatechange", function () {
    //   if (this.readyState === 4) {
    //     console.log(this.responseText);
    //     var quizdata = JSON.parse(this.responseText)
    //     console.log(quizdata);
    //   }
    // });

    // xhr.open("GET", "http://localhost:4000/quizQ");

    // xhr.send();
    
    
    // axios.get(`http://localhost:4000/quizQ/${this.state.id}`).then((res) => {
    //   console.log("Response Succeed");
    //   var resdata = res.data
    //   // console.log(resdata);
    //   this.setState(
    //     { Quiz: resdata.qanda }
    //   );
    // }).catch(err => { console.log(err) })
  }

  render() {
    

    // console.log("from render "+this.state.Quiz[0]);

    const answers = this.state.Quiz.map((ab) => {
      return (
        <li key={ab.qid}>
          {ab.qid + 1 + ". "}
          {ab.Ans}
        </li>
      );
    });
    const qsection = this.state.Quiz.map((Qiz) => {
      return (
        <Section
          key={Qiz.qid}
          id={Qiz.qid}
          Question={Qiz.Question}
          Options={Qiz.Options}
          handleChange={this.handleChange}
          true={this.state.tAndf}
        />
      );
    });

    return (
       <div>
         <LogHeader/>
          <section>
        {qsection}

        <div style={this.state.show} className="scores">
          <h1>Your Score : {this.state.score + "/" + this.state.Quiz.length}</h1>
          <div className="answers">
            <h1>Correct Answers:</h1>
            <ul>{answers}</ul>
          </div>
        </div>

        <div className="s-button">
          <button onClick={this.showScore}>Submit Answer</button>
        </div>
      </section>
       </div>
     
    );
  }
}


