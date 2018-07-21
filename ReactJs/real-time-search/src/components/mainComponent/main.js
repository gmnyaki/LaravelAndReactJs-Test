import React, { Component } from 'react';

//json array of object to act as an api call
const movieList = [
    {
        "name": "Master and Commander: The Far Side of the World",
        "id": "tt0311113",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/allurls/79/1808405079p.jpg"
      },
      {
        "name": "Morituri",
        "id": "tt0059470",
        "url": "http://l.yimg.com/a/i/us/mov/video/images/muze/dvd/sm/24/224224.jpg"
      },
      {
        "name": "Napoleon Dynamite",
        "id": "tt0374900",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/photo/movie_pix/fox_searchlight/napoleon_dynamite/napoleondynamite_finalurl.jpg"
      },
      {
        "name": "On The Waterfront",
        "id": "tt0047296",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/allurls/75/1800102975p.jpg"
      },
      {
        "name": "Pulp Fiction",
        "id": "tt0110912",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/photo/movie_pix/miramax_films/pulp_fiction/pulpfiction_url.jpg"
      },
      {
        "name": "Rockers",
        "id": "tt0079815",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/allurls/83/1802817483p.jpg"
      },
      {
        "name": "Kids",
        "id": "tt0113540",
        "url": "http://www.harmony-korine.com/gifs/filmography/img/kidsurl.jpg"
      },
      {
        "name": "Sanjuro",
        "id": "tt0056443",
        "url": "http://l.yimg.com/a/i/us/mov/video/images/muze/dvd/sm/30/766730.jpg"
      },
      {
        "name": "The Battle of Algiers",
        "id": "tt0058946",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/guide/01159501.jpg"
      },
      {
        "name": "Fear and Loathing In Las Vegas",
        "id": "tt0120669",
        "url": "http://l.yimg.com/a/i/us/mov/video/images/muze/dvd/sm/09/202109.jpg"
      },
      {
        "name": "The Big Lebowski",
        "id": "tt0118715",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/photo/movie_pix/gramercy_pictures/the_big_lebowski/thebiglebowski_dvd.jpg"
      },
      {
        "name": "To Catch a Thief",
        "id": "tt0048728",
        "url": "http://l.yimg.com/a/i/us/mov/video/images/muze/dvd/sm/83/2657183.jpg"
      },
      {
        "name": "Unstoppable",
        "id": "tt0477080",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/photo/movie_pix/twentieth_century_fox/unstoppable/unstoppable_smallurl2.jpg"
      },
      {
        "name": "Skyline",
        "id": "tt1564585",
        "url": "http://l.yimg.com/eb/ymv/us/img/hv/photo/movie_pix/universal_pictures/skyline/skyline_smallurl.jpg"
      },

]
 //this function will return a function.
function searchPhrase(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        movieList: movieList,
        term: '',
      }
      //define and bind this function to the component
      this.filterList = this.filterList.bind(this);
  }
//the filter list will take an arg,
    filterList(event)  {
      this.setState({term: event.target.value})
    }
  render() {
    const {term, movieList} = this.state;
    return (
      <main> 
	  //A search form for users to type search phrase.
        <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search a movie by name " onChange={this.filterList}/>
        </fieldset>
        </form>
      { 
            movieList.filter(searchPhrase(term)).map( movie => 
              <div key={movie.id}>
                <h3> {movie.name} </h3>
                <p> URL ==> : {movie.url} </p>
              </div>
              )           
           
          }
      </main>
    );
  }
}

export default App;
