import './App.css';
function App() {
  return (
    <div className="App">
        <div className = "e-card e-card-horizontal ">
        <div className="e-card-image" ></div>
        <div className='e-card-stacked'>
        <div className="e-card-header">
        
            <div className="e-card-header-caption">
           
              <div className="e-card-title">Debunking Five Data Science Myths</div>
              <div className="e-card-sub-title ">Webinar from Syncfusion</div>
            </div>
          </div> 
          <div className="e-card-content">
          Tech evangelists are currently pounding their pulpits about all things AI,
                 machine learning, analytics—anything that sounds
          </div>
          <div className='e-card-actions e-card-vertical '>
        <button className='e-btn e-primary '>Read more</button>
        <button className='e-btn e-primary'>Subscribe</button>
        </div>
          </div>
        

        </div>

    </div>

  );
}
export default App;
