import {Link} from 'react-router-dom';


const RecipeDetails = ({match,data}) =>{
    console.log(match)
    var detail= data.find(p => p.title == match.params.title);
    var detailData;
    if(detail)
    detailData=
    <div>
        
         <p>
         {detail.description}  
         </p>
       
<br/>
         <Link to={{pathname:"/"}}>Back to home</Link>
               
         </div>
    return(<>
    <div className="description">
    {detailData}
    </div>
    
    </>);
}
export default RecipeDetails;