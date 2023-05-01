import React from 'react';
import styles from './styleComment.module.css';





const Comment = ({comment}) => {
    console.log(comment.id);
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