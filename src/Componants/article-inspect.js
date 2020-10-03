import {  PencilSquare } from 'react-bootstrap-icons';
import React from 'react';
import { Media } from 'react-bootstrap';

const ArticleInspect = (props) => {
    return ( 
        <div>
            <Media>
                <Media.Body>
                    <h4 style={{marginBottom: '20px'}}>{props.articleTitle}</h4>
                    <h5 style={{marginBottom: '20px', fontStyle: 'italic'}}>{props.articleAuthor}</h5>
                    <p>{props.articleBody}</p>
                    <p>{props.articleDate}</p>
                    <PencilSquare />
                    <br />
                    <br />
                    <br />                    
                </Media.Body>
        
            </Media>
        </div>
    )
};

export default ArticleInspect;