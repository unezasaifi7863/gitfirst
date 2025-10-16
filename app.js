//  basic js programm of hello world
//  const heading = document.createElement('h1');
//  heading.innerHTML= "Hello world from js";
//  const root = document.getElementById('root');
//  root.appendChild(heading); 
 
 
 // basic react program of hello world
        const heading = React.createElement('h1', {}, 'hello world from react');
        const root= ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);
       //  hello