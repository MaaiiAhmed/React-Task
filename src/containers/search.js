import { Component } from 'react';

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            keywords: ''
        }
    }

    keywordsChanged = (e) => {
        console.log(this.props)
        this.props.onKeywordsChange(e.target.value)
        this.setState({ keywords: e.target.value })
    }
    render() {

        return (
            <div className="search-comp mb-3 mt-3">
                <input className="form-control rounded-pill text-center" type="text" placeholder="Search By Name"
                    value={this.state.keywords} onChange={this.keywordsChanged} />
            </div>
        )
    }
}