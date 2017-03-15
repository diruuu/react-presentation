// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, Deck, Fill, CodePane,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  es6string: require("../assets/es6string.png")
};

preloader(images);

const theme = createTheme({
  primary: "#1DABB8"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="#fff">
            All About ReactJS
          </Heading>
          <Text textSize="1.3em" margin="20px 0px 0px" textColor="white" textFont="Open Sans">... and some little thing about Javascript ES6</Text>
          <Text textSize="1em" margin="70px 0px 0px" textColor="black" textFont="Open Sans">By Rudi Wahyudi</Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={1} fit textColor="tertiary">
            But first, let's talk about ES6.
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#2d2d2d">
          <Heading size={1} fit textColor="#fff" margin="0px 0px 50px" >
            Javascript primitive data type
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  String
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
                    var theString = "Hello World";
                  </CodePane>
                </Text>
              </Appear>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  Number
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
                    var theNumber = 77625;
                  </CodePane>
                </Text>
              </Appear>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  Boolean
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
                    var theBoolean = true;
                  </CodePane>
                </Text>
              </Appear>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  Array
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
{`var theArray = ['foo', 'bar', 30, true, { foo: ''}];`}
                  </CodePane>
                </Text>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  Object
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
{`var theObject = {
  fooString: "bar",
  fooNumber: 20,
  fooBoolean: true
};`}
                  </CodePane>
                </Text>
              </Appear>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  Undefined
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
                    var theUndefined = undefined;
                  </CodePane>
                </Text>
              </Appear>
              <Appear>
                <Text textColor="#fff" textAlign="left" textSize="1em">
                  Null
                  <CodePane lang="javascript" margin="10px 0px 10px" textSize="0.5em">
                    var theNull = null;
                  </CodePane>
                </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={1} textColor="#333">
            Variables
          </Heading>
          <Text textColor="#333" padding="50px 0 0px" textAlign="left" textSize="1em">
            Old Sweet Javascript
          </Text>
          <CodePane lang="javascript" margin="20px 0px 0px" textSize="0.6em">
{`var foo = "bar";`}
          </CodePane>
          <Appear>
            <Text textColor="#333" padding="50px 0 0px" textAlign="left" textSize="1em">
              ES6 Javascript
              <CodePane lang="javascript" margin="20px 0px 0px" textSize="0.6em">
{`const foo = "bar"; // Can't be reassigned
let anotherFoo = "anotherBar" // can be reassigned`}
              </CodePane>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={1} textColor="#333">
            Arrow Function
          </Heading>
          <Text textColor="#333" padding="50px 0 0px" textAlign="left" textSize="1em">
            Old Sweet Javascript
          </Text>
          <CodePane lang="javascript" margin="20px 0px 0px" textSize="0.6em">
{`function someFunction() {
  .....
}`}
          </CodePane>
          <Appear>
            <Text textColor="#333" padding="50px 0 0px" textAlign="left" textSize="1em">
              ES6 Javascript
            <CodePane lang="javascript" margin="20px 0px 0px" textSize="0.6em">
{`const someFunction = () => {
  .....
}`}
            </CodePane>
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={1} textColor="#333">
            Template Literal
          </Heading>
          <Text textColor="#333" padding="50px 0 0px" textAlign="left" textSize="1em">
            Old Sweet Javascript
          </Text>
          <CodePane lang="javascript" margin="20px 0px 0px" textSize="0.6em">
{`var text = "The total price is " + totalPrice + " dollars";`}
          </CodePane>
          <Appear>
            <Text textColor="#333" padding="50px 0 0px" textAlign="left" textSize="1em">
              ES6 Javascript
            <Image width="100%" src={images.es6string} />
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={1} textColor="#333">
            Class
          </Heading>
          <CodePane lang="javascript" margin="20px 0px 0px" textSize="0.6em">
{`class Presentation extends React.Component {
  constructor() {
    .....
  }
  render() {
    .....
  }
  componentDidMount() {
    .....
  }
}`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={1} textColor="#333">
            Import / Export
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.6em">
{`// ../a-relative-path
import const someModule = () => {
  ....
};

// ../another-relative-path
export { someModule } from '../a-relative-path';`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Heading size={1} fit textColor="tertiary">
            Now let's talk about ReactJS.
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={3} textColor="#333">
            The history of ReactJS
          </Heading>
          <List textColor="#333" textFont="Open Sans">
            <Appear><ListItem textSize="0.7em">In 2010, Facebook released an extension for PHP called XHP</ListItem></Appear>
            <Appear>
              <ListItem textSize="0.7em">
                XHP help to decrease XSS attack and make front-end much both readable and understandable.
                <Layout>
                  <Fill>
                    <Text textColor="#333" padding="30px 0 0px" textAlign="left" textSize="1em">
                      PHP
                    </Text>
                    <CodePane lang="php" margin="20px 0px 0px" textSize="0.7em">
{`<?php if ($_POST['name']) {
?>
    Hello, <?=$_POST['name']?>.
<?php } else {
?>
    <form method="post">
    What is your name?
    <input type="text" name="name">
    <input type="submit">
    </form>
<?php } ?>`}
                    </CodePane>
                  </Fill>
                  <Fill>
                    <Text textColor="#333" padding="30px 0 0px" textAlign="left" textSize="1em">
                      XHP
                    </Text>
                    <CodePane lang="php" margin="20px 0px 0px" textSize="0.7em">
{`if ($_POST['name']) {
  echo Hello, {$_POST['name']};
} else {
  echo
    <form method="post">
      What is your name?
      <input type="text" name="name" />
      <input type="submit" />
    </form>;
}`}
                    </CodePane>
                  </Fill>
                </Layout>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={3} textColor="#333">
            The history of ReactJS
          </Heading>
          <List textColor="#333" textFont="Open Sans">
            <ListItem textSize="0.9em">
              But...
            </ListItem>
            <Appear>
              <ListItem textSize="0.9em">
                There was a distict problem with XHP: dynamic web applications require many roundtrip to the server, XHP did not solve this problem
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="0.9em">
                A facebook engineer negotiated with his manager to take XHP into the browser using javascript and granted six months to try it.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="0.9em">
                And...
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="0.9em">
                React was born
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="white">
          <Heading size={3} textColor="#333">
            The purpose of ReactJS
          </Heading>
          <List textColor="#333" textFont="Open Sans">
            <ListItem textSize="0.9em">
              Creating User interface
            </ListItem>
            <Appear>
              <ListItem textSize="0.9em">
                Building large application with data that changes overtime
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={2} textColor="tertiary">
            Why reactJS?
          </Heading>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            Declarative
          </Heading>
          <Text lineHeight={1.5} textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.
          </Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            Component-Based
          </Heading>
          <Text lineHeight={1.5} textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">
            Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
          </Text>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="#eb6361">
          <Heading size={4} textColor="tertiary">
            Learn Once, Write Anywhere
          </Heading>
          <Text lineHeight={1.5} textSize="1em" margin="20px 0px 0px" textColor="black" textFont="Open Sans">
            You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={3} textColor="#333">
            Example of React Component
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, document.getDocumentById('app'));`}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={2} textColor="tertiary">
            Introducing JSX
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`const element = <h1>Hello, world!</h1>;`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={3} fit textColor="#333">
            Embedding Expressions in JSX
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`const user = 'Harper';

const element = (
  <h1>
    Hello, {user}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={3} textColor="#333">
            JSX is an Expression Too
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={3} textColor="#333">
            Specifying Attributes with JSX
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`const element = <div tabIndex="0"></div>;`}
          </CodePane>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`const element = <img src={user.avatarUrl}></img>;`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={3} textColor="#333">
            Specifying Children with JSX
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`const element = <img src={user.avatarUrl} />;`}
          </CodePane>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);`}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={2} textColor="tertiary">
            Component and props
          </Heading>
          <Text lineHeight={1.5} textSize="1em" margin="20px 0px 0px" textColor="#fff" textFont="Open Sans">
            Components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
          </Text>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={2} textColor="#333">
            Functional and Class Components
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
          </CodePane>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={2} textColor="#333">
            Composing Components
          </Heading>
          <Text lineHeight={1.5} textSize="1em" margin="20px 0px 0px" textColor="#333" textFont="Open Sans">
            Components can refer to other components in their output.
          </Text>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}`}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={2} textColor="tertiary">
            State
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={4} textColor="#333">
            Converting a function to a class
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.4em">
{`function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}`}
          </CodePane>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.4em">
{`class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={2} fit textColor="#333">
            Adding Local State to a Class
          </Heading>
          <CodePane lang="javascript" margin="40px 0px 0px" textSize="0.5em">
{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`}
          </CodePane>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="#fff">
          <Heading size={3} textColor="#333">
            Using State Correctly
          </Heading>
          <List textColor="#333" textFont="Open Sans">
            <Appear>
              <ListItem textSize="0.9em">
                Do Not Modify State Directly
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="0.9em">
                State Updates May Be Asynchronous
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="0.9em">
                State Updates are Merged
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={3} textColor="tertiary">
            Handling Events
          </Heading>
          <Text lineHeight={1.5} textAlign="left" textSize="1em" margin="20px 0px 0px" textColor="#fff" textFont="Open Sans">
            Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
            <List textColor="#fff" textFont="Open Sans">
              <ListItem textSize="0.9em">
                React events are named using camelCase, rather than lowercase.
              </ListItem>
              <ListItem textSize="0.9em">
                With JSX you pass a function as the event handler, rather than a string.
              </ListItem>
            </List>
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={3} textColor="tertiary">
            Conditional Rendering on JSX
          </Heading>
          <List textColor="#fff" textFont="Open Sans">
            <ListItem textSize="0.9em">
              Element Variables
            </ListItem>
            <ListItem textSize="0.9em">
              Inline If with Logical && Operator
            </ListItem>
            <ListItem textSize="0.9em">
              Inline If-Else with Conditional Operator
            </ListItem>
            <ListItem textSize="0.9em">
              Preventing Component from Rendering
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
