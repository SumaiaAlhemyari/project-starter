import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function Post({ content, createdAt, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/"+id}>{ content }</Link>
        </div>
        <div className="card-footer small text-muted text-right">
          <Button type="delete" onClick={}> Delete Post </Button>
          { createdAt }
        </div>
      </div>
    </div>
  );
}

export default Post;