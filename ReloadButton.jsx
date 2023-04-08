import React from 'react'

function ReloadButton() {
    const handleClick = () => {
        window.location.reload();
    };
  return (
    <button onClick={handleClick}>
        Tentar novamente
    </button>
  );
}

export default ReloadButton;