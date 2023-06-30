
interface ButtonInterFace {
       title :string ,
       className : string ,
       onClick : any 

}


const Button = ({title , className , onClick }:ButtonInterFace) => {
  return   ( <button className={` outline-none rounded-sm ${className}` } onClick={onClick}> {title} </button> )
 
}


export default Button