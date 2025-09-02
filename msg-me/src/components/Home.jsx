//
//import { LuThumbsUp } from 'lucide-react';

import Cards from '../components/Cards'

export default function Home() {
  //Functions are breaking when being used in return attribute  
    function Date() {
        let date = new Date();
        return date;
    }

    function DevNote(message) {
        message = 'All post are current'
    }

   return(
    <>
    {/**Restructure this into a grid layout along with the div's for the cards. */}
    <div className="home-bg-container p-10">
        <div className="home-text-div">
            <h2 className="font-semibold">Homepage</h2>
            <p className="current-date"></p>
            <p className="dev-note "></p>
        </div>
        <div className="home-card-container p-10">
            <div className="recent-posts-container">
                <h3 className="font-semibold">Recent Posts</h3>
                <div className="recent-post-div flex bg-green-100 p-8 rounded-lg gap-2 shadow-lg">
                    <Cards />
                    <Cards />
                </div>
            </div>
            <hr />
            <div className="featured-post-container pt-5">
                <h3 className="font-semibold">Featured Posts</h3>
                <p className="text-indigo-700">Learn how to get featured</p>
                <div className="featured-post-div"></div>
            </div>
            <hr />
            <div className="favorite-post-container pt-5 ">
                <h3 className="font-semibold">Favorite Posts</h3>
                <div className="favorite-post-div"></div>
            </div>
        </div>
    </div>
    </>
   )
}