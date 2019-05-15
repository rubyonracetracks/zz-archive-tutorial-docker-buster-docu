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

class Faq extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>FAQ</h1>
            </header>
            
            <h2>Why is Docker so great?</h2>
            <ul>
            <li>
            Docker provides a virtual development environment that is independent of the host OS. Docker images with pre-installed Ruby on Rails can be created and used for working on Ruby gems and Rails projects. You can reset your Docker container to its original conditions in just a few SECONDS, not hours. By using a custom Docker image in tandem with a 1-step build script in your app’s source code, you can reset your development environment to its original conditions AND be back in business in just a few minutes, not hours.
            </li>
            <li>
            Because you have the ability to reset and rebuild everything in just a few minutes, it’s easy to make sure that your 1-step build script in your project works properly. Because you can check your 1-step build process frequently, you can always be on top of ALL of your app’s dependencies and avoid the infamous &quot;but it works on my machine&quot; problem.
            </li>
            <li>
            If you need to install your project manually in the production environment, the scripts used to create the Docker image combined with the 1-step build script in the source code double as a giant cheat sheet.
            </li>
            <li>
            Anyone who joins your project can be ready to roll in minutes, not hours or days.
            </li>
            </ul>

            <h2>Why are your Docker images based on Debian’s stable branch?</h2>
            Debian is a very widely used Linux distro, and the Debian-based distros are what I’m used to using. Because Debian is widely used, support is excellent, and help is easy to find. Debian Stable is lower in maintenance needs than Debian Testing. Debian is lighter, faster, and lower in maintenance needs than its Ubuntu derivative.

            <h2>How do you use Docker?</h2>
            <ul>
            <li>
            Once I'm in Docker, the way I use the Docker environment is similar to the way most other people use their host systems.
            For Ruby on Rails, I use a Docker image to include all major dependencies of each project. This Docker image includes the project’s current Ruby version, the Ruby version I expect to upgrade to, the project’s current Rails version, the Rails version I expect to upgrade to, and selected other gems. Setting up the project is MUCH faster when the proper versions of Ruby and Rails are pre-installed. Installing a new version of Ruby or Rails involves a long wait.
            </li>
            <li>
            I use Bash scripts for starting a Docker container from a Docker image. There’s a script for downloading the latest Docker image available online, for resetting a Docker container to its original image setup, and for resuming a Docker container that I previously exited (analogous to rebooting).
            </li>
            <li>
            Once I’m in the Docker container, I don’t have to do anything in the host machine to start my app. However, I put my projects in the Docker container’s shared directory, the directory that I have access to through either the host or virtual environment. Thus, I can use the Geany editor (my preferred editor) in the host OS to edit my code. I also have Docker set up to use port forwarding so that I can view the local server output and the PostgreSQL database.
            </li>
            </ul>

            <h2>Why aren’t you using Docker in the same manner as everyone else?</h2>
            Other people use multiple Docker containers per project. They have a Ruby on Rails Docker container, a PostgreSQL Docker container, and other specialized Docker containers. I find it confusing to keep track of all that, and the Docker images don't come with Rails and other big gems pre-installed.  When you use Docker the conventional way, you have to wait for these tools to be installed. Therefore, I rely on a custom Docker image for each project.  All major dependencies are included so that I can get started quickly.

            <h2>Why do you insist on giving each Ruby on Rails app its own custom Docker image but have just one Docker image for all of your Docusaurus apps?</h2>
              <ul>
              <li>
              A given Ruby on Rails app requires the correct version of Ruby.  If you don't have the correct version, you must install it, and that's a long process.  Once you have the correct version of Ruby, you can run the "bundle install" command.  However, if you don't already have the correct version of Rails installed within that correct version of Ruby, the "bundle install" stage must take care of this, and this takes time.  Using a Docker image with the correct version of Ruby and the correct version of Rails within the correct version of Ruby greatly speeds up the "bundle install" process.
              </li>
              <li>
              In contrast, installing the correct version of Docusaurus takes less than 2 minutes.  So there's no point in maintaining a different Docker image for each of my Docusaurus apps.
              </li>
              </ul>

            <h2>Why is Docker better than Vagrant?</h2>
            Docker is faster, because it provides a virtual environment but not a virtual machine. A virtual machine is a heavy user of memory and processing power and needs a few minutes to boot up. Docker bypasses that overhead, and this allows you to enter your Ruby on Rails development environment in no more than a few seconds.
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Faq;
