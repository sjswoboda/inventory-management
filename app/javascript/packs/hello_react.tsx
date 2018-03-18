// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps { name: string; }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloComponent name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

export class HelloComponent extends React.Component<HelloProps, {}> {
  constructor(props: HelloProps){
    super(props);
  }

  public render() {
    return(
      <div>Whoa whoa, we got {this.props.name}!</div>
    )
  }
}