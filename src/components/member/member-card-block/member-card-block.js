import { h, render, Component } from "preact";
import style from "./member-card-block.scss";
import Card from "../member-card/card"
export default class CardBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null

        }
    }
    render({ info }, { }) {
        return (
            <div style={style} >
                {info.map((people) => {
                    return (<div className='card_block'>
                        <div className = "member_year_containner">
                            <div className='member_year_dot'></div>
                            <div className='member_year'>{people.year}</div>
                        </div>
                        <div className='member_cards_containner'>
                            {people.member.map((m) => {
                                return (<Card info={m} />)
                            })}
                        </div>
                    </div>
                    )
                })
            }
            </div>)
    }
}






