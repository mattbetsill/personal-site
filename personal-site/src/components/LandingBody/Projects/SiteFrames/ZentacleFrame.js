import React from "react";

export default function ZentacleFrame() {
    return (
        <div style={{ width: '100%', height: '90vh' }}>
            <iframe
                src="https://zentacle.com"
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