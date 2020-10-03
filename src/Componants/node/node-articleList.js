import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:9000/nodearticles';

export default class NodeList extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        articles: [],
}}
componentDidMount(){
  this.fetchedData();
}
 
fetchedData(){
  axios.get(URL)
  .then(res => {
    this.setState({
      // name: res.data.name,
      // email: res.data.email,
      // rollno: res.data.rollno
      articles: res.date.articles
    });
  })
  .catch((error) => {
    console.log(error);
  })
}
render(){
  const{articles} = this.state;
    return(
        <div className="skills-list">
          <div className="box">
            {articles.map(article => (
              <div key={article}>
                <div className="skill-list-item">
                    {article.data.title}
                    {article.authory}
                    {article.body}
                </div>
              </div>))}
            </div>
        </div>)}}

            