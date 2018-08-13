import {h, render,Component} from "preact";
import style from "./member.scss";
import CardBlock from "../member-card-block/member-card-block";

export default class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : null
        }
    }
    getDocumentTop() {
        //文档高度
        let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }
    getWindowHeight() {
        let windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
       
    }
    getScrollHeight() {
        let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;  
        return scrollHeight;
    }
    handleTouchEnd() {
        
        console.log(this.getScrollHeight());
        console.log(this.getWindowHeight() + this.getDocumentTop())
        
        let height = this.getWindowHeight() + this.getDocumentTop();
       
        if(this.getScrollHeight() <= height ){
           this.props.appChangePage(1);
        }else if(document.body.scrollTop==0&&document.documentElement.scrollTop==0){
            this.props.appChangePage(-1);
        }
    
    }
    render({data},{}) {
        return (
            <div style = {style} >
                 <div
                    className="members_containner"
                    ref={this.members_containenr}
                    // onTouchStart={this.handleTouchStart.bind(this)}
                    // onTouchMove={this.handleTouchMove.bind(this)}
                    onTouchEnd={this.handleTouchEnd.bind(this)}
                >
                  
   
             
                {data.map((m)=>{
                    
                    return(
                    <div className = 'group_intro_containner'>
                        <div className = "group_intro" >
                            <img className = "group_logo" src = {m.logo} />
                            <div className = "group_name">{m.tag}组成员 </div>
                        </div>
                        <CardBlock info = {m.people} tag = {m.tag} />
                    </div>
                 
                    )
                    
                })}
               </div>
               <div className  = 'members_over'>
                  <div className = 'member_over_dot'></div>
                  <div className = 'over_words'>未完待续</div>
                 
               </div>
            </div>
        )
    }
    
}