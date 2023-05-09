import React from 'react';
import styles from './styleComment.module.css';
import Avatar from "../Avatar/Avatar";





const Comment = ({comment}) => {
    console.log(comment.id);
    return (
        <>
          <div className={styles.container}>
              <Avatar effect={comment}></Avatar>
              <div className={styles.comment}>
                  {comment.comment_name}
              </div>
          </div>
        </>
    );
};

export default Comment;