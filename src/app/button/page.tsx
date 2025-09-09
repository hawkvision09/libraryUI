'use client';
import React, { useState } from 'react';
import { Button } from 'woxin-user-interface';



const ButtonComponent = () => {
    type VariantType = "text" | "fill-dark" | "fill-light" | "stroke";
    type WidthType = "fullWidth" | "large" | "medium" | "small" | "fitContent";


    const [variant, setVariant] = useState<VariantType>('fill-dark');
    const [width, setWidth] = useState<WidthType>('fitContent');
    const [caption, setCaption] = useState('Dynamic Button');
    const [isDisable, setIsDisable] = useState(false);

    // Function to generate the JSX code string based on current state
    const generateCode = () => {
        const props = [];
        if (caption !== 'Dynamic Button') {
            props.push(`caption="${caption}"`);
        }
        if (variant !== 'fill-dark') {
            props.push(`variant="${variant}"`);
        }
        if (width !== 'fullWidth') {
            props.push(`width="${width}"`);
        }
        if (isDisable) {
            props.push(`isDisable={true}`);
        }
        const propString = props.length > 0 ? ` ${props.join(' ')}` : '';
        return `<Button${propString} />`;
    };

    // Style for the container to handle responsive layout
    const mainContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        padding: '2rem 1rem',
        fontFamily: 'sans-serif',
        boxSizing: 'border-box'
    };

    const innerContainerStyle = {
        maxWidth: '60rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    };

    // Style for the responsive grid layout
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem'
    };

    return (
        <div style={mainContainerStyle as React.CSSProperties}>
            {/* Main container for the live editor */}
            <div style={innerContainerStyle as React.CSSProperties}>
                {/* Heading */}
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#1F2937'
                }}>Live Button Editor</h1>
                <p style={{
                    fontSize: '1.125rem',
                    color: '#4B5563'
                }}>
                    Adjust the properties below to see how the button changes in real-time. The code will update automatically!
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {/* Live Preview and Controls Section */}
                    <div style={gridStyle}>
                        {/* Control Panel */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            padding: '1.5rem',
                            backgroundColor: '#F3F4F6',
                            borderRadius: '0.5rem',
                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color:'#4B5563' }}>Props</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {/* Caption Input */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <label style={{ fontWeight: 'bold', color: '#4B5563' }}>Caption:</label>
                                    <input
                                        type="text"
                                        value={caption}
                                        onChange={(e) => setCaption(e.target.value)}
                                        style={{
                                            padding: '0.5rem',
                                            borderRadius: '0.25rem',
                                            border: '1px solid #D1D5DB',
                                            color:'black'                            
                                        }}
                                    />
                                </div>
                                {/* Variant Controls */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <label style={{ fontWeight: 'bold', color: '#4B5563' }}>Variant:</label>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {['fill-dark', 'fill-light', 'stroke', 'text'].map((v) => (
                                            <button
                                                key={v}
                                                onClick={() => setVariant(v as VariantType)}
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '0.25rem',
                                                    backgroundColor: variant === v ? '#2196F3' : '#E5E7EB',
                                                    color: variant === v ? 'white' : '#1F2937',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {v}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Width Controls */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <label style={{ fontWeight: 'bold', color: '#4B5563' }}>Width:</label>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {['fit-content', 'small', 'medium', 'large', 'fullWidth'].map((w) => (
                                            <button
                                                key={w}
                                                onClick={() => setWidth(w as WidthType)}
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    borderRadius: '0.25rem',
                                                    backgroundColor: width === w ? '#2196F3' : '#E5E7EB',
                                                    color: width === w ? 'white' : '#fff',
                                                    border: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {w}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* Disable Toggle */}
                                <div style={{ display: 'flex', width:"fit-content", gap:"1rem" }}>
                                    <input
                                        type="checkbox"
                                        checked={isDisable}
                                        onChange={(e) => setIsDisable(e.target.checked)}
                                    />
                                    <label style={{ fontWeight: 'bold', color: '#4B5563' }}>Disabled:</label>
                                </div>
                            </div>
                        </div>

                        {/* Live Preview Area */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1.5rem',
                            backgroundColor: '#F3F4F6',
                            borderRadius: '0.5rem',
                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color:'#4B5563' }}>Preview</h3>
                            <Button
                                caption={caption}
                                variant={variant}
                                width={width}
                                isDisable={isDisable}
                                onClick={() => console.log('Button clicked!')}
                            />
                        </div>
                    </div>

                    {/* Live Code Section */}
                    <div style={{
                        padding: '1rem',
                        backgroundColor: '#1E293B',
                        borderRadius: '0.5rem',
                        overflowX: 'auto',
                    }}>
                        <h3 style={{ fontSize: '1rem', color: '#E2E8F0', fontWeight: 'bold', marginBottom: '0.5rem' }}>Generated Code</h3>
                        <pre style={{
                            color: '#E2E8F0',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                            lineHeight: '1.5'
                        }}>
                            {generateCode()}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ButtonComponent;