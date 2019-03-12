import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
 const App =()=>{
    return(     
<div className="ui container comments">
<ApprovalCard>
    <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
</div>
</ApprovalCard>
<ApprovalCard>
 <CommentDetail author="Sam"
  timeAgo="Today at 4:45PM"
   commentText="Good Job"
    avatar={faker.image.avatar()}/>
 </ApprovalCard>
 <ApprovalCard>
 <CommentDetail author="Alex"
  timeAgo="Today at 2:00AM" 
  commentText="Better Job"
  avatar={faker.image.avatar()}/>
</ApprovalCard>
 <ApprovalCard>
 <CommentDetail author="Jane"
  timeAgo="Yesterday at 5:00PM"
   commentText="Best Job"
   avatar={faker.image.avatar()}/>
   </ApprovalCard>
 </div>
    );
}; 
/*const App = ()=> {
    return (
        <div>
            <BigCard>
               <div className="ui icon header">
                   <i className="pdf file outline icon"></i>
                   No documents are listed for this customer.
             </div>
                  <div className="ui primary button"> Add document</div>
           </BigCard>
         <BigCard>
         <h4 className="ui header">for your info </h4>
         <p>jfchgfgfcjhgfgh</p>
           </BigCard>
        </div>
    );
}
const BigCard =(props)=>{
    return (
        <div className="ui placeholder segment">{props.children}
        </div>
    )

} */
ReactDOM.render(<App/>,document.querySelector('#root')); 
