import  React  from 'react';
import axios from 'axios';
import ArticleInspect from './nodeArticleInspect';

export default class nodeArticles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : []
        };
    };


    componentDidMount() {
        axios.get('http://localhost:8080/nodearticles/')
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
                    <section key={article}>
                       <ArticleInspect
                        articleTitle={article.title}
                        articleAuthor={article.author}
                        articleBody={article.body}
                        />
                        </section>))}
                    </ul>
                )
            };
        };
