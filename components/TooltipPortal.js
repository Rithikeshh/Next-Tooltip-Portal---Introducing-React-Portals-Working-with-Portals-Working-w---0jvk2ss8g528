import ReactDOM from 'react-dom';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
    return(
        <>
        {ReactDOM.createPortal(
            children,
            portalRoot
        )}
        </>
    )
}

export default TooltipPortal;
