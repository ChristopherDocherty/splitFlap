import React from 'react';
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


    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value){
            this.setState({target_letter: this.props.value})
        }
    }


    advanceLetter() {
        if(this.state.alphabet[(this.state.count+1)%27] !== this.state.target_letter){
            this.setState({count: (this.state.count + 1)%27})
        }
        console.log(this.state.target_letter);
        
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

            </div>
        );
    }
}



class Display extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            text: "HUZZAH",
        };

        this.handleChange = this.handleChange.bind(this);

    }


    renderPanel(i) {
        return <Panel 
            value={this.state.text[i]}
        />;
    }


    handleChange(event){
        this.setState({text: event.target.value});
    }


    render() {
        return(
            <div className="container">
                <div className="line">
                    {Array.from(this.state.text).map((letter) =>
                        <Panel value={letter} />                
                    )}
                </div>
   
                    <label>
                        Type something: 
                        <input type="text" value={this.state.text} onChange={this.handleChange} />
                    </label>


            </div>



        )
    }


}







ReactDOM.render(
    <Display />,
    document.getElementById('root')
);
