import React from 'react';
import styles from './styleComment.module.css';


type CommentData = {id:number,comment_name:string,srcImg:string};



const Comment = (comment:CommentData) => {
    return (
        <>
          <div className={styles.container}>
              <div className={styles.comment}>
                  {comment.comment_name}
              </div>
          </div>
        </>
    );
};

export default Comment;