import React from 'react'

function Button({ btnText, bgColor, textColor }) {
    return (
        <button style={{ backgroundColor: bgColor, color: textColor, border: 'none', padding: '8px 23px', borderRadius: "10px", fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
            {btnText}
        </button>
    )
}

export default Button