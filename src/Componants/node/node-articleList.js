import  React  from 'react';
import axios from 'axios';
import ArticleInspect from '../article-inspect';
import Comment from '../comment/comment';

const URL = 'http://localhost:9000/nodearticles/';

export default class nodeArticles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articles : []
        };
    };


    componentDidMount() {
        axios.get(URL)
          .then(res => {
            this.setState({
              articles: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      };

      render(){
        const{articles} = this.state;
            return(
            <ul className="articles-list">
                {articles.map(article => (
                  <div key={article._id}>
                    <ArticleInspect
                      articleTitle={article.title}
                      articleAuthor={article.author}
                      articleBody={article.body}
                      articleDate={article.date}
                    />
                  </div>))}
                  <Comment />
                </ul>
               )
            };
        };