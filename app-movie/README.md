# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





discover "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&vote_count.gte=1500&api_key=2fa531bf8e1b0973e905bc082ef00707&query="


search ""https://api.themoviedb.org/3/search/movie?&api_key=2fa531bf8e1b0973e905bc082ef00707&query="

poster path "https://image.tmdb.org/t/p/w1280"
poster path "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fD88MHxwaG90by1wYWd1fHx8fGVufDBBfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80"



<Router>
      <Navbar></Navbar>
      <Switch>
     <Route path="/"  exact render={(props)=><Home  {...props} movies={movies}></Home>}     ></Route>
     <Route path="/AddFilm"  exact render={(props)=><AddFilm  {...props} onAdd={onAdd}/>}></Route>
     <Route path="/:id" exact render={(props)=><SingleMovie {...props}    />}></Route>
     
     </Switch>
    </Router>




    function Home({movies,match}){
  //[movie,SetMovie]=useState({id:'',poster:'',title:'',year:'',rate:'',director:''});
 var mo=movies.find((movie)=>movie.id===match.params.id);
  //const movie=movies.find((movie)=>movie.id===match.params.id)
  console.log(match)
    return (
        <div className="main">
        <hr></hr>
        <h3>List of Movies</h3>
        <hr></hr>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map((movie) => (
              <Link
