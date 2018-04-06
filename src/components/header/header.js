import {h,render,Component} from 'preact'
import style from './header.scss'
export class Header extends Component{
    constructor(props){
	
        super();
        this.state = {
            header:[{
				name: '组别介绍',
				style: 'header-primary',
				route: '/intro'
			},
			{
				name: '产品展示',
				style: 'header-primary',
				route: '/product'
			},{
				name: '成员介绍',
				style: 'header-primary',
				route: '/member'
			},{
				name: '加入我们',
				style: 'header-primary',
				route: '/join'
			}],
            isClick : false
        }
    }
    render({},{header}){
        return(
		
            <div className = "header-containner">
                <div className = "header-logo"></div>
                <div className = "header-title">木犀官网</div>
                <div className = "header-triangle"></div>
			
            </div>
			
        )
    }

}