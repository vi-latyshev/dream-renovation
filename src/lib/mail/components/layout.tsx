interface LayoutProps {
    subject: string;
    children: React.ReactNode;
}

export const LayoutMail = ({ subject, children }: LayoutProps) => (
    <html lang="ru" style={{ minHeight: '100%' }}>
        <head style={{ minHeight: '100%' }}>
            <title>{subject}</title>
        </head>
        <body
            style={{
                padding: 0,
                margin: 0,
                fontFamily: 'Arial, sans-serif',
                fontSize: 16,
                lineHeight: '22px',
                color: '#666',
            }}
        >
            {children}
        </body>
    </html>
);
