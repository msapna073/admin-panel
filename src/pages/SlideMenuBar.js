import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'

/* function SlideMenu() {
    var element = document.getElementById("sidebar");
    element.classList.toggle("active");
 }

function SlideMenuBar() {
    return <div className="navbar">
    <button id="sidebarCollapse"onClick={SlideMenu} className="btn btn-info">
        <FontAwesomeIcon icon={faBars} /></button>
    <div className="nav ml-auto">
    <button id="sidebarCollapse"onClick={SlideMenu} className="btn btn-info">
        Logout</button>
</div>
</div>

} */
class SlideMenuBar extends Component {
    constructor(){
        super()
        this.slideMenu =  this.slideMenu.bind(this)
        this.logOut  = this.logOut.bind(this)
    }
    slideMenu(ev) {
        ev.preventDefault()
        console.log('hello');
        var element = document.getElementById("sidebar");
        element.classList.toggle("active");
     }
     logOut(ev){
        ev.preventDefault()
        console.log('hel');
        this.props.onLogout1();
     }
    render() {

        return <>
        <div className="navbar">
    <button id="sidebarCollapse" onClick={this.slideMenu} className="btn btn-info">
        <FontAwesomeIcon icon={faBars} /></button>
    <div className="nav ml-auto">
    <button id="sidebarCollapse" onClick={this.logOut} className="btn btn-info">
        Logout</button>
</div>
</div>
             </>
    }
}
export default SlideMenuBar;