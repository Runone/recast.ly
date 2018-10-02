import exampleVideoData from '../data/exampleVideoData.js'
import VideoList from './VideoList.js'
import VideoPlayer from './VideoPlayer.js'
import Search from './VideoList.js'


// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><em>search</em></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><em>videoPlayer</em><VideoPlayer video={exampleVideoData[0]}/></div>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// ); 

class App extends React.Component {
  
  constructor (props) {
    super (props)

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    }     
  }

  onVideoClick(video) {
    this.currentVideo: video
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><em>search</em></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)/>
          </div>
        </div>
      </div>
    )
  }
}
    
// fix Videoplayer div and Videolist div



  //   this.video = this.onVideoClick.bind(this);
  //   }

  // }

  // onVideoClick(index) {
  //   this.setState({ video: this.state.videos[index]})
  // }  

  // render() {
    
  //   return (
  //     <div>
  //       <nav className="navbar">
  //         <div className="col-md-6 offset-md-3">
  //           <div><em>search</em></div>
  //         </div>
  //       </nav>
        // <div className="row">
        //   <div className="col-md-7">
        //     <VideoPlayer video={this.props.exampleVideoData[0]}/>
        //   </div>
  //         <div className="col-md-5">
  //           <VideoList videos={this.props.exampleVideoData}/>
  //         </div>
  //       </div>
  //     </div>
  //   );  
  // }




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
