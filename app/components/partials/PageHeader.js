import React from 'react';
import glob from 'style';

class PageHeader extends React.Component {

  componentDidMount() {
    // Accessibility
    if (this.props.parallax) {
      $('.parallax').parallax();
    }
  }

  render() {
    return (
      <div className={`parallax-container valign-wrapper ${glob.parallax_container}`}>
        <div className="section" style={{width: '100%', zIndex: 1}}>
          <div className="container">
            <div className={`row ${glob.no_margin}`}>
              <h1 className="header grey-text text-lighten-5">
                {this.props.header}
              </h1>
            </div>
          </div>
        </div>
        <picture className={`parallax valign-wrapper ${glob.parallax}`}>
          <source srcSet="/public/images/bg/abstract.webp" type="image/webp" style={{display: 'block', transform: 'translate3d(-50%, 0px, 0px)'}} />
          <source srcSet="/public/images/bg/abstract.png" type="image/jpg" style={{display: 'block', transform: 'translate3d(-50%, 0px, 0px)'}} />
          <img src="/public/images/bg/abstract.png" alt="Parallax background" style={{display: 'block', transform: 'translate3d(-50%, 0px, 0px)'}} />
        </picture>
      </div>
    )
  }
}

export { PageHeader as default}
