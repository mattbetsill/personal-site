import React from "react";

export default function PanthropiaFrame() {
    return (
        <div style={{ width: '100%', height: '90vh' }}>
            <iframe
                src="https://panthropia.com"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    // transform: 'scale(0.)',
                    transformOrigin: '0 0'
                }}
                allow="autoplay; encrypted-media"
                title="External Site"

            ></iframe>
        </div>
    );
}