import React from 'react';
//Componentes programados
import User from "../pages/User.js";
//import Admin from "../pages/Admin.js";




class App extends React.Component {
  constructor(){
    super();
    this.state  ={
      result : '',
      query:'',
      error : '',
      user:{
        admin : false,
        login : false
      }
    }
    const users = [
      {id: '1', email :'florencia@gmail.com', pass :'123456', admin: true},
      {id: '2', email :'mauro@gmail.com', pass :'123456', admin:false},
    ]
    localStorage.setItem('users', JSON.stringify(users))
  }

  
  
  componentDidUpdate(prevProps, prevState){
    
    if(prevState.query.page !== this.state.query.page){
      this.callApi();
      
    }  
  } 
  

  login=(user)=>{
    let validation =  JSON.parse(localStorage.getItem('users'));
    console.log(user);

    const acept = validation.find(element => (user.email === element.email) && (user.password === element.pass));
    
    if (acept) {
      let loginUser ={
        admin : acept.admin,
        login : true
      }
      this.setState({
        user : loginUser
      })
      
      alert('te logeaste')
    }else{
      alert('Email o contraseña inválido')
    }
    
    
    

  }

  callApi = ()=>{
    const keyApi= 'ce62b7f668a97b07e6d58a85df75641b';
    const urlApiPopular= `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&page=1&region=AR`;
    const urlApiNowPlaying= `https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}&page=1&region=AR`;
    const urlApiUpComing= `https://api.themoviedb.org/3/movie/upcoming?api_key=${keyApi}&page=1&region=AR`;
    
    fetch(urlApiPopular)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        localStorage.setItem('populares', JSON.stringify(data.results));
      })
      .catch(error=>{
        console.log(error);
        
    })

    fetch(urlApiNowPlaying)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        localStorage.setItem('nowPlaying', JSON.stringify(data.results));
      })
      .catch(error=>{
        console.log(error);
        
    })
    fetch(urlApiUpComing)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        localStorage.setItem('upComing', JSON.stringify(data.results));
      })
      .catch(error=>{
        console.log(error);
        
    })
    
  }


 render(){
   for (let i = 0; i < 1; i++) {   
    this.callApi()
   }
   
  //  //Se chequea si el usuario logueado es administrador, si lo es, lo manda a la vista de admin
  //  let resultado= this.state.user.admin;
  //  if (resultado && resultado.admin){
  //   return (
  //     <Admin/>
  //   );
  //  }
  //  //si no está logueado o no es admin, lo lleva a la vista de usuario
  //  else {
  //     return (
  //       <User login={this.login} />
  //     );
  //   }
  
   return(
   <User login={this.login}/>
   );

   }
 }
export default App;
