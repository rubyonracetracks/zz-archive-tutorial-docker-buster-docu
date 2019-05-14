/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Links extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Links</h1>
            </header>
            <h2>Official Docker Page</h2>
            <a href="https://www.docker.com/">https://www.docker.com/</a>

            <h2>Affiliated Sites</h2>
            <ul>
              <li><a href="https://www.rubyonracetracks.com/">Ruby on Racetracks</a></li>
              <li><a href="https://www.virtualboxtutorial.com/">VirtualBox Tutorial</a></li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Links;
