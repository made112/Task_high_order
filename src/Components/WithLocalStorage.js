import React from 'react'
// import Form from './Form'


const  HOC = (WrappedComponent)=>{
    class HigherOrder extends React.Component{
        
         OnSave = (key,value)=>{
         localStorage.setItem(key,value);    
        }
    render() {
        return (
            <div>
                 <WrappedComponent saving = {this.OnSave} {...this.props}/>;
            </div>
        )
    }
}
return HigherOrder; 

}
// const Enchlogin = HOC(Form)

export default HOC;
// WithLOcalStorage= ()=>{
//     localStorage.setItem()
// }
// LogInfoPlugin = (props)=>{
//     props.on
// }
// export with (login)