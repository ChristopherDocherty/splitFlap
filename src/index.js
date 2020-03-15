import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import shortid from "shortid";


class Panel extends React.Component{



    constructor(props){
        super(props);
        

        this.state = {
            target_letter: props.value,
            alphabet: " ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            count: 0,
        }
    }

    getRandomKey = () => {
        return shortid.generate();
    }


    componentDidMount() {
            this.timerID =  setInterval(
            () => this.advanceLetter(),
            250
            )
    }


    advanceLetter() {
        if(this.state.alphabet[(this.state.count+1)%27] !== this.state.target_letter){
            this.setState({count: (this.state.count + 1)%27})
        }
        
    }



    render(){
        return (
            <div className="flip-container">      

            <div class="top">
                <div class="letter-top"> {this.state.alphabet[this.state.count+1]} </div>
            </div>
            
            <div key={this.getRandomKey()} class="flipper">
            
        		<div class="front">
        			<div class="letter-top"> {this.state.alphabet[this.state.count]} </div>
        		</div>

        		<div class="back">
        			<div class="letter-bottom"> {this.state.alphabet[this.state.count+1]}</div>
        		</div>
            
        	</div>
            
            <div class="bottom">
                <div class="letter-bottom"> {this.state.alphabet[this.state.count]} </div>
            </div>

            {/*Change from arrow so it can do more
            <button className="magic" type="button" onClick={() => this.setState({count: this.state.count + 1})}> 
                        Click for magic
            </button>
            */}
        </div>
        );
    }
}



class Display extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            text: "HUZZAH",
        }

    }


    renderPanel(i) {
        return <Panel 
            value={this.state.text[i]}
        />;
    }



    render() {

        return(

            <div className="line">
                {this.renderPanel(0)}
                {this.renderPanel(1)}
                {this.renderPanel(2)}
                {this.renderPanel(3)}
                {this.renderPanel(4)}
                {this.renderPanel(5)}
            </div>

        )


    }


}




ReactDOM.render(
    <Display />,
    document.getElementById('root')
);
