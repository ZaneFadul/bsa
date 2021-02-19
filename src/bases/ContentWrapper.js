import React from 'react';

const ContentWrapper = props => {
  return (
      <div className="content-body" style={{
        backgroundColor: `${props.style.bodyBackground}`,
        color: `${props.style.bodyText}`
    }}>
      {props.content}
      </div>
  )
}

export default ContentWrapper;