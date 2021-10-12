import React ,  {useEffect} from "react"
import s from  '../styles/Tweet.module.css'

const Tweet = ({name,message}) => {

    useEffect(() =>{
        console.log('we run a function')
      } ,[] )


 return(
     <div className={s.tweet}>
        <h2 className={s.title}>{name}</h2>
        <h3>{message}</h3>
        <button>Delete</button>
        <button> Like</button>
     </div>
  
 )
}

export default Tweet