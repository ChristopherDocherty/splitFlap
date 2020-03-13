import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Panel extends React.Component{



    constructor(props){
        super(props);
        

        this.state = {
            topLetter: "C",
            bottomLetter: "D",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            count: 0,
        }
    }


    componentDidMount() {
        //Need to update css to add animation

        console.log("test");
        this.timerID = setInterval(
            () => this.next_letters(),
            1000
          );

    }


    next_letters() {

        //call animation
        

        
        //Update letter
        this.setState({count: this.state.count +1});
        this.setState({topLetter: this.state.alphabet[this.state.count]});
        console.log(this.state.alphabet[this.state.count]);
    }

    componentWillUnmount() {

    }


    render(){
        return (
            <div className="flip-container">

            <div className="top">
                <div className="letter-top"> {this.state.bottomLetter} </div>
            </div>
        
            <div className="flipper">
        
        		<div className="front">
        			<div className="letter-top"> {this.state.topLetter} </div>
        		</div>

        		<div className="back">
        			<div className="letter-bottom"> {this.state.bottomLetter} </div>
        		</div>
        
        	</div>
        
            <div className="bottom">
                <div className="letter-bottom"> {this.state.topLetter} </div>
            </div>
        </div>
        );
    }
}









ReactDOM.render(
    <Panel />,
    document.getElementById('root')
);
