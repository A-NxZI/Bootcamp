export function LogRender(props){
    const hello = <h1>Hello {props.userName}</h1>;

    const login = <h1>login fail</h1>;

    return (props.logStatus ? hello : login)
}
export default LogRender;