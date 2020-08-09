import React, { Component } from 'react'

import db from './firebase.js';
let accdata;
let x;
export default class Cookie extends Component {
    constructor(){
        super()
        this.state={
            li:"",
            h2:"",
            h6:"",
            cancel:"",
            edit:"",
            id:""
        }
        this.renderData=this.renderData.bind(this)
    }
    renderData(data){
       
        this.setState((state, props) => {
            return {
                h2:data.data().name,
                h6: data.data().city,
                cancel:"x",
                edit:"edit",
                id:data.id
            };
        });
    }

    /*cancel(e){
        let id = e.target.parentElement.getAttribute("dataId");
        db.collection('branches').doc(id).delete();
    }
    edit(e){
        let id = e.target.parentElement.getAttribute("dataId");
        gdh=id;
        editData(id)
    }*/

    componentDidMount(){
        db.collection('branches').onSnapshot((snap)=>{
            let changes =snap.docChanges();
            changes.forEach((change)=>{
                if(change.type == "added"){
                    accdata=change.doc;
                    x=accdata.data().name
                    
                }
                else if (change.type == "removed"){}
                else if (change.type == "modified") {
                }
            })
        })
}
    

    render(data) {
        
        return (
            <div>
                <form>
                    <input type="text" name="name" placeholder="branch name"></input>
                    <input type="text" name="city" placeholder="branch city"></input>
                    <button name="submit-btn">Submit</button>
                </form>
            <div>
            {x}
            </div>
            </div>
        )
    }
}
