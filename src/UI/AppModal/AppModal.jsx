import './AppModal.css';

export default function AppModal({ children, open, setOpen }) {
    return (
      <div onClick={() => setOpen(false)} className={open ? "modal-container active" : "modal-container"}>
        <div onClick={(e) => e.stopPropagation()} className="modal">{children}</div>
      </div>
    );
  }