import './AppButton.css';

export default function AppButton({children, ...props}) {
    return (<button className="app-btn" {...props}>{children}</button>)
}